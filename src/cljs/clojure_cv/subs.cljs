(ns clojure-cv.subs
  (:require
   [re-frame.core :as re]))

(re/reg-sub :modal-open #(get %1 :modal-open))
(re/reg-sub :current-section #(get %1 :current-section))
(re/reg-sub :menu-open #(get %1 :menu-open))
(re/reg-sub :scroll-is-at-beginning #(get %1 :scroll-is-at-beginning))

(re/reg-sub :current-year #(.getFullYear (js/Date.)))

(re/reg-sub :image-enlarged #(get %1 :image-enlarged))