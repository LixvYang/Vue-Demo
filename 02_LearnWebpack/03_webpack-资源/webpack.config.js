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
      },
      // {
      //   test: /\.(jpg|png|gif|svg|jpeg)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       // outputPath: "img",
      //       name: "img/[name]_[hash:6].[ext]"
      //     }
      //   }
      // },
      // {
      //   test: /\.(jpg|png|gif|svg|jpeg)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       // outputPath: "img",
      //       name: "img/[name]_[hash:6].[ext]",
      //       limit: 100 * 1024 // byte
      //     }
      //   }
      // }
      {
        test: /\.(jpg|png|gif|svg|jpeg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       // outputPath: "font",
      //       name: "font/[name]_[hash:6].[ext]"
      //     }
      //   }
      // }
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6][ext]"
        }
      }
    ]
  }
}