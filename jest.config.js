export default {
    "roots": [
      "./test"
    ],
    "testMatch": [
      "**/*.test.js",
      "*.js"
    ],
    "moduleFileExtensions": [
      "js",
      "json"
    ],
    "testEnvironment": "node",
    "transform": {
      "^.+\\.js$": "babel-jest"
    }
}