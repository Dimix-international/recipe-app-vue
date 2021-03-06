import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/recipe/:slug',
        name: 'Recipe',
        component: () => import('../views/Recipe.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router