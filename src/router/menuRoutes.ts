// src/router/menuRoutes.ts
import { HomeOutlined } from '@ant-design/icons-vue'
import { h } from 'vue'

export const menuRoutes = [
  {
    path: '/',
    name: 'home',
    label: '主页',
    icon: () => h(HomeOutlined),
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    label: '关于',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: 'https://www.github.com/vvx94',
    name: 'others',
    label: '作者',
    external: true,
  },
];
