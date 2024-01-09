
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
      link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/highlight.js/styles/atom-one-dark.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
      ]
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'assets/css/style.css',
    'animate.css',
  ],
  modules: ['@nuxtjs/google-fonts', 'nuxt-security', '@sidebase/nuxt-auth'],

  auth: {
    baseURL: process.env.NEXTAUTH_URL,
    provider: {
      type: 'authjs'
    }
  },
  googleFonts: {
    families: {
      Montserrat: [500, 700],
    },
  },
  sourcemap: false,

});
