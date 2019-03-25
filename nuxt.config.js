const pkg = require('./package')

module.exports = {
  mode: 'universal',

  // 路由基础路径，通过/app/访问，则base设为/app/
  router: {
    base: '/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1' },
      { name: 'viewport', content: 'viewport-fit=cover,width=device-width,height=device-height,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // 完整引入时需引入
    // 'element-ui/lib/theme-chalk/index.css'
  ],

  /**
   * 应用的主机和端口配置
   */
  server: {
    // 端口
    // port: 8000
    // host: '0.0.0.0'
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/axios',
    '@/plugins/element-ui',
    '@/plugins/vue-carousel-card'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // See '~/plugins/axios.js'
    proxy: true
  },
  proxy: {
    '/nuojin': {
      target: 'http://127.0.0.1:8083/',
      changeOrigin: true
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // 打包分析
    // analyze: true,
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
