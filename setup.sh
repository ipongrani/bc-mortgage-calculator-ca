#!/bin/bash

cd ./utils && npm install
npx webpack
cd ../core && npm install
npx webpack
cd ../api && npm install
npx webpack
cd .. && npm install


