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
      <RouterLink to="/planner" class="nav-item">Daily Menu Planner</RouterLink>
      <RouterLink to="/grocery-list" class="nav-item">Grocery List</RouterLink>
      <RouterLink to="/recipes" class="nav-item">Recipes</RouterLink>
    </nav>
  </header>
</template>

