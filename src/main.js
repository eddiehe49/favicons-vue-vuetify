import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import Waline from "@waline/client";

const waline = Waline({
  el: '#waline',
  serverURL: "https://eddiehe-favicons-waline.vercel.app",
  lang: 'en',
});

loadFonts()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.config.globalProperties.$waline = waline
app.mount('#app')
