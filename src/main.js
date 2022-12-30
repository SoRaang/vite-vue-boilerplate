// Necessaries
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index.js'

import 'vue-global-api'
import './assets/scss/style.css'

// API
import { format, add, sub } from 'date-fns'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')