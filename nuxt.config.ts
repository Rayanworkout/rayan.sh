
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  security: {
    headers: {
      contentSecurityPolicy: false,
    }
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/highlight.js/styles/atom-one-dark.min.css' }]
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'assets/css/style.css',
    'animate.css',
  ],
  modules: ['@nuxtjs/google-fonts', 'nuxt-security'],
  googleFonts: {
    families: {
      Montserrat: [500, 700],
    },
  },
  sourcemap: false,

});
