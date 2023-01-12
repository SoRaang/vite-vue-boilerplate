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
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import( /* webpackChunkName: 'Portfolio' */ '@/views/Portfolio.vue' )
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router