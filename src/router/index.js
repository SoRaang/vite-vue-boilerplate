import { createWebHistory, createRouter } from 'vue-router'
import Main from '@/views/Main.vue'

const User = { // Temp. Template For Nested Route
    template: `
        <div>
            <h2>{{ $route.params.id }}</h2>
            <router-view></router-view>
        </div>
    `
}

const routes = [
    { path: '/', name: 'Main', component: Main }, // Nomal Route
    { path: '/details/:id', component: () => import( /* webpackChunkName: 'ItemDetail' */ '@/views/ItemDetail.vue' ) }, // Dynamic Route
    { // Netsted Route
        path: '/users/:id', component: User, children: [
            { path: 'profile', component: UserProfile },
            { path: 'posts', components: UserPosts }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router