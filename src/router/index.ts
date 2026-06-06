import { createRouter, createWebHistory } from 'vue-router'
//import layout components
import TheLayout from '@/layouts/TheLayout.vue'
import RecipesLayout from '@/layouts/RecipesLayout.vue'
//import page components
import Home from '@/pages/Home.vue'
//import child components-whatever needs its own url
// Child Components are reccommended to use 'lazy loading', they keep the initial page load fast, only runs as user clicks
// So instead of importing them here, I (Nha) moved them below for performance optimization

const routes = [
  {
    path: '/',
    component: TheLayout,
    children: [
      { path: '', component: Home },
      { path: '/daily-menu-planner', component: () => import('@/components/DailyMenuPlanner.vue') },
      { path: '/grocery-list', component: () => import('@/components/GroceryList.vue') },
    ],
  },
  {
    path: '/recipes',
    component: RecipesLayout,
    children: [
      { path: '', component: () => import('@/components/RecipeList.vue') },
      { path: 'recipe/:id', component: () => import('@/components/RecipeCard.vue') },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Added Scroll Behavior ensures page starts at the top when navigating
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
