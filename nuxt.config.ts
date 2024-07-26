// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxt/ui", 'nuxt-icon', "@samk-dev/nuxt-vcalendar"],
  build: {
    transpile: [/vue3-grid-layout-next/]
  },
  plugins: ["~/plugins/vue-tel-input"],
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL ?? "http://localhost:8000"
    }
  }
  
})