export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    'assets/css/style.css'
  ],
  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Montserrat: [500, 700],
    },
  },

  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark',
      preload: [
        'python',
        'bash',
        'shell',
        'json',
        'vue',
        'javascript',
        'typescript',
        'markdown',
        'css',
      ]
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
  }
});
