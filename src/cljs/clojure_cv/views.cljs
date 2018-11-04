(ns clojure-cv.views
  (:require
    [cljsjs.material-ui]
    [cljs-react-material-ui.core :refer [get-mui-theme color]]
    [cljs-react-material-ui.reagent :as ui]
    [cljs-react-material-ui.icons :as ic]
    [reagent.core :as r]
    [re-frame.core :as re]));


(defn linkedin []
  [:svg {:x "0px" :y "0px" :width "22px" :height "22px" :view-box "0 0 430.117 430.117"}
   [:g
    [:path {:id "LinkedIn" :d "M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707   c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21   v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824   C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463   c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z    M5.477,420.56h92.184v-277.32H5.477V420.56z" :fill "#006DF0"}]]]
)
(defn about []

  [:section#main
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
    [:h1 "Who, me?"]
    [:p "I am a 21-year old Software Developer and second year Information Networks student from Finland. I have a couple of years of experience with Software Development, and I am currently studying for a Master's Degree in Information Networks in Aalto-University."]
    [:p "Jumping in at the deep end has always been my biggest strength - Regardless of the task at hand, I jump straight at it and do whatever it takes to complete it. I am interested in how humans and computers interact (with a technical focus)."]
    [:div.col-2

     [:div
      [:h3 "Education"]
      [ui/list
       [ui/list-item {:secondary-text "Information Networks, Aalto University"
                      :on-click #(re/dispatch [:modal true])
                      :primary-text "Master of Science in Technology (2017-2022)"
                      :left-icon (ic/social-school)}]
       [ui/list-item {:secondary-text "Information Networks, Aalto University"
                      :on-click #(re/dispatch [:modal true])
                      :primary-text "Bachelor of Science In Technology (2017-2020)"
                      :left-icon (ic/social-school)}]
       [ui/list-item {:secondary-text "Kerttuli High School of ICT"
                      :on-click #(.open js/window "https://www.ictlukio.com/")
                      :primary-text "Undergraduate"
                      :left-icon (ic/social-school)}]

         ]
      ]
     [:div.mr-2
      [:h3 "Interests"]
      [ui/list
       [ui/list-item {:primary-text "Software Development (Substance)"
                      :secondary-text "Python, Javascript, Clojure, Scala"
                      :hover-color "white"
                      :style {:cursor "initial"}
                      :left-icon (ic/hardware-computer)}]
       [ui/list-item {:primary-text "Management of the big picture (Processes)"
                      :secondary-text "Agile, Waterfall, Scrum"
                      :hover-color "white"
                      :style {:cursor "initial"}
                      :left-icon (ic/action-supervisor-account)}]
       [ui/list-item {:primary-text "Learning"
                      :secondary-text "Lorem Ipsum"
                      :hover-color "white"
                      :style {:cursor "initial"}
                      :left-icon (ic/social-school)}]

       ]]
     ]]])


(defn menu-button [label id]
  (let [current-section (re/subscribe [:current-section])]
    [ui/flat-button (merge (if (= id @current-section) {:primary true})
                           {:on-click (fn [] (do
                                               (.setTimeout js/window #(re/dispatch [:set-current-section id]) 600)
                                               (re/dispatch [:scroll-into-view id])))
                            :style    {:text-align "left"}
                            :label    label})])
  )
(defn menu-icons [menu-open]
  [:div.mr-2.menu-icons {:class-name (when menu-open "menu-icons-expanded")}
   [menu-button  "Basic Information" "main"]
   [menu-button "Job Experience" "job-experience"]
   [menu-button  "Portfolio" "portfolio"]
   [menu-button  "Contact me" "contact"]
   ])

(defn header []
  (let [menu-open (re/subscribe [:menu-open])
        header-class-names (if @menu-open "header header-expanded" "header")]
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


      [:img.aalto-logo {:src "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Aalto-yliopiston_logo.svg/300px-Aalto-yliopiston_logo.svg.png"}]
      [:h1 "Information Networks"]
      [:p "The Master’s Programme in Information Networks is a trans-disciplinary study programme in engineering building on information and communication technology (ICT) and digital media. It combines the fields of social sciences, advanced digital technologies and business."]
      [:p "The programme builds on a vision where finding, defining and solving effectively relevant ICT and digital media related challenges is not possible without a holistic understanding about the interplay between technology, business and humans."]
      [:p "I currently have completed 90 / 300 credits."]
      ]]))

(defn job-listing [title time subtitle]
  [:div
   [:h3 {:style {:margin-bottom "0.5rem"}} (str title " ") [:i {:style {:font-size "1.25rem"}} time]]
   [:p {:style {:margin-top 0}} [:i subtitle]]]
  )

(defn job-experience []
  [:section#job-experience
   [:div {:style {:padding "2rem"}}
    [:h1 "Job experience"]
    [job-listing "Taiste Oy" "1/2017 - present" "Software Developer"]

    [:p "Taiste builds mobile-driven digital solutions by combining customer insight, great UX and world-class technology expertise." ]
    [:p "Our clients include The Finnish Taxi Owners' Federation, UPM, Suunto, Space Nation, Musiclock, Takeda, Helsinki Festival and Hesburger."]
    [:p "My everyday job here consists of full-stack development with varying clients and diverse tasks, ranging from web- and backend technologies to build automation, deployment and testing."]
    [job-listing "Lingsoft Oy" "1⁄2017 - 12⁄2017" "Transcriber"]
    [:p "Litteration of records in Finnish and in English. Greatly increased my typing speed and English skills."]
    [job-listing "Finnish Red Cross" "7⁄2014 - 8⁄2015" "F2F-fundraiser / F2F-teamleader"]
    [:p "Spreading the word about the Red Cross and getting new monthly donators. A marketing gig where I later got promoted to a team leader. I was in charge of the F2F team of Turku."]
    ]

   ]
  )
(defn on-scroll [ sections]
  (let [mouse-y (.-scrollY js/window)
        prev-section (re/subscribe [:current-section])
        inner-height (.-innerHeight js/window)
        current-section (->> sections
                             (filter #(< 0 (- (.-offsetTop %) mouse-y (- (/ inner-height 2)))))
                             (first)
                             (.-id))]
    (if-not (= @prev-section current-section)
      (re/dispatch [:set-current-section current-section]))))

(defn on-resize []
  (let [menu-open (re/subscribe [:menu-open])]

    (if (and @menu-open (< 1080 (.-innerWidth js/window)))
      (re/dispatch [:toggle-menu])))
  )

(defn portfolio []
  [:section#portfolio [:div {:style {:padding "2rem"}}
                       [:h1 "Portfolio"]
                       [:p "Kaikkee on tullut tehtyy..."]]] )

(defn copyright []
  [:div
   [ui/divider]
   [:div {:style {:display "flex" :justify-content "center" :align-items "center"}}

    [:p "Copyright Kasper Nurminen 2018"]]])

(defn contact []
  [:section#contact {:style {:background-color "#f9f9f9"}}
   [:div {:style {:padding "2rem"}}
    [:h1 "Contact me"]
    [:p "Lähetä vaikka faksi! (TODO)"]]] )
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
                                                {:palette     {:primary-1-color "#4199ee"
                                                               :font-family "'Lato', sans-serif"}
                                                 :icon-button {:color "red"}
                                                 :h2          {:font-weight "300"}})}
                                  [:div
                                   [header]
                                   [:div {:on-click #(if @menu-open (re/dispatch [:toggle-menu]))}

                                    [:div.main-image
                                     [:div.main-title
                                      [:h1 {:style {:text-align "center" :margin 0}} "Kasper Nurminen"]
                                      [:h2 {:style {:text-align "center" :padding-top 0}} "Software Developer"]
                                      [ui/floating-action-button {:mini true
                                                                  :on-click #(re/dispatch [:scroll-into-view "main"])} [ic/hardware-keyboard-arrow-down]]]]


                                    [about]
                                    [job-experience]
                                    [portfolio]
                                    [contact]
                                    [copyright]
                                    [ui/floating-action-button {:on-click #(re/dispatch [:scroll-into-view "main"])
                                                                :class-name (if (= @current-section "main") "hidden top-button" "top-button")}
                                     [ic/hardware-keyboard-arrow-up {:style {:height "52px"}}]]
                                    [dialog-container @modal-open]

                                    ]]]))}))