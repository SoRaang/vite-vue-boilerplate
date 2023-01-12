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
    },
    {
        path: '/portfoliodetail',
        name: 'PortfolioDetail',
        component: () => import( /* webpackChunkName: 'PortfolioDetail' */ '@/views/PortfolioDetail.vue' )
    },
    {
        path: '/csnotice',
        name: 'CsNotice',
        component: () => import( /* webpackChunkName: 'CsNotice' */ '@/views/CsNotice.vue' )
    },
    {
        path: '/solutiondev',
        name: 'SolutionDev',
        component: () => import( /* webpackChunkName: 'SolutionDev' */ '@/views/SolutionDev.vue' )
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router