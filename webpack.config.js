import path from "path";

export default {
  mode: "development",
  target: "node",
  entry: "./api/server.js",
  output: {
    path: path.resolve("api", "dist"),
    filename: "server.bundle.cjs",
    libraryTarget: "commonjs2",
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
