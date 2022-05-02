const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    // path: "C:\Codefield\Projects\VueLearn\02_LearnWebpack\01_base_webpack",
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  }
}