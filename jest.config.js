export default {
    "roots": [
      "./test"
    ],
    "testMatch": [
      "**/*.test.js"
    ],
    "moduleFileExtensions": [
      "js",
      "json"
    ],
    "testEnvironment": "node",
    "transform": {
      "^.+\\.js$":  ["babel-jest", { presets: ["@babel/preset-env"] }]
    }
}