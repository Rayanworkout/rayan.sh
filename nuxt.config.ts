import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

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
    'assets/css/style.css'
  ],
  modules: ['@nuxtjs/google-fonts', 'nuxt-security', '@nuxtjs/supabase', (_options, nuxt) => {
    nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error
      config.plugins.push(vuetify({ autoImport: true }))
    })
  },],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/dashboard',
      exclude: ["/", "/about", "/blog/*", "/api/*", "/dashboard", "/logout", "/new", "/login"]
    }
  },
  googleFonts: {
    families: {
      Montserrat: [500, 700],
    },
  },
  sourcemap: false,

  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

});
