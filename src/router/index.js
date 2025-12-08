import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import F1View from "@/views/f1View.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", name: 'home', component: HomeView},
    {path: "/f1", component: F1View},
    {path: "/contact", component: ContactView},
  ],
})

export default router
