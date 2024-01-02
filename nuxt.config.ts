export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'assets/css/style.css'
  ],
  modules: ['@nuxtjs/google-fonts', 'nuxt-security'],
  googleFonts: {
    families: {
      Montserrat: [500, 700],
    },
  },

  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },
  sourcemap: false,
  // Backend API
  nitro: {
    plugins: [
      "~/server/index.ts",
    ]
  },

});
