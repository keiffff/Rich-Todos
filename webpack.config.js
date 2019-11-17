const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    watchContentBase: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "this"
  }
};
