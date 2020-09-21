(ns clojure-cv.views.portfolio
  (:require [cljs-react-material-ui.reagent :as ui]
            [re-frame.core :as re]
            [accountant.core :as accountant]
            [reagent.core :as r]
            [clojure-cv.subs]
            [clojure-cv.texts :as texts]))

(defn render-buttons [buttons]
  [:div.d-flex.flex-wrap.justify-content-center
   (map (fn [button]
          ^{:key (:title button)}
          [:span
           (if (= :github (:type button))
             [ui/flat-button {:label          (:title button)
                              :label-position "before"
                              :target "_blank"
                              :href (:href button)
                              :icon           (r/as-element [:img {:height "32px"
                                                                     :width  "32px"
                                                                     :src    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"}])}]
             [ui/flat-button {:label (:title button)
                              :target "_blank"
                              :href (:href button)}])]) buttons)])

(defn render-portfolio-section [key]
  (r/with-let [_ (re/dispatch [:set-current-section (name key)])]
    (let [image-enlarged (re/subscribe [:image-enlarged])]
      [:section {:id key}
       [:div.row.align-items-center
        [:div.col-md-7
         [:h1.text-center (get-in texts/texts [key :title])]]
        [:div.col-md-5 {:style {:font-family "monospace"}}
         [:p [:i "Used technologies:"]]
         [:p (get-in texts/texts [key :technologies])]]]
       [:div.row
        (when @image-enlarged [:div.cover])
        [:div.portfolio-image.detail-page
         (merge
           (when @image-enlarged
             {:class "enlarged"})
           {:on-click #(re/dispatch [:toggle-image-enlargement])
            :style    {:background-image (str "url(../../assets/" (name key) ".webp)")}})]]
       [:div.row.m-4
        (get-in texts/texts [key :text])]


       [:div.row.flex-column
        [render-buttons (get-in texts/texts [key :buttons])]]
       ])))

(defn ilmomasiina []
  [render-portfolio-section :ilmomasiina])

(defn kaspernurminen []
  [render-portfolio-section :kaspernurminenfi])

(defn oloscreen []
  [render-portfolio-section :oloscreen])

(defn infodisplay []
  [render-portfolio-section :infodisplay])

(defn gameservice []
  [render-portfolio-section :gameservice])

(defn asumistukilaskuri []
  [render-portfolio-section :asumistukilaskuri])

(defn ydinbook []
  [render-portfolio-section :ydinbook])




