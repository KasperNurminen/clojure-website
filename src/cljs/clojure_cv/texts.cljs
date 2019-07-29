(ns clojure-cv.texts
  (:require [cljs-react-material-ui.icons :as ic]))

(def texts {:main
                    {:who-am-i  [:div
                                 [:h1 "Who am I?"]
                                 [:p "I am a 21-year old software developer from Finland. I have a couple of years of experience with Software Development, and I am currently studying for a Master's Degree in Information Networks in Aalto-University."]
                                 [:p "Jumping in at the deep end has always been my biggest strength - regardless of the task at hand, I jump straight at it and do whatever it takes to complete it. I am interested in how humans and computers interact (with a technical focus)."]]
                     :education [{:title    "Master of Science in Technology (2019 - 2022)"
                                  :subtitle "Information Networks, Aalto University"}
                                 {:title    "Bachelor of Science in Technology (2017 - 2019)"
                                  :subtitle "Information Networks, Aalto University"}
                                 {:title    "Undergraduate (2013)"
                                  :subtitle "Kerttuli School of ICT"}]
                     :interests [{:title    "Software Development (Substance)"
                                  :subtitle "Python, Javascript, Clojure, Scala"
                                  :icon     ic/hardware-computer
                                  }
                                 {:title    "Management of the big picture (Processes)"
                                  :subtitle "Agile, Waterfall, Scrum"
                                  :icon     ic/action-supervisor-account
                                  }
                                 {:title    "Learning"
                                  :subtitle "Lorem Ipsum"
                                  :icon     ic/social-school
                                  }]
                     }
            :skills [[:span
                      [:h4 "Software Development"]
                      [:p "My software development skillset includes a profiency with various programming languages and paradigms. I am confident with Python, Javascript, Scala and Clojure. My everyday work consists of using many common libraries and frameworks, such as React, Redux, Reagent, Re-frame and Django."]
                      [:p "I am also familiar with writing tests, build automation, writing clean code and using Git. I know how to collaborate with peers and to maintain a big and complicated codebase."]
                      [:p "I have knowledge of the most common workflows and processes about project management. I like to use agile methods in my development process, such as Scrum, Kanban, iterated waterfall and TDD."]]
                     [:span
                      [:h4 "Other"]
                      [:p "I am able to edit photos and videos in Photoshop and Premiere, Illustrator and Sketch. I strive to be a better designer, that is an area I am actively trying to improve."]
                      [:p "I also like to take a leadership-role in teams, when necessary. I like to get things done and often have a clear vision on how I would complete the task. I do, however, realize that my way to do it is not always the best, and listening to others is very important. If there is a better or more experienced leader in the group, I won't hesitate giving the command to them."]]
                     [:span
                      [:h4 "Languages"]
                      [:p "My native language is Finnish, but my English is quite good also. I can also communicate in Swedish, and know the basics of German."]]
                     ]
            :education      [{:text     [:span
                                         [:p "Information Networks is a trans-disciplinary study programme in engineering building on information and communication technology (ICT) and digital media. It combines the fields of social sciences, advanced digital technologies and business."]
                                         [:p "The programme builds on a vision where finding, defining and solving effectively relevant ICT and digital media related challenges is not possible without a holistic understanding about the interplay between technology, business and humans."]
                                         [:p "I currently have completed 90 / 300 credits."]]
                              :title    "Master & Bachelor of Science in Technology"
                              :years    "2017 - 2022"
                              :subtitle "Information Networks, Aalto University"}
                             {:text     [:span [:p "The only ICT-focused high school in Finland. I learned, among other things, the basics of Information and Communication Technologies, the basics of programming, and usage of InDesign."]]
                              :title    "Undergraduate"
                              :years    "2013"
                              :subtitle "Kerttuli School of ICT"}]
            :job-experience [{:title    "Taiste Oy"
                              :years    "1/2017 - present"
                              :subtitle "Software Developer"
                              :text     [:span [:p "Taiste builds mobile-driven digital solutions by combining customer insight, great UX and world-class technology expertise."]
                                         [:p "Our clients include The Finnish Taxi Owners' Federation, UPM, Suunto, Space Nation, Musiclock, Takeda, Helsinki Festival and Hesburger."]
                                         [:p "My everyday job here consists of full-stack development with varying clients and diverse tasks, ranging from web- and backend technologies to build automation, deployment and testing."]]

                              }
                             {:title    "Lingsoft Oy"
                              :years    "1⁄2017 - 12⁄2017"
                              :subtitle "Transcriber"
                              :text     [:span [:p "Litteration of records in Finnish and in English. Greatly increased my typing speed and English skills."]]
                              }
                             {:title    "Finnish Red Cross"
                              :years    "7⁄2014 - 8⁄2015"
                              :subtitle "F2F-fundraiser / F2F-teamleader"
                              :text     [:span [:p "Spreading the word about the Red Cross and getting new monthly donators. A marketing gig where I later got promoted to a team leader. I was in charge of the F2F team of Turku."]]
                              }]

            })