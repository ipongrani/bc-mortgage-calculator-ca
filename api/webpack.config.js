import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
  mode: "development",
  target: "node",
  devtool: 'source-map',
  entry: {
    api: '/server.js', 
    client: './browser-scripts/client.js' 
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    library: {
      type: "module", 
    },
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    extensions: [".js"]
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
