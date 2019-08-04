(ns clojure-cv.events
  (:require
   [re-frame.core :as re]
   [clojure-cv.db :as db]
   [accountant.core :as accountant]
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
  (fn [_ [_ id instant?]]
    {:scroll-into-view [id instant?]}))

(re/reg-fx :navigate-to-home
  (fn []
    (accountant/navigate! "/")))

(re/reg-event-fx :navigate-to-portfolio
  (fn [_]
    {:navigate-to-home nil
     :dispatch-later   [{:dispatch [:scroll-into-view "portfolio" true] :ms 150}]}))

(re/reg-fx :navigate-to-page
  (fn [page]
    (accountant/navigate! page)))

(re/reg-event-fx :navigate-to-portfolio-page
  (fn [_ [_ page]]
    {:navigate-to-page (str "/portfolio/" (name page))
     :scroll-to-top    nil}))


(re/reg-fx :scroll-into-view
  (fn [[id instant?]]
    (-> (.querySelector js/document (str "#" id))
        (.scrollIntoView (clj->js (merge
                                    (when (not instant?)
                                      {:behavior "smooth"})
                                    {:block "start"}))))))

(re/reg-fx :scroll-to-top
  (fn []
    (.scrollTo js/window 0 0)))

(re/reg-event-db :toggle-image-enlargement
  (fn [db _]
    (assoc db :image-enlarged (not (:image-enlarged db)))))


