#!/bin/bash

cd ./core && npm install
npx webpack
cd ../api && npm install
npx webpack

cd .. && npm install
npm run test
