(ns clojure-cv.subs
  (:require
   [re-frame.core :as re]))

(re/reg-sub :modal-open #(get %1 :modal-open))
(re/reg-sub :current-section #(get %1 :current-section))
(re/reg-sub :menu-open #(get %1 :menu-open))
(re/reg-sub :scroll-is-at-beginning #(get %1 :scroll-is-at-beginning))

(re/reg-sub :current-year #(.getFullYear (js/Date.)))

(re/reg-sub :image-enlarged #(get %1 :image-enlarged))


(defn month-diff [d1 d2]
  (let [months (-> (- (.getFullYear d2) (.getFullYear d1))
                 (* 12)
                 (- (+ 1 (.getMonth d1)))
                 (+ (.getMonth d2))
                 (+ 2)                                      ;add start and end months
                 )]
    (max 0 months)))

(re/reg-sub :vincit-months-working
  (fn [_]
    (let [start-date (js/Date. 2020 1 1)
          summers-worked 0
          extra-months 0
          month-diff (month-diff start-date (js/Date.))
          full-time (-> extra-months
                      (+ (* summers-worked 3)))]
      {:full-time full-time
       :part-time (- month-diff full-time )})))