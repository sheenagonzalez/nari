export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NASA Aeronautics Research Institute',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/fonts/open_sans/open_sans.css',
    '~/assets/fonts/rubik/rubik.css'
  ],
  styleResources: {
    scss: [
        '~/assets/styles/_variables.scss',
        '~/assets/styles/_mixins.scss'
      ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
  ],

  // Font awesome icons
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },
  script:[
    {src: "https://kit.fontawesome.com/b569de1445.js", crossorigin: "anonymous"},
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
