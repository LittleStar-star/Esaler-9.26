export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  env:{
    baseUrl: process.env.NODE_ENV === 'development' ? 'http://192.168.2.58:8066' : 'https://webapi.lkrelec.com'
  },
  head: {
    title: 'Esaler',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Esaler' },
      { hid: 'keywords', name: 'keywords', content: 'Esaler' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
    ],
    script:[
      {src:'http://pv.sohu.com/cityjson?ie=utf-8'} ,
    ]
  },
  server:{
    port:8080,
    host:'0.0.0.0',
    timing:false
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "swiper/css/swiper.css",
    '~/static/css/bootstrap.min.css',
    '~/static/css/style.css',
    '~/static/css/css2.css',
    '~/static/css/remixicon.css',
    'element-ui/lib/theme-chalk/index.css',
  ], 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:"~/plugins/vue-swiper-plugins.js",ssr:false},
    {src:'~/plugins/bootstrap.bundle.min.js',ssr:false} ,
    {src:'~/plugins/dream-msg.min.js',ssr:false} ,
    {src:'~/plugins/range-slider.min.js',ssr:false} ,
    {src:'~/plugins/util.js',ssr:true} ,
    
    '~plugins/element-ui/element-ui.js',
    { src: '~/plugins/store.js', ssr: false },


	    // { src: '~/plugins/main.js', ssr: true },
      { src: '~/plugins/vue-lazyload', ssr: true },
      { src: '~/plugins/debounce', ssr: true },
      // { src: '~/plugins/demo', ssr: true },
      {src:'~/plugins/axios.js',ssr:true} ,

    // '@plugins/axios',
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    
  ],
  axios:{
    Proxy:true,
    credential: true,
  },
  // Proxy:{
  //   // '/api':{
  //   //   target:'http://192.168.2.58:8066/',
  //   //   pathRewrite: { '^/api' : '/' }
  //   // },
  //   '/api':{
  //     target:'http://192.168.2.58:8066/',
  //     pathRewrite: { '^/api' : '/' }
  //   }
  // },


  proxy: {
    '/api/':{
      target: 'http://192.168.2.58:8066', // 线下服务器ip
      // target: 'https://webapi.lkrelec.com', // 线上服务器ip LKR
      // target: 'https://webapi.elecsaler.com', // 线上服务器ip Esaler
      changeOrigin: true ,// 是否跨域
      pathRewrite: {
        '^/api/': '/',  // 把 /api 替换成 /
      }
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
     vendor: ['element-ui','vue-lazyload'],
     // 为 JS 和 Vue 文件设定自定义的 babel 配置。
     babel: {
      plugins: [
        [
          'component', { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' }
        ]
      ],
      compact: false
    },
    // 开启打包分析
analyze: true, 	
assetFilter: function(assetFilename) {	    		
	return assetFilename.endsWith('.js');	    	
}


  },
  // router: {
  //   middleware: 'auth'
  // }
  // router: {
  //   mode: 'hash', // 使用 'hash' 主要是为了适配以相对路径打开的静态站点， 必须使用 'hash' 否则路由跳转不生效
  //   // base: '/moli/',
  //   base: process.env.NODE_ENV === 'production' ? './' : '/', // 使用 './' 主要是为了适配以相对路径打开的静态站点
  //   // extendRoutes (routes, resolve) {
  //   //   routes.push({
  //   //     path: '/',
  //   //     redirect: {
  //   //       name: 'home'
  //   //     }
  //   //   })
  //   // }
  // }

  
}
