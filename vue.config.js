const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.module
      .rule('js')
      .use('babel-loader')
      .tap((options = {}) => ({
        ...options,
        cacheDirectory: false,
      }))

    if (config.plugins.has('eslint')) {
      config.plugin('eslint').tap((args) => {
        args[0].cache = false
        return args
      })
    }
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
