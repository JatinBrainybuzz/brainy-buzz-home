export default defineNuxtConfig({
  server: {
      host: '0.0.0.0',
      port: 3000
    },  
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
        appUrl: 'https://www.nooribynikita.com',
        domain: 'www.nooribynikita.com',
        url: 'www.nooribynikita.com'
      }
    },
  })