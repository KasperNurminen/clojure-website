(ns clojure-cv.views
  (:require
    [cljsjs.material-ui]
    [cljs-react-material-ui.core :refer [get-mui-theme color]]
    [cljs-react-material-ui.reagent :as ui]
    [cljs-react-material-ui.icons :as ic]
    [reagent.core :as r]));


(defn linkedin []
  [:svg {:x "0px" :y "0px" :width "22px" :height "22px" :view-box "0 0 430.117 430.117"}
   [:g
    [:path {:id "LinkedIn" :d "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z" :fill "#006DF0"}]]]
)
(defn about []

  [:div#main
   [:div#main-left
    [:div#face
     [:img.avatar {:src "https://media.licdn.com/dms/image/C5603AQHFTAWkVUORSg/profile-displayphoto-shrink_200_200/0?e=1546473600&v=beta&t=epYQpMGo5beJJftI9olsJxBtdNM9E2xY7Kxxn_D-Tnc"}]
     [:div {:style {:text-align "center"}}
        [:h2.title "Kasper Nurminen"]
      [:h3.title {:style {:color "#AAAAAA"}} "Software Developer"]

      [ui/icon-button {:class-name "contact-icon"
                       :href       "mailto:kasper.nurminen@aalto.fi"
                       :style      { :stroke "#0069f4"}} (ic/communication-mail-outline)]
      [ui/icon-button  {:class-name "contact-icon"
                        :href "https://www.linkedin.com"
                        }
                         (linkedin)]]]]
   [:div#main-right
    [:h1 "Basic information"]
    [:p "I am a 21-year old Software Developer and Information Networks student from Finland. I have a couple of years of experience with Software Development, and I am currently studying for a Master's Degree in Information Networks in Aalto-University."]
    [:p "Jumping in at the deep end has always been my biggest strength - Regardless of the task at hand, I jump straight at it and do whatever it takes to complete it. I am interested in how humans and computers interact (with a technical focus)."]
    [:div.col-2
     [:div.mr-2
      [:h3 "Strengths"]
      [ui/list
       [ui/list-item {:primary-text "Software Development (Substance)"
                      :secondary-text "Python, Javascript, Clojure, Scala"
                      :left-icon (ic/hardware-computer)}]
       [ui/list-item {:primary-text "Management of the big picture (Processes)"
                      :secondary-text "Agile, Waterfall, Scrum"
                      :left-icon (ic/action-supervisor-account)}]
         [ui/list-item {:primary-text "Learning"
                        :secondary-text "Lorem Ipsum"
                        :left-icon (ic/social-school)}]

       ]]
     [:div
      [:h3 "Education"]
      [ui/list
       [ui/list-item {:secondary-text "Information Networks, Aalto University"
                      :primary-text "Master of Science in Technology (2017-2022)"
                      :left-icon (ic/social-school)}]
       [ui/list-item {:secondary-text "Information Networks, Aalto University"
                      :primary-text "Bachelor of Science In Technology (2017-2020)"
                      :left-icon (ic/social-school)}]
       [ui/list-item {:secondary-text "Kerttuli High School of ICT"
                      :primary-text "Undergraduate"
                      :left-icon (ic/social-school)}]

         ]
      ]]]])
(defn menu-icons []
  [:div.mr-2
   [ui/flat-button {:label "Basic Information"}]
   [ui/flat-button {:label "Education"}]
   [ui/flat-button {:label "Job Experience"}]
   [ui/flat-button {:label "Lorem Ipsum"}]])

(defn header []
  [ui/paper {:class-name "header"}

   [:h3.ml-2 "CV - Kasper Nurminen"]
    [menu-icons]])
(defn main-panel []
  [ui/mui-theme-provider
   {:mui-theme (get-mui-theme
                 {:palette {:font-family "'Lato', sans-serif"}
                  :icon-button {:color "red"}
                  :h2 {:font-weight "300"}})}
   [:div
    [header]
    [:div.main-image
     [:div.main-title
      [:h1 {:style {:margin 0}} "Kasper Nurminen"]
      [:h2 {:style {:text-align "center" :padding-top 0}} "Software Developer"]]]


    [about]



    ]])