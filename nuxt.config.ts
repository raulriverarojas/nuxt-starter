// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/device'],
  runtimeConfig: {
  public: {
    backend: process.env.BACKEND // Publicly accessible
    }
  },
})