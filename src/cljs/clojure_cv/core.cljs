(ns clojure-cv.core
  (:require
    [cljsjs.material-ui]
    [reagent.core :as r]
    [re-frame.core :as re-frame]
    [cljsjs.react-tooltip]
    [clojure-cv.events :as events]
    [clojure-cv.config :as config]
    [clojure-cv.views.core :refer [main-panel main-page ]]
    [clojure-cv.views.portfolio :refer [ilmomasiina kaspernurminen oloscreen infodisplay ydinbook gameservice asumistukilaskuri]]
    [secretary.core :as secretary :include-macros true]
    [accountant.core :as accountant]
    [goog.events :as goog-events]
    [goog.history.EventType :as HistoryEventType])
  (:import goog.History))

(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(def selected-page (r/atom main-page))

(defn page []
  [@selected-page])

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (r/render [main-panel page]
    (.getElementById js/document "app")))

(secretary/defroute "/" []
  (reset! selected-page main-page))

(secretary/defroute "/portfolio/ilmomasiina" []
  (reset! selected-page ilmomasiina))

(secretary/defroute "/portfolio/kaspernurminen" []
  (reset! selected-page kaspernurminen))

(secretary/defroute "/portfolio/oloscreen" []
  (reset! selected-page oloscreen))

(secretary/defroute "/portfolio/infodisplay" []
  (reset! selected-page infodisplay))

(secretary/defroute "/portfolio/asumistukilaskuri" []
                    (reset! selected-page asumistukilaskuri))

(secretary/defroute "/portfolio/gameservice" []
                    (reset! selected-page gameservice))

(secretary/defroute "/portfolio/ydinbook" []
                    (reset! selected-page ydinbook))

(defn hook-browser-navigation! []
  (doto (History.)
    (goog-events/listen
      HistoryEventType/NAVIGATE
      (fn [event]
        (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn ^:export init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (secretary/dispatch! path))
     :path-exists?
     (fn [path]
       (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (dev-setup)
  (mount-root))
