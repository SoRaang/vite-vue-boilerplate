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
    }, // Dynamic Route
    {
        path: '/portfoliodetail',
        name: 'PortfolioDetail',
        component: () => import( /* webpackChunkName: 'PortfolioDetail' */ '@/views/PortfolioDetail.vue' )
    }, // Dynamic Route
    {
        path: '/solutiondev',
        name: 'SolutionDev',
        component: () => import( /* webpackChunkName: 'SolutionDev' */ '@/views/SolutionDev.vue' )
    }, // Dynamic Route
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router