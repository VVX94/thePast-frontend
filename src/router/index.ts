import { createRouter, createWebHistory } from 'vue-router'
import { menuRoutes } from './menuRoutes'

const routes = menuRoutes
  .filter(route => !route.external && route.component) // ✅ 只保留有组件的非外链项
  .map(route => ({
    path: route.path,
    name: route.name,
    component: route.component!,
  }));

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
