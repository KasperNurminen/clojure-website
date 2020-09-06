(ns clojure-cv.views.sections
  (:require [reagent.core :as r]
            [clojure-cv.texts :as texts]
            [cljs-react-material-ui.reagent :as ui]
            [cljs-react-material-ui.icons :as ic]
            [clojure-cv.subs]
            [vanilla-tilt :as vanilla-tilt]
            [accountant.core :as accountant]
            [re-frame.core :as re]))

(def tooltip (r/adapt-react-class js/ReactTooltip))

(defn linkedin []
  [:svg {:x "0px" :y "0px" :width "22px" :height "22px" :view-box "0 0 430.117 430.117"}
   [:g
    [:path {:id "LinkedIn" :d "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z" :fill "#006DF0"}]]])

(defn github []
  [:svg {:view-box "0 0 24 24"}
   [:path {:d "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}]])

(defn about []
  (let [texts (get-in texts/texts [:main])]
    [:section#main
     [:div#main-left
      [:div#face
       [:img.avatar {:src "assets/kasper-light.jpg"}]
       [:div.text-center
        [:h2.title "Kasper Nurminen"]
        [:h3.title {:style {:color       "#AAAAAA"
                            :line-height "1.2rem"
                            :font-size   "1.2rem"}} "Software Developer"]

        [ui/icon-button {:class-name "contact-icon"
                         :href       "mailto:kasper.nurminen@aalto.fi"
                         :style      {:stroke "#0069f4"}} (ic/communication-mail-outline)]
        [ui/icon-button {:class-name "contact-icon"
                         :href       "https://www.linkedin.com/in/kasper-nurminen/"
                         }
         [linkedin]]
        [ui/icon-button {:class-name "contact-icon"
                         :href       "https://www.github.com/KasperNurminen/"
                         }
         [github]]]]]
     [:div#main-right.ml-4
      (get-in texts/texts [:main :who-am-i])
      [:div.d-flex.flex-wrap
       [:div.col-md-6.pl-0
        [:h3 "Education"]
        [ui/list
         (map (fn [item]

                ^{:key (:title item)}
                [ui/list-item {:secondary-text       (:subtitle item)
                               :secondary-text-lines 2
                               :on-click             (or (:on-click item) #(re/dispatch [:scroll-into-view "education"]))
                               :primary-text         (:title item)
                               :left-icon            (ic/social-school)}]

                ) (:education texts))]]
       [:div.col-md-6
        [:h3 "Job experience"]
        [ui/list
         (map (fn [item]
                ^{:key (:title item)}
                [ui/list-item {:primary-text         (:title item)
                               :secondary-text       (:subtitle item)
                               :secondary-text-lines 2
                               :on-click             (or (:on-click item) #(re/dispatch [:scroll-into-view "job-experience"]))
                               :left-avatar          (r/as-element [ui/avatar {:src (:icon item)}])
                               }]
                ) (:job-experience-list (get-in texts/texts [:main])))]]]]]))


(defn star-view [name stars subsection?]
  (let [outlines (- 5 stars)]
    [:div.star-view
     [:span {:style (merge
                      (when subsection? {:margin-left "2rem"})
                      {:margin-right "0rem"})} name]
     [:span.stars (repeatedly stars (fn [] ^{:key (gensym)} [:div.marker])) (repeatedly outlines (fn [] ^{:key (gensym)} [:div.marker-outline]))]]))

(defn skills []
  [:section#skills.d-flex.flex-wrap
   [:div.col-md-8.pr-5
    [:h1.mb-0 "Skills"]
    [:div.d-flex.flex-wrap {:style {:max-width "100%"}}
     (get-in texts/texts [:skills 0])
     (get-in texts/texts [:skills 1])
     (get-in texts/texts [:skills 2])]]
   [:div.col-md-4 {:style {:margin-top "5rem"}}

    [tooltip {:id        "visualization-explanation"
              :multiline true}
     [:span "Below is a list of skills in no particular order. " [:br]
      "Bolded entries are programming languages, " [:br]
      "and the subsequent entries are frameworks " [:br]
      "and libraries for that programming language."]]
    [:div
     [:h4 "Buzzwords"
      [:span.tooltip {:data-tip true :data-for "visualization-explanation"} "?"]]
     [:div {:style {:font-family "monospace" :font-size "13pt"}}
      [:strong "Javascript:"] " React, Redux, Redux-Saga, Immutable.js, Three.js, Lodash, Ramda, d3, Leaflet, Cypress, Jest, Node, Express, Sequelize, Feathers"
      [:br] [:strong "ClojureScript:"] " re-frame, reagent"
      [:br] [:strong "SQL:"] " PostgreSQL, MySQL"
      [:br] [:strong "Python:"] " Django, Flask, numpy, pandas, scikit-learn, Jupyter Notebook, pytest"
      [:br] [:strong "AWS:"] " Elastic Beanstalk, EC2, RDS, S3, SNS, SQS, SES, Lambda, VPC, ELB, CloudFront, QuickSight"
      [:br] [:strong "Java:"] " Java Spring"
      [:br] [:strong "CSS:"] " Sass, styled-components, Bootstrap"
      [:br] [:strong "Other:"] " Docker, Docker Compose, GitLab CI"]
     ]]])

(defn get-text [text-or-fn]
  (if (fn? text-or-fn)
    (let [{:keys [full-time part-time]} @(re/subscribe [:vincit-months-working])]
      (text-or-fn full-time part-time))                     ; bit ugly - only function is the months full time and part time
    text-or-fn))

(defn experience-listing [{:keys [title years subtitle text]}]
  [:div.row
   [:div.col-md-4
    [:h3.mt-3.mb-2 (str title " ") [:i {:style {:font-size "1.25rem"}} (get-text years)]]
    [:p.mt-0 [:i subtitle]]]
   [:div.col-md-8 text]])


(defn job-experience []
  [:section#job-experience
   [:h1.text-align-center "Job experience"]
   (map (fn [ed] ^{:key (:title ed)} [experience-listing ed]) (get-in texts/texts [:job-experience]))])

(defn education []
  [:section#education
   [:h1 "Education"]
   (map (fn [ed] ^{:key (:title ed)} [experience-listing ed]) (get-in texts/texts [:education]))])


(defn calculate-timeline-marker-pos [year]
  (let [start 2012
        end (-> (js/Date.)
              (.getFullYear)
              (- start))
        pos (- year start)]
    (str (-> (/ pos end)
           (* 100)
           (- 2)
           ) "%")))

(defn render-timeline-marker [{:keys [title text]}]
  ^{:key title }
  [:div [:span [tooltip {:id        title
                         :place "right"
                         :type "info"
                         :multiline true} text]]
   [:div.marker.big {:data-tip true
                     :data-for title
                     :style {:position "absolute"
                             :top      -12
                             :left     (calculate-timeline-marker-pos title)}}
    [:span {:style {:position "relative"
                    :top      30
                    :right    7}} title]]])

(defn achievements []
  [:section#achievements
   [:h1.text-align-center "Achievements"]
   [:i "Hover over the dots to view more information"]
   [:div.achievements-timeline
    (map render-timeline-marker (get-in texts/texts [:achievements]))]])

(defn start-tilt []
  (.init vanilla-tilt (.querySelectorAll js/document ".portfolio-image")
    (clj->js {"scale" 1.05
              "max"   2})))

(defn portfolio []
  (fn []
    (r/with-let [_ (js/setTimeout start-tilt 500)]
      [:section#portfolio
       [:h1 "Portfolio"]
       [:h2 {:style {:text-align "center"}} [:i "Personal projects"]]
       [:div.d-flex.flex-wrap {:style {:margin-top "2rem"
                                       :width      "100%"}}
        [:div.portfolio-image {:on-click #(re/dispatch [:navigate-to-portfolio-page :ilmomasiina])
                               :style    {:background-image "url(assets/ilmomasiina.webp)"}} [:h1 (get-in texts/texts [:ilmomasiina :title])]]
        [:div.portfolio-image {:on-click #(re/dispatch [:navigate-to-portfolio-page :kaspernurminen])
                               :style    {:background-image "url(assets/kaspernurminenfi.webp)"
                                          :color            "white"}} [:h1 "kaspernurminen.fi"]]
        [:div.portfolio-image {:on-click #(re/dispatch [:navigate-to-portfolio-page :oloscreen])
                               :style    {:background-image "url(assets/oloscreen.webp)"
                                          :color            "white"}} [:h1 "Oloscreen"]]
        [:div.portfolio-image {:on-click #(re/dispatch [:navigate-to-portfolio-page :infodisplay])
                               :style    {:background-image "url(assets/infodisplay.webp)"}} [:h1 "Infodisplay"]]]
       [:h2 {:style {:text-align "center"}} [:i "Commercial projects I have been involved with"]]
       [:div.d-flex.flex-wrap {:style {
                                       :margin-top "2rem"
                                       :width      "100%"}}
        [:a.portfolio-image {:href  "https://www.taiste.fi/work/valopilkku/"
                             :style {
                                     :text-decoration  "none"
                                     :background-image "url(assets/valopilkku-in-use-1312.webp"}} [:h1 "Valopilkku (Suomen Taksiliitto)"]]
        [:a.portfolio-image {:href  "https://www.taiste.fi/work/hesburger/"
                             :style {
                                     :text-decoration  "none"
                                     :background-image "url(assets/hesburger-hiccup-1000.webp"}} [:h1 "Design System (Hesburger)"]]]])))

(defn contact []
  [:section#contact {:style {:padding-top    "2rem"
                             :padding-bottom "2rem"}}
   [:div.p-2
    [:h1 "Contact"]
    [:div.d-flex {:style {:justify-content "center"}}
     [ui/flat-button {:class-name  "contact-icon"
                      :href        "tel:+358400509387"
                      :label-style {:bottom "6px"}
                      :label       "+358400509387"
                      :icon        (r/as-element [ic/communication-phone])
                      :style       {:stroke "#0069f4"}}]
     [ui/flat-button {:class-name  "contact-icon"
                      :href         "mailto:kasper.nurminen@aalto.fi"
                      :label-style {:bottom "6px"
                                    :text-transform "none"}
                      :label        "kasper.nurminen@aalto.fi"
                      :icon        (r/as-element [ic/communication-mail-outline])
                      :style       {:stroke "#0069f4"}}]]
    [:div.d-flex {:style {:justify-content "center"}}
     [ui/icon-button {:class-name "contact-icon"
                      :href       "https://www.linkedin.com/in/kasper-nurminen/"
                      } [linkedin]]]
    ]])

(defn copyright []
  (let [current-year (re/subscribe [:current-year])]
    [:div
     [ui/divider]
     [:div.d-flex.justify-content-center.align-items-center

      [:p "Copyright Kasper Nurminen " @current-year]]]))