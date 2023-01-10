import { createWebHistory, createRouter } from 'vue-router'
import Main from '@/views/Main.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    }, // Nomal Route
    {
        path: '/details/:id',
        component: () => import( /* webpackChunkName: 'ItemDetail' */ '@/views/ItemDetail.vue' )
    }, // Dynamic Route
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router