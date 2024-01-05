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
  meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'assets/css/style.css'
  ],
  modules: ['@nuxtjs/google-fonts', 'nuxt-security', '@nuxtjs/supabase'],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/dashboard',
      exclude: ["/", "/about", "/blog/*", "/api/*"],
    }
  },
  googleFonts: {
    families: {
      Montserrat: [500, 700],
    },
  },
  sourcemap: false,

});
