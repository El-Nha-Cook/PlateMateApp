import { createRouter, createWebHistory } from 'vue-router';
//import layout components
import Layout from '@/layouts/Layout.vue';
import RecipesLayout from '@/layouts/RecipesLayout.vue';
//import view components 
import Home from '@/views/Home.vue';
//import child components-whatever needs its own url
import GroceryList from '@/components/GroceryList.vue';
import MealPlanner from '@/components/MealPlanner.vue';
import Recipe from '@/components/Recipe.vue';
import RecipeList from '@/components/RecipeList.vue';

const routes = [
  { path: "/", component: Layout,
    children: [
      { path: "", component: Home },
      { path: "/meal-planner", component: MealPlanner },
      { path: "/grocery-list", component: GroceryList }
    ]
  },
  { path: "/recipes", component: RecipesLayout, 
    children: [
      { path: "", component: RecipeList },
      { path: "recipe/:id", component: Recipe }
    ]}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
