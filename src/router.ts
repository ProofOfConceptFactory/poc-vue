import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import NotFoundView from "./views/NotFoundView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/another-page',
            name: 'another-page',
            component: () => import('./views/AnotherPageView.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFoundView
        },
    ]
})

export default router
