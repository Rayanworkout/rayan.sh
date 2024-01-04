export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  security: {
    headers: {
      contentSecurityPolicy: false,
    }
  },

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
