const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DynamicCdnWebpackPlugin = require("dynamic-cdn-webpack-plugin");
var Visualizer = require("webpack-visualizer-plugin");
const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: ["./browser/index.js"],
  output: {
    path: path.resolve(__dirname, "./docs"),
    filename: "bundle.js"
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
        // new HtmlWebpackPlugin(),
        // new DynamicCdnWebpackPlugin({
        //   // verbose: true
        // }),
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
