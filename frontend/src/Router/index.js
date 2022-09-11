import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path: '/login',
        name: 'MyLogin',
        component: () => import('../views/MyLogin.vue'),
    },
    {
        path: '/create',
        name: 'MyCreation',
        component: () => import('../views/MyCreation.vue'),
    },
    {
        path: '/album/:id',
        name: 'InnerAlbum',
        component: () => import('../views/InnerAlbum.vue'),
    },
]

const indexRoute = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default indexRoute
