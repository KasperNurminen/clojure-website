(ns clojure-cv.views.sections
  (:require [reagent.core :as r]
            [clojure-cv.texts :as texts]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as ic]
            [accountant.core :as accountant]
            [re-frame.core :as re]))



(defn linkedin []
  [:svg {:x "0px" :y "0px" :width "22px" :height "22px" :view-box "0 0 430.117 430.117"}
   [:g
    [:path {:id "LinkedIn" :d "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z" :fill "#006DF0"}]]])

(defn about []
  (let [texts (get-in texts/texts [:main])]
    [:section#main
     [:div#main-left
      [:div#face
       [:img.avatar {:src "assets/kasper-light.jpg"}]
       [:div {:style {:text-align "center"}}
        [:h2.title "Kasper Nurminen"]
        [:h3.title {:style {:color "#AAAAAA"}} "Software Developer"]

        [ui/icon-button {:class-name "contact-icon"
                         :href       "mailto:kasper.nurminen@aalto.fi"
                         :style      {:stroke "#0069f4"}} (ic/communication-mail-outline)]
        [ui/icon-button {:class-name "contact-icon"
                         :href      "https://www.linkedin.com/in/kasper-nurminen/"
                         }
         [linkedin]]]]]
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
           (:interests (get-in texts/texts [:main])))]]]]]))


(defn star-view [name stars subsection?]
  (let [outlines (- 5 stars)]
    [:div.star-view
     [:span {:style (merge
                      (when subsection? {:margin-left "2rem"})
                      {:margin-right "1rem"})} name]
     [:span.stars (repeatedly stars (fn [] ^{:key (gensym)} [:div#marker])) (repeatedly outlines (fn [] ^{:key (gensym)} [:div#marker-outline]))]]))

(defn skills []
  (let [tooltip (r/adapt-react-class js/ReactTooltip)]
    [:section#skills.d-flex.flex-wrap
     [:div.desktop-w-70 {:style {:padding "2rem"}}
      [:h1 "Skills"]
      [:div.d-flex.flex-wrap {:style {:max-width "90%"}}
       (get-in texts/texts [:skills 0])
       (get-in texts/texts [:skills 1])
       (get-in texts/texts [:skills 2])]]
     [:div.desktop-w-20 {:style {:margin-top   "5rem"
                                 :margin-left  "2rem"
                                 }}

      [tooltip {:id        "visualization-explanation"
                :multiline true}
       "Visualized as a relative scale - does not represent overall knowledge of the topic." [:br] "My best skill is represented as 5 filled circles, and my worst marketable skill as 1 filled circle."]
      [:div {:style {:width "95%"}}
       [:h4 {:style {:margin-bottom 0}} "Programming technologies"
        [:span.tooltip {:data-tip true :data-for "visualization-explanation"} "?"]]

       [star-view "ClojureScript" 5]
       [star-view "re-frame" 5 true]
       [star-view "reagent" 5 true]
       [star-view "Javascript" 5]
       [star-view "React" 4 true]
       [star-view "Redux" 3 true]
       [star-view "CSS" 5]
       [star-view "HTML" 5]
       [star-view "Git" 5]
       [star-view "Python" 4]
       [star-view "Django" 3 true]
       [star-view "Scala" 3]
       [star-view "SQL/Postgres" 4]
       [star-view "Clojure" 3]
       [:h4 "Other"]
       [star-view "Software processes" 3]
       [star-view "Photoshop" 3]
       [star-view "Illustrator" 2]
       [star-view "Sketch" 1]
       [star-view "Adobe Premiere" 1]]
      ]]))

(defn experience-listing [{:keys [title years subtitle text]}]
  [:div
   [:h3 {:style {:margin-bottom "0.5rem"}} (str title " ") [:i {:style {:font-size "1.25rem"}} years]]
   [:p {:style {:margin-top 0}} [:i subtitle]]
   text])


(defn job-experience []
  [:section#job-experience
   [:div {:style {:padding "2rem"}}
    [:h1 "Job experience"]
    (map (fn [ed]  ^{:key (:title ed)}[experience-listing ed]) (get-in texts/texts [:job-experience]))]])

(defn education []
  [:section#education
   [:div {:style {:padding "2rem"}}
    [:h1 "Education"]
    (map (fn [ed]  ^{:key (:title ed)}[experience-listing ed]) (get-in texts/texts [:education]))]])


(defn portfolio []
  (r/create-class
    {:component-did-mount (fn []
                            (.init js/VanillaTilt (.querySelectorAll js/document ".portfolio-image") (clj->js {:scale 1.05
                                                                                                               :max   2})))
     :reagent-render      (fn []
                            [:section#portfolio
                             [:div {:style {:padding "2rem"}}
                              [:h1 "Portfolio"]
                              [:div.d-flex.flex-wrap {:style {
                                                              :margin-top "2rem"
                                                              :width      "100%"}}
                               [:div.portfolio-image {:on-click #(accountant/navigate! "/portfolio/ilmomasiina")
                                                      :style    {:background-image "url(assets/ilmomasiina.png)"}} [:h1 (get-in texts/texts [:ilmomasiina :title])]]
                               [:div.portfolio-image {:on-click #(accountant/navigate! "/portfolio/kaspernurminen")
                                                      :style {:background-image "url(assets/kaspernurminenfi.png)"
                                                              :color            "white"}} [:h1 "kaspernurminen.fi"]]]]])}))(defn contact []
  [:section#contact
   [:div {:style {:padding "2rem"}}
    [:h1 "Contact"]
    [:div.d-flex {:style {:justify-content "center"}}
     [ui/flat-button {:class-name "contact-icon"
                      :href       "tel:+358400509387"
                      :label      "+358400509387"
                      :icon       (r/as-component [ic/communication-phone])
                      :style      {:stroke "#0069f4"}} ]]
    [:div.d-flex {:style {:justify-content "center"}}
     [ui/icon-button {:class-name "contact-icon"
                      :href       "mailto:kasper.nurminen@aalto.fi"
                      :style      {:stroke "#0069f4"}} [ic/communication-mail-outline]]
     [ui/icon-button {:class-name "contact-icon"
                      :href       "https://www.linkedin.com/in/kasper-nurminen/"
                      } [linkedin]]]
    ]])

(defn copyright []
  (let [current-year (re/subscribe [:current-year])]
    [:div
     [ui/divider]
     [:div {:style {:display "flex" :justify-content "center" :align-items "center"}}

      [:p "Copyright Kasper Nurminen " @current-year]]]))