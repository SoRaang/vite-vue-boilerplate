import { createWebHistory, createRouter } from 'vue-router'
import Main from '@/views/Main.vue'

const routes = [
    { path: '/', name: 'Main', component: Main },
    { path: '/projects', name: 'Projects', component: () => import('@/views/Projects.vue') }, // Lazy-Loading을 위한 JavaScript 청크 분리
    { path: '/workflow', name: 'Workflow', component: () => import('@/views/Workflow.vue') },
    { path: '/storage', name: 'Storage', component: () => import('@/views/Storage.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router