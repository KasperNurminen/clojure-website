(ns clojure-cv.views.portfolio
  (:require [cljs-react-material-ui.reagent :as ui]
            [re-frame.core :as re]
            [vanilla-tilt]
            [accountant.core :as accountant]
            [reagent.core :as r]
            [clojure-cv.texts :as texts]))

(defn ilmomasiina []
  (r/with-let [_ (re/dispatch [:set-current-section "portfolio"])]
    [:section#ilmomasiina
     [:div {:style {:padding "2rem" :margin-top "4rem"}}
      [:div {:style {:display "flex"}}
       [:div {:style {:width "50%"}}
        [:h1 {:style {:text-align "center"}} (get-in texts/texts [:ilmomasiina :title])]
        (get-in texts/texts [:ilmomasiina :text])]
       [:div {:style {:width "50%"}}
        [:div.portfolio-image.detail-page {:style {:background-image "url(../../assets/ilmomasiina.png)"}}]]
       ]
      [ui/flat-button {:on-click #(re/dispatch [:navigate-to-portfolio])} "Back"]]]))

(defn kaspernurminen []
  (r/with-let [_ (re/dispatch [:set-current-section "portfolio"])]
    [:section#kaspernurminen
     [:div {:style {:padding "2rem" :margin-top "4rem"}}
      [:div {:style {:display "flex"}}
       [:div {:style {:width "50%"}}
        [:h1 {:style {:text-align "center"}} (get-in texts/texts [:kaspernurminenfi :title])]
        (get-in texts/texts [:kaspernurminenfi :text])]
       [:div {:style {:width "50%"}}
        [:div.portfolio-image.detail-page {:style {:background-image "url(../../assets/kaspernurminenfi.png)"}}]]
       ]
      [ui/flat-button {:on-click #(re/dispatch [:navigate-to-portfolio])} "Back"]]]))
