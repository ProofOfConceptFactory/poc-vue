import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/another-page',
            name: 'another-page',
            component: () => import('./pages/AnotherPage.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
    ]
})

export default router
