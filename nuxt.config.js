// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
  css: [
    'vuetify/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/app.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBaseUrl: `${process.env.API_URL}/` || 'http://localhost:8000/',
      APP_URL: process.env.APP_URL,
      APP_NAME: process.env.APP_NAME,
    },
  },
  modules: ['@pinia/nuxt'],
});
