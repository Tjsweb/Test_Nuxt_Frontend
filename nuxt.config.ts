// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.min.css"],
  //script: ["/js/main.js"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          // href: "http://localhost:3002/style.css"
          href: "https://kakrlabs-chatbot-widget.azurewebsites.net/style.css"
        }
      ],
      script: [
        {
          // src: "http://localhost:3002/chatbot.min.js",
          src: "https://kakrlabs-chatbot-widget.azurewebsites.net/chatbot.min.js",
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        }
      ],
    },
  },
});
