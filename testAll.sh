#!/bin/bash


npx jest --config jest.config.js ./test/unit.test.js --verbose
npx jest --config jest.config.js ./test/integration.test.js --verbose
npx jest --config jest.config.js ./test/core.build.test.js --verbose
npx jest --config jest.config.js ./test/api.build.test.js --verbose