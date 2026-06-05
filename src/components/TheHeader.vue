<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header-nav">
    <div class="site-logo">
      <RouterLink to="/">
        <h1>PlateMate</h1>
      </RouterLink>
    </div>

    <nav class="nav-links">
      <RouterLink to="/meal-planner" class="nav-item">Meal Planner</RouterLink>
      <RouterLink to="/grocery-list" class="nav-item">Grocery List</RouterLink>
      <RouterLink to="/recipes" class="nav-item">Recipes</RouterLink>
    </nav>
  </header>
</template>

<style>


.site-logo a {
  text-decoration: none;
  color: var(--text);
}

.site-logo h1 {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-item {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

/* Hover effect */
.nav-item:hover {
  color: #637d64; /* A soft sage green */
}

.router-link-active {
  color: #637d64;
  font-weight: 600;
}

</style>
