const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
const CopyWebpackPlugin =  require("copy-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader/dist/index")
 

module.exports = {
  // 设置模式
  // development 开发阶段，设置
  // 打包上线 production 
  mode: "development",
  // 设置source-map 建立json的映射关系
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    // path: "C:\Codefield\Projects\VueLearn\02_LearnWebpack\01_base_webpack",
    path: path.resolve(__dirname, "./build"),
    filename: "js/bundle.js"
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
            maxSize: 10 * 1024
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
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       // plugins: [
      //       //   "@babel/plugin-transform-arrow-functions",
      //       //   "@babel/plugin-transform-block-scoping",
      //       // ]
      //       presets: [
      //         "@babel/preset-env"
      //       ]
      //     }
      //   }
      // }
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    // 放入一个个插件对象
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "哈哈哈"
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
       {
         from: "public",
         to: "./",
         globOptions: {
           ignore: [
             "**/index.html"
           ]
         }
       },
      ]
    }),
    new VueLoaderPlugin()
  ]
}