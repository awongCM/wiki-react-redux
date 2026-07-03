const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./public",
    port: 3000,
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3001"
    }
  }
});
