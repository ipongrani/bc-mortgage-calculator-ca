#!/bin/bash

cd ./core && npx webpack
cd ../api && npx webpack
cd ../utilities && npx webpack

