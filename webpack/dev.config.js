const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./common.config");

const config = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    hot: true,
  },
};

module.exports = merge(common, config);
