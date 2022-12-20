import { createWebHistory, createRouter } from 'vue-router'
import Main from '@/views/Main.vue'

const routes = [
    { path: '/', name: 'Main', component: Main },
    { path: '/projects', name: 'Projects', component: () => import( /* webpackChunkName: 'Projects' */ '@/views/Projects.vue') }, // Lazy-Loading을 위한 JavaScript 청크 분리
    { path: '/workflow', name: 'Workflow', component: () => import( /* webpackChunkName: 'Workflow' */ '@/views/Workflow.vue') },
    { path: '/storage', name: 'Storage', component: () => import( /* webpackChunkName: 'Storage' */ '@/views/Storage.vue') },
    { path: '/details/:id', component: () => { /* webpackChunkName: 'ItemDetail' */ '@/views/ItemDetail.vue' } }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router