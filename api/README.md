# API
The API is the frontfacing component of this application. To use the API component, the dependecies needs to be installed first and then run the command from the `Root Directory` of the project *`bc-mortgage-calculator-ca`* :
```
npm run serve:api
```
alternately you can run it within the component folder
```
npm run serve or node ./server.js 
```

The application reserves the *`public`* folder as it serves the public files within.

The `index` naming convention is reserved for the `index.html` which is served when the route `/` is requested via `GET` method.

Succeeding pages can be created and accessible via `/<new-filename>` which corresponds to the newly created *HTML* page, `<new-filename>.html`.

The `/calculateMortgage` is accessble with *POST* method and can be tested via *`POSTMAN`* or using the - [user interface](../README.md#user-interface) of this application.