(ns clojure-cv.events
  (:require
   [re-frame.core :as re]
   [clojure-cv.db :as db]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
   ))

(re/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))
(re/reg-event-db :modal
  (fn [db [_ val]]
    (assoc db :modal-open val)))

(re/reg-event-db :set-current-section
  (fn [db [_ val]]
    (assoc db :current-section val)))

(re/reg-event-db :scroll-is-at-beginning
  (fn [db [_ val]]
    (assoc db :scroll-is-at-beginning val)))

(re/reg-event-db :toggle-menu
  (fn [db _]
    (let [menu-state (get db :menu-open)]
      (assoc db :menu-open (not menu-state)))))
(re/reg-event-fx :scroll-into-view
  (fn [_ [_ id]]
    {:scroll-into-view id}))

(re/reg-fx :scroll-into-view
  (fn [id]
    (-> (.querySelector js/document (str "#" id))
        (.scrollIntoView (clj->js {:behavior "smooth" :block "start"})))))

(re/reg-sub :modal-open #(get %1 :modal-open))
(re/reg-sub :current-section #(get %1 :current-section))
(re/reg-sub :menu-open #(get %1 :menu-open))
(re/reg-sub :scroll-is-at-beginning #(get %1 :scroll-is-at-beginning))

(re/reg-sub :current-year #(.getFullYear (js/Date.)))