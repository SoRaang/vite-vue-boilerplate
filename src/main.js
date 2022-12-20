import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'

import 'vue-global-api'
import './assets/scss/style.css'

const pinia = createPinia()
const app = createApp(App)

/* 라우터 셋팅 */

import Main from './components/Main.vue'
import Projects from './components/Projects.vue'
import Workflow from './components/Workflow.vue'
import Storage from './components/Storage.vue'

const routes = [
    { path: '/', component: Main },
    { path: '/projects', component: Projects },
    { path: '/workflow', component: Workflow },
    { path: '/storage', component: Storage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

/* 라우터 셋팅 끝 */

app.use(pinia)
app.use(router)
app.mount('#app')