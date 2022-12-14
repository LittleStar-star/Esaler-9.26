export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  env:{
    baseUrl: process.env.NODE_ENV === 'production' ? 'http://192.168.2.58:8066' : 'http://192.168.2.58:8066'
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
    '@/plugins/Message.js' ,


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
      target: 'http://192.168.2.58:8066', // ???????????????ip
      // target: 'https://webapi.lkrelec.com', // ???????????????ip LKR
      // target: 'https://webapi.elecsaler.com', // ???????????????ip Esaler
      changeOrigin: true ,// ????????????
      pathRewrite: {
        '^/api/': '/',  // ??? /api ????????? /
      }
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
     vendor: ['element-ui','vue-lazyload'],
     // ??? JS ??? Vue ???????????????????????? babel ?????????
     babel: {
      plugins: [
        [
          'component', { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' }
        ]
      ],
      compact: false
    },
    // ??????????????????
analyze: true, 	
assetFilter: function(assetFilename) {	    		
	return assetFilename.endsWith('.js');	    	
}


  },
  // router: {
  //   middleware: 'auth'
  // }
  // router: {
  //   mode: 'hash', // ?????? 'hash' ???????????????????????????????????????????????????????????? ???????????? 'hash' ???????????????????????????
  //   // base: '/moli/',
  //   base: process.env.NODE_ENV === 'production' ? './' : '/', // ?????? './' ?????????????????????????????????????????????????????????
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
