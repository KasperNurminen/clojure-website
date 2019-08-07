(ns clojure-cv.texts
  (:require [cljs-react-material-ui.icons :as ic]))

(def texts {:main
                              {:who-am-i  [:div
                                           [:h1 "Who am I?"]
                                           [:p "I am an energetic and curious university student and software developer from Finland on my way to become an expert in software engineering. Despite my 22 years of age, I already have a couple of years of experience in software development. I am currently completing my Bachelor's Degree and preparing for Master's Degree in Information Networks in Aalto-University."]
                                           [:p "Jumping in at the deep end has always been my biggest strength - regardless of the task at hand, I jump straight at it and do whatever it takes to complete it. I am interested in how humans and computers interact (with a technical focus)."]
                                           [:p "On my free time I often climb (mostly bouldering), go to the gym and play video games. I also enjoy volunteering at our student guild Athene, where I am currently the CTO (responsible for IT systems)."]]
                               :education [{:title    "Master of Science in Technology (2020 - 2022)"
                                            :subtitle "Information Networks, Aalto University"}
                                           {:title    "Bachelor of Science in Technology (2017 - 2020)"
                                            :subtitle "Information Networks, Aalto University"}
                                           {:title    "Undergraduate (2013 - 2016)"
                                            :subtitle "Kerttuli School of ICT"}]
                               :interests [{:title    "Software Development"
                                            :subtitle "Python, Javascript, ClojureScript, Scala"
                                            :icon     ic/hardware-computer
                                            }
                                           {:title    "Software Development processes"
                                            :subtitle "Agile, Waterfall, Scrum"
                                            :icon     ic/action-group-work
                                            }
                                           {:title "Client interaction"
                                            ;:subtitle "Requirements engineering"
                                            :icon  ic/social-people
                                            }]
                               }
            :skills           [[:span
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
                                [:p "My native language is Finnish and I am fluent in English. I can also communicate in Swedish, and know the basics of German."]]
                               ]
            :education        [{:text     [:span
                                           [:p "Information Networks is a trans-disciplinary study programme in engineering building on information and communication technology (ICT) and digital media. It combines the fields of social sciences, advanced digital technologies and business."]
                                           [:p "The programme builds on a vision where finding, defining and solving effectively relevant ICT and digital media related challenges is not possible without a holistic understanding about the interplay between technology, business and humans."]
                                           [:p "I currently have completed 135 / 180 credits of the Bachelor's degree and have GPA of 4.41."]]
                                :title    "Master & Bachelor of Science in Technology"
                                :years    "2017 - 2022"
                                :subtitle "Information Networks, Aalto University"}
                               {:text     [:span [:p "I completed 13 ECTS of basic computer science courses alongside my studies in Kerttuli, before I started at Aalto University."]]
                                :title    "Separate study module (13 ECTS)"
                                :years    "2015 - 2016"
                                :subtitle "University of Turku"}
                               {:text     [:span [:p "The only ICT-focused high school in Finland. I learned, among other things, the basics of Information and Communication Technologies, the basics of programming, and usage of InDesign."]]
                                :title    "Undergraduate"
                                :years    "2013 - 2016"
                                :subtitle "Kerttuli School of ICT"}]
            :job-experience   [{:title    "Taiste Oy"
                                :years    (fn [full-time part-time] [:span "1/2017 - present" [:br] full-time " mo. full-time, " part-time " mo. part-time"])
                                :subtitle "Software Developer"
                                :text     [:span [:p "Taiste builds mobile-driven digital solutions by combining customer insight, great UX and world-class technology expertise."]
                                           [:p "Clients I worked with include The Finnish Taxi Owners' Federation and Hesburger."]
                                           [:p "My everyday job with Taiste consists of full-stack development with varying clients and diverse tasks, ranging from web- and backend technologies to build automation, deployment and testing."]]}
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
            :achievements     [{:title "2019"
                                :text  "Aalto University School of Science Dean’s incentive-based scholarship for good progress in studies."}
                               {:title "2018"
                                :text  "Aalto University School of Science Dean’s incentive-based scholarship for good progress in studies."}
                               {:title "2017"
                                :text  "Finished the Finnish army as a military engineer."}
                               {:title "2016"
                                :text  [:span "A grant from K.F Helisevä fund for excellent success in matriculation examinations." [:br] "I also received books as prizes for excellent performace in English, Finnish and social studies matriculation exams."]}
                               {:title "2014"
                                :text  "A grant for excellent information technology knowledge in Kerttuli School of ICT."}
                               {:title "2013"
                                :text  "Top 10 placement in country-wide typing competition \"Typing Master\" (376 WPM)."}
                               ]
            :ilmomasiina      {:title        "Athene's event registration machine"
                               :technologies "React, Redux, Node, Feathers"
                               :text         [:div
                                              [:p "Information Network's students' guild Athene was in a dire need of a new event registration system, and our computer gang and I (Athene's CTO of 2019) made a new one using modern technologies."]
                                              [:p "The new event registration system uses React and Redux for it's frontend, and Node and Feathers for it's backend. The project was started before I started university, but we finally managed to release it in 2019. It can handle hundreds of simultaneous event registrations without hiccups."]
                                              [:p "The system also has a fully working administration panel, where new users and events can be created, managed and removed."]
                                              [:p "This project taught me leadership more than anything else. The people that had previously worked with the system were mostly in a full-time job and/or graduated, and I had to jump into an unknown codebase and finish the unfinished features, and delegate tasks to others."]]
                               :buttons      [{:title "Check it out!"
                                               :href  "https://athene.fi/ilmo"}
                                              {:type  :github
                                               :title "View source in "
                                               :href  "https://github.com/athene/ilmomasiina"}]}

            :kaspernurminenfi {:title        "kaspernurminen.fi"
                               :technologies "ClojureScript, Reagent, Re-frame, Sass, Bootstrap"
                               :text         [:div
                                              [:p "kaspernurminen.fi is hand crafted using ClojureScript, reagent, re-frame and material-ui. It uses secretary and accountant for navigation and the icons are from material icons. The UI layout uses Bootstrap CSS for its base. Rest of the CSS is compiled with Sass and it is hosted via Github Pages."]
                                              [:p "It is 100% crafted by me, aiming to avoid unnecessary external dependencies while not reinventing the wheel. I aimed to produce clean code with a focus on great UI and UX, and I really like the result."]
                                              [:p "This site could have probably been made using vanilla HTML and CSS + some Javascript to spicen things up, but I really enjoy working with ClojureScript and felt that using modern web frameworks would be justified for an optimal responsive result."]
                                              [:span.paragraph "Inspiration for the theme and UI has been taken from " [:a {:href "https://themes.gohugo.io/academic/"} "the academic theme for Jekyll."]]]
                               :buttons      [{:title "View source in "
                                               :type  :github
                                               :href  "https://github.com/KasperNurminen/clojure-website"}]}
            :oloscreen        {:title        "Oloscreen"
                               :technologies "React, Python, Flask"
                               :buttons      [{:title "View source in "
                                               :type  :github
                                               :href  "https://github.com/athenekilta/oloscreen-v2"}]
                               :text         [:div
                                              [:p "Oloscreen is the dashboard of the guild room of Athene, Olkkari. It displays relevant data to people in the guild room, such as the menus of restaurant nearby, upcoming events and the current time and date."]
                                              [:p "It also includes a shoutbox, where people can send messages via a Telegram bots. Five of the most recent messages are visible at any time."]
                                              [:p "Oloscreen is built using React for the front-end, and Python and Flask for the back-end. It was created during the spring and summer of 2019 by our Computer gang."]]
                               }
            :infodisplay      {:title        "Infodisplay"
                               :technologies "React, Leaflet, Material-UI"
                               :buttons      [{:title "View source in "
                                               :type  :github
                                               :href  "https://github.com/KasperNurminen/infodisplay"}]
                               :text         [:div
                                              [:p "Infodisplay was a summer project of 2 people in the summer of 2018. The idea was to make a dashboard that could show the current time, weather and the next bus connections to the centrum."]
                                              [:p "On the left side there is a Leaflet map which shows the nearest bus stops and their stop numbers. On the right there are 5 next bus connections towards the centrum and to other directions. Clicking on a bus connection  highlights the associated bus stop from the map."]
                                              [:p "The project never got 100% finished as we ran out of time, but the bus API integration is completed and it is in usable condition. The weather data is not implemented, but otherwise it is working."]]
                               }
            })