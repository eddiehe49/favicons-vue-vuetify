import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { init } from "@waline/client";
import '@waline/client/dist/waline.css';

const locale = {
  placeholder: "For a healthy network environment, comments will be displayed after review."
}
const waline = init({
  el: '#waline',
  serverURL: "https://eddiehe-favicons-waline.vercel.app",
  lang: 'en',
  locale,
});

loadFonts()

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.config.globalProperties.$waline = waline
app.mount('#app')
