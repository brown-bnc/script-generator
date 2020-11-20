export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: '',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'sbatch-generator-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@brown-ccv/disco-styles'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      'nuxt-highlightjs',
      {
        style: 'monokai-sublime',
      },
    ],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
     ** You can extend webpack config here
     */
    hotMiddleware: {
      client: {
        // turn off client overlay when errors are present
        overlay: false,
      },
    },
    extend(config, { isDev, isClient }) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    },
  },
}
