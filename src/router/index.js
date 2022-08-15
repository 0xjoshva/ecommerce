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
    path: "/admin/users",
    name: "users",
    component: () => import("../views/UsersView.vue"),
  },
  {
    path: "/admin/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/product/:id",
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
