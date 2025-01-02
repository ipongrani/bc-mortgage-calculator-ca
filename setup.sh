#!/bin/bash

cd ./core && npm install
npx webpack
cd ../api && npm install
npx webpack
cd ../utilities && npm install
npx webpack


