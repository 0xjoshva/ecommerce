import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/marketplace",
    name: "marketplace",
    component: () => import("../views/MarketView.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductView",
    component: () => import("../views/ProductView.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
