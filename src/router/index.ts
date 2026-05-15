import { createRouter, createWebHistory } from 'vue-router'
//import layout components
import Layout from '@/layouts/Layout.vue';
//import view components 
import Home from '@/views/Home.vue';
//import child components

const routes = [
  { path: "/", component: Layout,
    children: [
      { path: "", component: Home }
    ]
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
