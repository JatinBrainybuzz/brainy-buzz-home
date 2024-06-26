// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxt/ui", 'nuxt-icon', "@samk-dev/nuxt-vcalendar"],
  build: {
    transpile: [/vue3-grid-layout-next/]
  }
  
})