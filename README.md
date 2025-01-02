# Canada BC Mortgage Calculator

This project showcases BC Mortgage Calculator implemented in Node.js and Express.js

### Specifications:
- CMHC insurance must be considered. Guidelines for the calculation, and restrictions, can be
found here: https://www.ratehub.ca/cmhc-insurance-british-columbia.
- The API accepts the following json payload via *http POST Method*:
```
{
    property_price: <Number> (property price),
    down_payment: <Number> (down payment amount),
    annual_interest_rate: <Number> (annual interest rate),
    ammortization_period: <Integer> (5 year increments between 5 and 30 years),
    payment_schedule: <String> (accelerated bi-weekly, bi-weekly, monthly)
}
```
### Response:
- Payment per payment schedule
- An error if the inputs are not valid. This includes cases where the down payment is not large enough.

### Requirements:
- Node.js (V20.12.0 LTS)
- Express.js

*Dev Requirments*
- babel
- jest
- webpack
- webpack-cli
- babel-jest
- babel-loader
- jest-webpack
- supertest


## Setup

Please make sure the *setup.sh* has enough privilege. Otherwise can be performed with the following command in Linux Terminal
```
sudo chmod +x ./setup.sh
```
and then run
```
npm run setup
```
The script will install the necessary dependencies for the application to run.

## Build
```
npm run build
```

## Running API

to run the development version
```
npm run serve:api
```
to run the build version
```
npm run serve:api-dist
```