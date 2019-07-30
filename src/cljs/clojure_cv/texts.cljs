(ns clojure-cv.texts
  (:require [cljs-react-material-ui.icons :as ic]))

(def texts {:main
                            {:who-am-i  [:div
                                         [:h1 "Who am I?"]
                                         [:p "I am a 22-year old software developer from Finland. I have a couple of years of experience with Software Development, and I am currently studying for a Master's Degree in Information Networks in Aalto-University."]
                                         [:p "Jumping in at the deep end has always been my biggest strength - regardless of the task at hand, I jump straight at it and do whatever it takes to complete it. I am interested in how humans and computers interact (with a technical focus)."]
                                         [:p "On my free time I often climb (mostly bouldering), go to the gym and play video games. I also like cycling."]]
                             :education [{:title    "Master of Science in Technology (2019 - 2022)"
                                          :subtitle "Information Networks, Aalto University"}
                                         {:title    "Bachelor of Science in Technology (2017 - 2019)"
                                          :subtitle "Information Networks, Aalto University"}
                                         {:title    "Undergraduate (2013)"
                                          :subtitle "Kerttuli School of ICT"}]
                             :interests [{:title    "Software Development"
                                          :subtitle "Python, Javascript, ClojureScript, Scala"
                                          :icon     ic/hardware-computer
                                          }
                                         {:title    "Management processes"
                                          :subtitle "Agile, Waterfall, Scrum"
                                          :icon     ic/action-group-work
                                          }
                                         {:title    "Client interaction"
                                          :subtitle "Requirements engineering"
                                          :icon     ic/social-people
                                          }]
                             }
            :skills         [[:span
                              [:h4 "Software Development"]
                              [:p "My software development skillset includes a profiency with various programming languages and paradigms. I am confident with Python, Javascript, Scala and ClojureScript. My everyday work consists of using many common libraries and frameworks, such as React, Redux, Reagent, Re-frame and Django."]
                              [:p "I am also familiar with writing tests, build automation, writing clean code and using Git. I know how to collaborate with peers and to maintain a big and complicated codebase."]
                              [:p "I have knowledge of the most common workflows and processes about project management. I like to use agile methods in my development process, such as Scrum, Kanban and TDD."]]
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
                                         [:p "I currently have completed 135 / 300 credits."]]
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
                                         [:p "Clients I worked with include The Finnish Taxi Owners' Federation and Hesburger."]
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
            :ilmomasiina    {:title   "Athene's event registration machine"
                             :text    [:span
                                       [:p "Information Network's students' guild Athene was in a dire need of a new event registration system, and our computer gang and I (Athene's CTO of 2019) made a new one using modern technologies."]
                                       [:p "The new event registration system uses React and Redux for it's frontend, and Node and Feathers for it's backend. The project was started before I started university, but we finally managed to release it in 2019. It can handle hundreds of simultaneous event registrations without hiccups."]
                                       [:p "The system also has a fully working administration panel, where new users and events can be created, managed and removed."]
                                       [:p "This project taught me leadership more than anything else. The people that had previously worked with the system were mostly in a full-time job and/or graduated, and I had to jump into an unknown codebase and finish the unfinished features, and delegate tasks to others."]]
                             :buttons [{:title "Check it out!"
                                        :href  "https://athene.fi/ilmo"}
                                       {:title "View source in Github"
                                        :href  "https://github.com/athene/ilmomasiina"}]}

            :kaspernurminenfi {:title "kaspernurminen.fi"
                               :text [:p "Hienot on!"]}
            })