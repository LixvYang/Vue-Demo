const path = require('path')

module.exports = {
  // 1. 配置方式1： cli提供是属性
  outputDir: './build',
  // 2. 方式2和webpack属性完全一致，最后会进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, 'src'),
  //     components: "@/components"
  //   }
  // }
  // 3. 配置方式3：
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
