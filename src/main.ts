import { createApp } from 'vue'
import App from './App.vue'
import "@/styles/global.css"
import { createPinia } from 'pinia'
import { PiniaColada } from "@pinia/colada"
import router from '@/router/index'


const app = createApp(App)
app.use(createPinia())
app.use(PiniaColada, {
  queryOptions: {
    staleTime: 0,
  },
})

app.use(router)

app.mount('#app')
