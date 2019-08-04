#!/bin/bash
set -e
lein do clean, sass once, cljsbuild once min
cd ../clojure-cv-static
rm -r assets/ css/ js/ index.*
cp -r ../clojure-cv/resources/public/* .
git add .
git commit -m "Updated static files"
git push