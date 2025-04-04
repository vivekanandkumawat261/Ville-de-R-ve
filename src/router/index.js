import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import CityDashboard from "../pages/CityDashboard.vue";
import Login from "../pages/Login.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/dashboard", component: CityDashboard },
  { path: "/login", component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
