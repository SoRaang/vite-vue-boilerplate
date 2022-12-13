import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'vue-global-api'
import './assets/scss/style.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')