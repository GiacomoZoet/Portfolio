import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import InfoView from "@/views/InfoView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: HomeView},
    {path: "/info", component: InfoView},
    {path: "/contact", component: ContactView},
  ],
})

export default router
