(defproject clojure-cv "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [reagent "0.7.0"]
                 [cljs-react-material-ui "0.2.48" :exclusions [cljsjs/material-ui]]
                 [cljsjs/material-ui "0.19.4-0"]
                 [cljsjs/react-tooltip "3.3.0-0"]
                 [cljsjs/react "15.6.2-4"]
                 [cljsjs/react-dom "15.6.2-4"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.2.4"]
                 [re-frame "0.10.5"]]

  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.16"]
            [lein-sass "0.5.0"]]

  :sass {:src              "src/scss"
         :output-directory "resources/public/css"}

  :min-lein-version "2.5.3"

  :source-paths ["src/clj" "src/cljs"]

  :clean-targets ^{:protect false} [:target-path
                                    [:cljsbuild :builds :dev :compiler :output-dir]
                                    [:cljsbuild :builds :dev :compiler :output-to]]

  :resource-paths ["resources"]

  :figwheel {:ring-handler     clojure-cv.app-server/handler
             :css-dirs         ["resources/public/css"]
             :server-port 3449
             :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
             :nrepl-port       7888}

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.9.10"]
                   [org.clojure/tools.nrepl "0.2.13"]
                   [com.cemerick/piggieback "0.2.2"]
                   [figwheel-sidecar "0.5.16"]
                   [day8.re-frame/re-frame-10x "0.3.3"]
                   [day8.re-frame/tracing "0.5.1"]]
    :repl-options {:nrepl-middleware [com.cemerick.piggieback/wrap-cljs-repl]}
    }
   }
  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "min"]]}
  :cljsbuild
  {:builds
   {:dev {:source-paths ["src/cljs"]
          :figwheel     {:on-jsload      "clojure-cv.core/mount-root"
                         :open-urls      ["http://localhost:3449/"]

                         }
          :compiler     {:main            clojure-cv.core
                         :output-to       "resources/public/js/compiled/app.js"
                         :output-dir      "resources/public/js/compiled/out"
                         :optimizations   :none
                         :pretty-print    true
                         :npm-deps {:vanilla-tilt "1.7.0"}
                         :install-deps true
                         :asset-path      "js/compiled/out"
                         :source-map      true
                         :preloads        [day8.re-frame-10x.preload]
                         :closure-defines {"re_frame.trace.trace_enabled_QMARK_"        true
                                           "day8.re_frame.tracing.trace_enabled_QMARK_" true}
                         }}

    :min {
          :source-paths ["src/cljs"]
          :compiler     {:main            clojure-cv.core
                         :output-to       "resources/public/js/compiled/app.js"
                         :output-dir      "resources/public/js/compiled/release"
                         :asset-path      "js/compiled/out"
                         :optimizations   :advanced
                         :pseudo-names    true
                         :pretty-print    true
                         :closure-defines {"goog.DEBUG" false}}}}

   }
  )
