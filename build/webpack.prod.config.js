const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base.config");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const components = require("../components.json");

module.exports = merge(webpackBaseConfig, {
  mode: "production",
  devtool: "source-map",
  context: path.join(__dirname, ".."),
  entry: components,
  output: {
    path: path.resolve(__dirname, "../lib"),
    publicPath: "/dist/",
    filename: "[name].js",
    chunkFilename: "[id].js",
    libraryTarget: "commonjs2",
  },
  externals: {
    vue: {
      root: "Vue",
      commonjs: "vue",
      commonjs2: "vue",
      amd: "vue",
    },
    ["element-ui"]: {
      commonjs: "element-ui",
      commonjs2: "element-ui",
    },
  },
  // optimization: {
  //   minimize: false,
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:7].css",
      chunkFilename: "css/[name].[hash:7].css",
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!theme/**"],
    }),
  ],
});
