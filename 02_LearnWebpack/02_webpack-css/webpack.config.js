const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    // path: "C:\Codefield\Projects\VueLearn\02_LearnWebpack\01_base_webpack",
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/, //, 正则表达式
        // 1. loader的写法 语法糖
        // loader: "css-loader" // 只要匹配到 .css 就css-Loader
        // 2. 完整写法
        use: [
          // {loader: "css-loader"},
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
}