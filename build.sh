#!/bin/bash

cd ./utils && npx webpack
cd ../core && npx webpack
cd ../api && npx webpack


