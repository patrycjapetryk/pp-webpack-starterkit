const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");
const outputDir = path.resolve(__dirname, "dist");

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  devtool: "inline-source-map",
  output: {
    path: outputDir,
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/img",
          publicPath: "assets/img"
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { useBuiltIns: "usage", corejs: "2.0.0." }]
          ],
          plugins: []
        }
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    open: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/content/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CopyPlugin([
      { from: "src/assets/img", to: "assets/img" },
      { from: "src/assets/pwa", to: "assets/pwa" },
      { from: "src/assets/favicon", to: "" },
      { from: "src/pwa", to: "" }
    ])
  ]
};
