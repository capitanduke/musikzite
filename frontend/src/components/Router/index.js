import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../HomePage.vue'),
    },
    {
        path: '/login',
        name: 'MyLogin',
        component: () => import('../MyLogin.vue'),
    },
]

const indexRoute = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default indexRoute
