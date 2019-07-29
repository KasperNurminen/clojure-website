(ns clojure-cv.views
  (:require
    [cljsjs.material-ui]
    [clojure-cv.texts :as texts]
    [cljs-react-material-ui.core :refer [get-mui-theme color]]
    [cljs-react-material-ui.reagent :as ui]
    [cljs-react-material-ui.icons :as ic]
    [reagent.core :as r]
    [re-frame.core :as re]));


(defn linkedin []
  [:svg {:x "0px" :y "0px" :width "22px" :height "22px" :view-box "0 0 430.117 430.117"}
   [:g
    [:path {:id "LinkedIn" :d "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z" :fill "#006DF0"}]]])

(defn about []
  (let [texts (get-in texts/texts [:main ])]
    [:section#main
     [:div#main-left
      [:div#face
       [:img.avatar {:src "https://media.licdn.com/dms/image/C5603AQHFTAWkVUORSg/profile-displayphoto-shrink_200_200/0?e=1546473600&v=beta&t=epYQpMGo5beJJftI9olsJxBtdNM9E2xY7Kxxn_D-Tnc"}]
       [:div {:style {:text-align "center"}}
        [:h2.title "Kasper Nurminen"]
        [:h3.title {:style {:color "#AAAAAA"}} "Software Developer"]

        [ui/icon-button {:class-name "contact-icon"
                         :href       "mailto:kasper.nurminen@aalto.fi"
                         :style      {:stroke "#0069f4"}} (ic/communication-mail-outline)]
        [ui/icon-button {:class-name "contact-icon"
                         :href       "https://www.linkedin.com"
                         }
         (linkedin)]]]]
     [:div#main-right
      (get-in texts/texts [:main :who-am-i])
      [:div.col-2 {:style {:justify-content "center"}}
       [:div
        [:h3 "Education"]
        [ui/list
         (map (fn [item]

                ^{:key (:title item)}
                [ui/list-item {:secondary-text (:subtitle item)
                               :on-click       (or (:on-click item) #(re/dispatch [:scroll-into-view "education"]))
                               :primary-text   (:title item)
                               :left-icon      (ic/social-school)}]

                ) (:education texts))]]
       [:div.mr-2
        [:h3 "Interests"]
        [ui/list
         (map (fn [item]
                ^{:key (:title item)}
                [ui/list-item {:primary-text   (:title item)
                               :secondary-text (:subtitle item)
                               :hover-color    "white"
                               :style          {:cursor "initial"}
                               :left-icon      ((:icon item))}])
              (:interests (get-in texts/texts [:main ])))]]]]]))


(defn menu-button [label id]
  (let [current-section (re/subscribe [:current-section])]
    [ui/flat-button (merge (if (= id @current-section) {:primary true})
                           {:on-click (fn [] (do
                                               (.setTimeout js/window #(re/dispatch [:set-current-section id]) 600)
                                               (re/dispatch [:scroll-into-view id])))
                            :style    {:text-align "left"}
                            :label    label})]))

(defn menu-icons [menu-open]
  [:div.mr-2.menu-icons {:class-name (when menu-open "menu-icons-expanded")}
   [menu-button  "Basic Information" "main"]
   [menu-button "Skills" "skills"]
   [menu-button "Job Experience" "job-experience"]
   [menu-button "Education" "education"]
   [menu-button  "Portfolio" "portfolio"]
   [menu-button  "Contact me" "contact"]])

(defn header []
  (let [menu-open (re/subscribe [:menu-open])
        scroll-is-at-beginning (re/subscribe [:scroll-is-at-beginning])
        header-class-names (str (if @menu-open "header header-expanded" "header") (if @scroll-is-at-beginning " black"))]
    [ui/paper {:class-name header-class-names}

     [:h3.ml-2 "CV - Kasper Nurminen"]
     [menu-icons @menu-open]
     [ui/icon-button {:class-name "menu-select" :on-click #(re/dispatch [:toggle-menu])} [ic/navigation-menu]]]))

(defn dialog-container [modal-open]
  (let [buttons [ (r/as-element [ui/flat-button {:on-click #((.open js/window "https://into.aalto.fi/display/eninf/Information+Networks"))} "Learn more"]) (r/as-element [ui/flat-button {:on-click #(re/dispatch [:modal false])} "Close"])]]
    [ui/dialog {:actions                  buttons
                ; :paper-props {:style {:width "100vw"}} TODO
                :on-request-close         #(re/dispatch [:modal false])
                :open                     modal-open
                :auto-scroll-body-content true
                :body-style               {:padding 0 :border-top 0}}
     [:img {:style {:height "200px" :width "100%" :object-fit "cover"}
            :src   "assets/aaltocampus.jpg"}]
     [:div {:style {:padding "24px"}}


      [:img.aalto-logo {:src "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Aalto-yliopiston_logo.svg/300px-Aalto-yliopiston_logo.svg.png"}]]]))

(defn experience-listing [{:keys [title years subtitle text]}]
  ^{:key title}
  [:div
   [:h3 {:style {:margin-bottom "0.5rem"}} (str title " ") [:i {:style {:font-size "1.25rem"}} years]]
   [:p {:style {:margin-top 0}} [:i subtitle]]
   text])

(defn job-experience []
  [:section#job-experience
   [:div {:style {:padding "2rem"}}
    [:h1 "Job experience"]
    (map (fn [ed] [experience-listing ed]) (get-in texts/texts [:job-experience]))]])

(defn education []
  [:section#education
   [:div {:style {:padding "2rem"}}
    [:h1 "Education"]
    (map (fn [ed] [experience-listing ed]) (get-in texts/texts [:education]) )]])

(defn on-scroll [ sections]
  (let [scroll-y (.-scrollY js/window)
        prev-section (re/subscribe [:current-section])
        inner-height (.-innerHeight js/window)
        current-section (->> sections
                             (filter #(< 0 (- (.-offsetTop %) scroll-y (- (/ inner-height 2)))))
                             (first)
                             (.-id))]
    (re/dispatch [:scroll-is-at-beginning (= 0 scroll-y)] )
    (if-not (= @prev-section current-section)
      (re/dispatch [:set-current-section current-section]))))

(defn on-resize []
  (let [menu-open (re/subscribe [:menu-open])]
    (if (and @menu-open (< 1080 (.-innerWidth js/window)))
      (re/dispatch [:toggle-menu]))))

(defn portfolio []
  [:section#portfolio [:div {:style {:padding "2rem" }}
                       [:h1 "Portfolio"]
                       [:p "Kaikkee on tullut tehtyy..."]]] )

(defn copyright []
  (let [current-year (re/subscribe [:current-year])]
    [:div
     [ui/divider]
     [:div {:style {:display "flex" :justify-content "center" :align-items "center"}}

      [:p "Copyright Kasper Nurminen " @current-year]]]))

(defn contact []
  [:section#contact
   [:div {:style {:padding "2rem"}}
    [:h1 "Contact me"]
    [:p "Lähetä vaikka faksi! (TODO)"]]])

(defn skills []
  [:section#skills [:div {:style {:padding "2rem" } }
                    [:h1 "Skills"]
                    [:div {:style {:display "flex" :flex-wrap "wrap"}}
                     [:div.column
                      (get-in texts/texts [:skills 0])]
                     [:div.column
                      (get-in texts/texts [:skills 1])]
                     [:div.column
                      (get-in texts/texts [:skills 2])]]]])

(defn main-panel []
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
                               (let [modal-open (re/subscribe [:modal-open])
                                     menu-open (re/subscribe [:menu-open])
                                     current-section (re/subscribe [:current-section])]
                                 [ui/mui-theme-provider
                                  {:mui-theme (get-mui-theme
                                                {:palette
                                                              {:primary-1-color "#4199ee"
                                                               :font-family     "'Lato', sans-serif"}
                                                 :icon-button {:color "red"}
                                                 :h2          {:font-weight "300"}})}
                                  [:div
                                   [header]
                                   [:div {:on-click #(if @menu-open (re/dispatch [:toggle-menu]))}

                                    [:div.main-image
                                     [:div.main-title
                                      [:h1 {:style {:text-align "center" :margin 0}} "Kasper Nurminen"]
                                      [:h2 {:style {:text-align "center" :padding-top 0}} "Software Developer"]
                                      [ui/floating-action-button {:mini     true
                                                                  :on-click #(re/dispatch [:scroll-into-view "main"])} [ic/hardware-keyboard-arrow-down]]]]
                                    [:div#test {:style {:height           "100px"
                                                        :width            "120vw"
                                                        :background-color "white"
                                                        :position         "absolute"
                                                        :bottom           "-150px"
                                                        :transform        "rotate(-3deg)"
                                                        }}]


                                    [about]
                                    [skills]
                                    [job-experience]
                                    [education]
                                    [portfolio]
                                    [contact]
                                    [copyright]
                                    [ui/floating-action-button {:on-click   #(re/dispatch [:scroll-into-view "main"])
                                                                :class-name (if (= @current-section "main") "hidden top-button" "top-button")}
                                     [ic/hardware-keyboard-arrow-up {:style {:height "52px"}}]]
                                    [dialog-container @modal-open]

                                    ]]]))}))