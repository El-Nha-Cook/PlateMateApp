import { createApp } from 'vue'
import App from './App.vue'
import "@/styles/global.css"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { PiniaColada } from "@pinia/colada"
import router from '@/router/index'


const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate); //adds localStorage persistence

app.use(pinia)
app.use(PiniaColada, {
  queryOptions: {
    staleTime: 0,
  },
})
app.use(router)

app.mount('#app')
