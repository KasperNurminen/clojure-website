(ns clojure-cv.texts
  (:require [cljs-react-material-ui.icons :as ic]))

(def texts {:main
                               {:who-am-i            [:div
                                                      [:h1 "Who am I?"]
                                                      [:p "I am a full-stack software engineer experienced in a variety of SWE tasks. I am experienced in programming with various paradigms, (cloud) architecture, testing, CI/CD, containerization and microservices, agile methodologies (e.g scrum and kanban), and even some service and UX design."]
                                                      [:p "I'm especially interested in making software for people, that is, using my skillset to deliver a finalized, polished experience for the users. I think that requires various skills from user-centric design to optimized software architecture."]
                                                      [:p "On my free time I often climb (bouldering and rope climbing) and go to the gym. I also enjoy volunteering at our student guild Athene, where I used to be the CTO (responsible for IT systems)."]]
                                :education           [{:title    "Master of Science in Technology (2020 - 2022)"
                                                       :subtitle "Information Networks, Aalto University"}
                                                      {:title    "Bachelor of Science in Technology (2017 - 2020)"
                                                       :subtitle "Information Networks, Aalto University"}
                                                      {:title    "Undergraduate (2013 - 2016)"
                                                       :subtitle "Kerttuli School of ICT"}]
                                :job-experience-list [{:title    "Vincit Oyj"
                                                       :icon     "assets/vincit-avatar.jpg"
                                                       :subtitle "Software Engineer"}
                                                      {:title    "Taiste Oy"
                                                       :subtitle "Software Developer"
                                                       :icon     "assets/taiste-avatar.png"
                                                       }
                                                      {:title    "Aalto University"
                                                       :subtitle "Course Assistant"
                                                       :icon     "assets/aalto-avatar.jpg"
                                                       }]
                                }
            :skills            [[:span
                                 [:h4 "Software Development"]
                                 [:p "My software development skillset includes a profiency with various programming languages and paradigms. I am confident with Python, Javascript, Java and ClojureScript. For a more detailed list, check the buzzword list on the right."]
                                 [:p "I am also familiar with writing tests, build automation, cloud architechture, writing clean code, and using Git. I know how to collaborate with peers and to maintain a big and complicated codebase."]
                                 [:p "I have knowledge of the most common workflows and processes about project management. I like to use agile methods in my development process, such as Scrum, Kanban and TDD."]]
                                [:span
                                 [:h4 "Other"]
                                 [:p "I am able to edit photos and videos in Photoshop and Premiere, Illustrator and Sketch. I strive to be a better designer, that is an area I am actively trying to improve."]
                                 [:p "I also like to take a leadership-role in teams, when necessary. I like to get things done and often have a clear vision on how I would complete the task. I do, however, realize that my way to do it is not always the best, and listening to others is very important. If there is a better or more experienced leader in the group, I won't hesitate giving the command to them."]]
                                [:span
                                 [:h4 "Languages"]
                                 [:p "My native language is Finnish and I am fluent in English. I can also communicate in Swedish, and know the basics of German."]]
                                ]
            :education         [{:text     [:span
                                            [:p "Information Networks is a trans-disciplinary study programme in engineering building on information and communication technology (ICT) and digital media. It combines the fields of social sciences, advanced digital technologies and business."]
                                            [:p "The programme builds on a vision where finding, defining and solving effectively relevant ICT and digital media related challenges is not possible without a holistic understanding about the interplay between technology, business and humans."]
                                            [:p "My major is called Software Engineering & Architectures and I have computer science as a minor."]]
                                 :title    "Master of Science in Technology"
                                 :years    "2017 - 2022"
                                 :subtitle "Information Networks, Aalto University"}
                                {:text     [:span
                                            [:p "I finished my Bachelor's degree with a GPA of 4.3 (out of five). I minored in computer science."]]
                                 :title    "Bachelor of Science in Technology"
                                 :years    "2017 - 2020"
                                 :subtitle "Information Networks, Aalto University"}
                                {:text     [:span [:p "I completed 13 ECTS of basic computer science courses alongside my studies in Kerttuli, before I started at Aalto University."]]
                                 :title    "Separate study module (13 ECTS)"
                                 :years    "2015 - 2016"
                                 :subtitle "University of Turku"}
                                {:text     [:span [:p "The only ICT-focused high school in Finland. I learned, among other things, the basics of Information and Communication Technologies, the basics of programming, and usage of InDesign."]]
                                 :title    "Undergraduate"
                                 :years    "2013 - 2016"
                                 :subtitle "Kerttuli School of ICT"}]
            :job-experience    [{:title    "Vincit Oyj"
                                 :icon     "assets/vincit.jpg"
                                 :years    (fn [full-time part-time] [:span "1/2020 - present"]) ; [:br] full-time " mo. full-time, " part-time " mo. part-time"])
                                 :subtitle "Software Engineer"
                                 :text     [:p "Full stack software engineering with various clients and projects."]}
                                {:title    "Taiste Oy"
                                 :years    (fn [full-time part-time] [:span "1/2017 - 1/2020"])
                                 :subtitle "Software Developer"
                                 :text     [:span [:p "Taiste builds mobile-driven digital solutions by combining customer insight, great UX and world-class technology expertise."]
                                            [:p "Clients I worked with include The Finnish Taxi Owners' Federation and Hesburger."]
                                            [:p "My everyday job with Taiste consists of full-stack development with varying clients and diverse tasks, ranging from web- and backend technologies to build automation, deployment and testing."]]}
                                {:title    "Aalto University"
                                 :years    "1⁄2017 - 5⁄2017"
                                 :subtitle "Course Assistant"
                                 :text     [:span [:p "I was a course assistant for the course \"Verkkojulkaisemisen perusteet\" (Basics of web publishing). I taught freshmen the basics of HTML, CSS, Javascript, Photoshop and video editing."]]
                                 }]
            :achievements      [{:title "2020"
                                 :text  "Finished my Bachelor's and received Aalto University School of Science Dean’s incentive-based scholarship for good progress in studies."}
                                {:title "2019"
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
            :ilmomasiina       {:title        "Athene's event registration machine"
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

            :kaspernurminenfi  {:title        "kaspernurminen.fi"
                                :technologies "ClojureScript, Reagent, Re-frame, Sass, Bootstrap"
                                :text         [:div
                                               [:p "kaspernurminen.fi is hand crafted using ClojureScript, reagent, re-frame and material-ui. It uses secretary and accountant for navigation and the icons are from material icons. The UI layout uses Bootstrap CSS for its base. Rest of the CSS is compiled with Sass and it is hosted via Github Pages."]
                                               [:p "It is 100% crafted by me, aiming to avoid unnecessary external dependencies while not reinventing the wheel. I aimed to produce clean code with a focus on great UI and UX, and I really like the result."]
                                               [:p "This site could have probably been made using vanilla HTML and CSS + some Javascript to spicen things up, but I really enjoy working with ClojureScript and felt that using modern web frameworks would be justified for an optimal responsive result."]
                                               [:span.paragraph "Inspiration for the theme and UI has been taken from " [:a {:href "https://themes.gohugo.io/academic/"} "the academic theme for Jekyll."]]]
                                :buttons      [{:title "View source in "
                                                :type  :github
                                                :href  "https://github.com/KasperNurminen/clojure-website"}]}
            :oloscreen         {:title        "Oloscreen"
                                :technologies "React, Python, Flask"
                                :buttons      [{:title "View source in "
                                                :type  :github
                                                :href  "https://github.com/athenekilta/oloscreen-v2"}]
                                :text         [:div
                                               [:p "Oloscreen is the dashboard of the guild room of Athene, Olkkari. It displays relevant data to people in the guild room, such as the menus of restaurant nearby, upcoming events and the current time and date."]
                                               [:p "It also includes a shoutbox, where people can send messages via a Telegram bots. Five of the most recent messages are visible at any time."]
                                               [:p "Oloscreen is built using React for the front-end, and Python and Flask for the back-end. It was created during the spring and summer of 2019 by our Computer gang."]]
                                }
            :gameservice       {:title        "Game Service"
                                :technologies "Python, Django"
                                :buttons      [{:title "Check it out!"
                                                :href  "https://wsd-project-gameservice.herokuapp.com/"}
                                               {:title "View source in "
                                                :type  :github
                                                :href  "https://github.com/KasperNurminen/gameservice"}]
                                :text         [:div
                                               [:p "The game service is a final project for the course Web Software Development. It is a service that allows developers to publish games and players to play them. It has high scores, mock payment implementation and player profiles."]]
                                }
            :infodisplay       {:title        "Infodisplay"
                                :technologies "React, Leaflet, Material-UI"
                                :buttons      [{:title "View source in "
                                                :type  :github
                                                :href  "https://github.com/KasperNurminen/infodisplay"}]
                                :text         [:div
                                               [:p "Infodisplay was a summer project of 2 people in the summer of 2018. The idea was to make a dashboard that could show the current time, weather and the next bus connections to the centrum."]
                                               [:p "On the left side there is a Leaflet map which shows the nearest bus stops and their stop numbers. On the right there are 5 next bus connections towards the centrum and to other directions. Clicking on a bus connection  highlights the associated bus stop from the map."]
                                               [:p "The project never got 100% finished as we ran out of time, but the bus API integration is completed and it is in usable condition. The weather data is not implemented, but otherwise it is working."]]
                                }
            :asumistukilaskuri {:title        "Asumistukilaskuri"
                                :technologies "React, Material-UI"
                                :buttons      [{:title "Check it out!"
                                                :href  "https://kelalaskuri.herokuapp.com/"}
                                               {:title "View source in "
                                                :type  :github
                                                :href  "https://github.com/KasperNurminen/kelalaskuri"}]
                                :text         [:div
                                               [:p "I got annoyed at the poor UX of the housing benefit calculator of the social insurance institution of Finland (KELA). I created a better one with modern tools and auto-updating values."]
                                               [:p "The calculator considers the relevant properties of the household, and tries to make data input as easy and natural as possible. The result (amount received) is given in real time, instead of behind several clicks like the official calculator."]]
                                }
            :ydinbook {:title        "Ydinbook"
                                :technologies "HTML, Vanilla JS, Firebase"
                                :buttons      [{:title "Check it out!"
                                                :href  "https://users.aalto.fi/~nurmink6/project/"}
                                               {:title "View source in "
                                                :type  :github
                                                :href  "https://github.com/KasperNurminen/ydinvoima_some"}]
                                :text         [:div
                                               [:p "Ydinbook was a final project for the course Basics of Web Publishing. The assignment specially prohibited using any JS frameworks, so I (with an other student) created a clone of Facebook without the help of any frameworks."]
                                               [:p "This Facebook clone works surpisingly well considering the primitive tools it was constructed with."]]
                                }
            })