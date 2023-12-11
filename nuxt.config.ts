// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: { 
    host: "192.168.100.69",
    port: 3000
  },
  // buildModules: ["@nuxtjs/svg"],
  css: [
    "~/assets/css/main.css",
    "~/assets/css/font.css",
    "~/assets/css/animation.css",
    "bootstrap/dist/css/bootstrap.min.css",
  ],
});
