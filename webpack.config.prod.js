const path = require("path");
const outputDir = path.resolve(__dirname, "dist");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/index.js",
  devtool: "source-map",
  output: {
    path: outputDir,
    filename: "js/[name].[contenthash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: { plugins: [require("autoprefixer")] }
          }
        ]
        // use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: { plugins: [require("autoprefixer")] }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name][contenthash:8].[ext]",
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
      filename: "[name].[contenthash:8].css"
    }),
    new CopyPlugin([
      { from: "src/assets/img", to: "assets/img" },
      { from: "src/assets/pwa", to: "assets/pwa" },
      { from: "src/assets/favicon", to: "" },
      { from: "src/pwa", to: "" }
    ])
  ]
};
