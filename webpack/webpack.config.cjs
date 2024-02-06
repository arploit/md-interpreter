const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { template } = require("@babel/core");

module.exports = {
  entry: "./src/index.tsx",
  mode:"development",
  devtool: "inline-source-map",
  module: {
    rules: [

        {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
           }, { 
            test: /\.(ts|tsx)$/, 
            loader: "ts-loader" 
          }


    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },

  devServer: {
    port: 7070,
    liveReload: true,
  },

  plugins:[new HtmlWebpackPlugin({
    template:path.resolve(__dirname, "../public/index.html")
  })]
};
