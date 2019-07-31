(ns clojure-cv.app-server
  (:require [clojure.string :as str]
            [ring.middleware.resource :refer [wrap-resource]]))

(defn- wrap-default-index [next-handler]
  (fn [request]
    (println request)
    (next-handler
      (if (or (str/starts-with? (:uri request) "/css/")  ;; default directory layout after doing
            (str/starts-with? (:uri request) "/js/")
            (str/starts-with? (:uri request) "/fonts/")
            (str/starts-with? (:uri request) "/img/"))  ;; `lein new figwheel my-app`
        request
        (assoc request :uri "/index.html")))))  ;; wrap-resource will find index.html for us

(def handler
  (-> (fn [test] {:status 404 :body (str "static asset not found " test)})
    (wrap-resource "public")
    wrap-default-index))
