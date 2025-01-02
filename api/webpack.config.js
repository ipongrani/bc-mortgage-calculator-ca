import path from "path";

export default {
  mode: "development",
  target: "node",
  entry: "./server.js",
  output: {
    path: path.resolve("dist"),
    filename: "api.bundle.cjs",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".js"], // Automatically resolve .js files
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
