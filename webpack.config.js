const webpack = require("webpack");
const isProd = process.env.NODE_ENV === "production";
var Visualizer = require("webpack-visualizer-plugin");

module.exports = {
  entry: ["./browser/index.js"],
  output: {
    path: __dirname,
    filename: "./docs/bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        exclude: "/node_modules/",
        include: __dirname + "/browser/",
        loader: "babel-loader",
        options: {
          presets: ["env", "react"]
        },
        test: /\.jsx?$/
      }
    ]
  },
  plugins: isProd
    ? [
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify("production")
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new Visualizer({
          filename: "./bundleSizeStats.html"
        })
      ]
    : []
};
