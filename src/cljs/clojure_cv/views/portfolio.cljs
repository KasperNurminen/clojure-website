(ns clojure-cv.views.portfolio
  (:require [cljs-react-material-ui.reagent :as ui]
            [re-frame.core :as re]
            [accountant.core :as accountant]
            [reagent.core :as r]
            [clojure-cv.texts :as texts]))

(defn render-buttons [buttons]
  [:div.d-flex.flex-wrap.justify-content-center
   (map (fn [button]
          ^{:key (:title button)}
          [:span
           (if (= :github (:type button))
             [ui/flat-button {:label          (:title button)
                              :label-position "before"
                              :target "_blank"
                              :href (:href button)
                              :icon           (r/as-element [:img {:height "32px"
                                                                     :width  "32px"
                                                                     :src    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"}])
                              }]
             [ui/flat-button {:label (:title button)
                              :target "_blank"
                              :href (:href button)}])]) buttons)]
  )

(defn ilmomasiina []
  (r/with-let [_ (re/dispatch [:set-current-section "portfolio"])]
    [:section#ilmomasiina
     [:div {:style {:padding "2rem" :margin-top "4rem"}}
      [:div {:style {:display "flex"}}
       [:div {:style {:width "50%"}}
        [:h1 {:style {:text-align "center"}} (get-in texts/texts [:ilmomasiina :title])]
        (get-in texts/texts [:ilmomasiina :text])
        [render-buttons (get-in texts/texts [:ilmomasiina :buttons])]]
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
        (get-in texts/texts [:kaspernurminenfi :text])
        [render-buttons (get-in texts/texts [:kaspernurminenfi :buttons])]]
       [:div {:style {:width "50%"}}
        [:div.portfolio-image.detail-page {:style {:background-image "url(../../assets/kaspernurminenfi.png)"}}]]
       ]
      [ui/flat-button {:on-click #(re/dispatch [:navigate-to-portfolio])} "Back"]]]))

(defn oloscreen []
  (r/with-let [_ (re/dispatch [:set-current-section "portfolio"])]
    [:section#oloscreen
     [:div {:style {:padding "2rem" :margin-top "4rem"}}
      [:div {:style {:display "flex"}}
       [:div {:style {:width "50%"}}
        [:h1 {:style {:text-align "center"}} (get-in texts/texts [:oloscreen :title])]
        (get-in texts/texts [:oloscreen :text])
        [render-buttons (get-in texts/texts [:oloscreen :buttons])]]
       [:div {:style {:width "50%"}}
        [:div.portfolio-image.detail-page {:style {:background-image "url(../../assets/oloscreen.png)"}}]]
       ]
      [ui/flat-button {:on-click #(re/dispatch [:navigate-to-portfolio])} "Back"]]]))

