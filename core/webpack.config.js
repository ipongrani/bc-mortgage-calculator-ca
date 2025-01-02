import path from "path";
import TerserPlugin from "terser-webpack-plugin";

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
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: /@preserve|@license|@description/,
          },
        },
        extractComments: false
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            comments: true
          },
        },
      },
    ],
  }
};
