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

const routes = [
    { path: '/', component: Main },
    { path: '/projects', component: () => import('./components/Projects.vue') },
    { path: '/workflow', component: () => import('./components/Workflow.vue') },
    { path: '/storage', component: () => import('./components/Storage.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

/* 라우터 셋팅 끝 */

app.use(pinia)
app.use(router)
app.mount('#app')