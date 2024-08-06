// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxt/ui", 'nuxt-icon', "@samk-dev/nuxt-vcalendar",'@pinia/nuxt'],
  build: {
    transpile: [/vue3-grid-layout-next/]
  },
  plugins: ["~/plugins/vue-tel-input",'~/plugins/helper.js','~/plugins/notifications.js'],

  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
      domain: 'www.nooribynikita.com',
      url: 'www.nooribynikita.com'
    }
  },
})