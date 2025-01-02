import path from "path";

export default {
  mode: "development",
  target: "node",
  entry: "./index.js",
  output: {
    path: path.resolve("dist"),
    filename: "core.bundle.js",
    library: {
      type: "module", 
    },
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          },
        },
      },
    ],
  }
};
