(ns clojure-cv.views.core
  (:require
    [cljsjs.material-ui]
    [cljsjs.react-tooltip]
    [cljs-react-material-ui.core :refer [get-mui-theme color]]
    [cljs-react-material-ui.reagent :as ui]
    [clojure-cv.views.sections :as sections]
    [accountant.core :as accountant]
    [reagent.core :as r]
    [re-frame.core :as re]
    [cljs-react-material-ui.icons :as ic]))



(defn menu-button [label id]
  (let [current-section (re/subscribe [:current-section])]
    [ui/flat-button (merge (if (= id @current-section) {:primary true})
                      {:on-click (fn [] (do
                                          (.setTimeout js/window #(re/dispatch [:set-current-section id]) 600)
                                          (re/dispatch [:scroll-into-view id])))
                       :style    {:text-align "left"}
                       :label    label})]))

(def portfolio-pages #{"ilmomasiina" "kaspernurminenfi" "oloscreen" "infodisplay"})

(defn menu-icons [menu-open]
  [:div.mr-2.menu-icons {:class-name (when menu-open "menu-icons-expanded")}
   [menu-button "Basic Information" "main"]
   [menu-button "Skills" "skills"]
   [menu-button "Job Experience" "job-experience"]
   [menu-button "Education" "education"]
   [menu-button "Achievements" "achievements"]
   [menu-button "Portfolio" "portfolio"]
   [menu-button "Contact me" "contact"]])

(defn header []
  (let [menu-open (re/subscribe [:menu-open])
        scroll-is-at-beginning (re/subscribe [:scroll-is-at-beginning])
        current-section (re/subscribe [:current-section])
        is-portfolio-page? (contains? portfolio-pages @current-section)
        image-enlarged (re/subscribe [:image-enlarged])
        header-class-names (cond-> ""
                             true (str "header")
                             @menu-open (str " header-expanded")
                             (and (= "main" @current-section) @scroll-is-at-beginning) (str " black")
                             is-portfolio-page? (str " pos-absolute")
                             @image-enlarged (str " hidden"))]
    [ui/paper {:class-name header-class-names}

     [:h3.ml-4 "CV - Kasper Nurminen"]
     (if is-portfolio-page? [ui/flat-button {:on-click #(re/dispatch [:navigate-to-portfolio])} "Back"]
                            [:div
                             [menu-icons @menu-open]
                             [ui/icon-button {:class-name "menu-select" :on-click #(re/dispatch [:toggle-menu])} [ic/navigation-menu]]])]))

(defn on-scroll [sections]
  (let [scroll-y (.-scrollY js/window)
        prev-section (re/subscribe [:current-section])
        inner-height (.-innerHeight js/window)
        identity-or-last-section #(if % % (last sections))
        current-section (->> sections
                          (filter #(< 0 (- (.-offsetTop %) scroll-y (- (/ inner-height 2)))))
                          (first)
                          (identity-or-last-section)
                          (.-id))]
    (re/dispatch [:scroll-is-at-beginning (= 0 scroll-y)])
    (if-not (= @prev-section current-section)
      (re/dispatch [:set-current-section current-section]))))

(defn on-resize []
  (let [menu-open (re/subscribe [:menu-open])]
    (if (and @menu-open (< 1080 (.-innerWidth js/window)))
      (re/dispatch [:toggle-menu]))))

(defn main-page []
  (let [
        menu-open (re/subscribe [:menu-open])
        current-section (re/subscribe [:current-section])]
    [:div {:on-click #(if @menu-open (re/dispatch [:toggle-menu]))}
     [:div.main-image
      [:div.main-title
       [:h1 {:style {:text-align "center" :margin 0}} "Kasper Nurminen"]
       [:h2 {:style {:text-align "center" :padding-top 0}} "Software Developer"]
       [ui/floating-action-button {:mini     true
                                   :on-click #(re/dispatch [:scroll-into-view "main"])} [ic/hardware-keyboard-arrow-down {:style {:height "42px" }}]]]]
     [:div {:style {:position "relative"}} [:div.slanted-bar]]

     [:div.container-fluid.p-0
      [sections/about]
      [sections/skills]
      [sections/job-experience]
      [sections/education]
      [sections/achievements]
      [sections/portfolio]
      [sections/contact]
      [sections/copyright]
      [ui/floating-action-button {:secondary true
                                  :on-click   #(re/dispatch [:scroll-into-view "main"])
                                  :class-name (if (= @current-section "main") "hidden top-button" "top-button")}
       [ic/hardware-keyboard-arrow-up {:style {:height "52px"}}]]]]))

(defn main-panel [page]
  (r/create-class
    {
     :component-did-mount    (fn []
                               (let [sections (.getElementsByTagName js/document "section")]
                                 (.addEventListener js/window "resize" on-resize)
                                 (.addEventListener js/document "scroll" (fn [] (on-scroll (.from js/Array sections))))))
     :component-will-unmount (fn []
                               (.removeEventListener js/document "scroll" on-scroll)
                               (.removeEventListener js/window "resize" on-resize))
     :reagent-render         (fn []
                               [ui/mui-theme-provider
                                {:mui-theme (get-mui-theme
                                              {:floating-action-button {:color "#4199ee"
                                                                        :secondary-color "#ffffff"}
                                               :palette
                                                                       {:primary-1-color "#4199ee"
                                                                        :font-family     "'Lato', sans-serif"}
                                               :icon-button            {:color "red"}
                                               :h2                     {:font-weight "300"}})}
                                [:div
                                 [header]
                                 [page]]])}))