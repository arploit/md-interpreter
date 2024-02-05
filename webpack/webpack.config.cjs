const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  module: {
    rules: [
        {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
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
};
