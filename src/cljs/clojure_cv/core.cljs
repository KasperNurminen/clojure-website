(ns clojure-cv.core
  (:require
    [reagent.core :as r]
    [re-frame.core :as re-frame]
    [cljsjs.react-tooltip]
    [vanilla-tilt]
    [clojure-cv.events :as events]
    [clojure-cv.config :as config]
    [clojure-cv.views.core :refer [main-panel main-page ]]
    [clojure-cv.views.portfolio :refer [ilmomasiina kaspernurminen]]
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
