<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="header-nav">
    <div class="logo">
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
.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  /* Soft shadow for a "happy" lift */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.logo a {
  text-decoration: none;
  color: #2c3e50;
}

.logo h1 {
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

/* This class is automatically applied by Vue Router when the link is active */
.router-link-active {
  color: #637d64;
  font-weight: 600;
}

/* Exception: Don't highlight the logo as active unless it's the only match */
.logo .router-link-exact-active {
  color: inherit;
}
</style>
