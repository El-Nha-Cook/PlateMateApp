<script setup lang="ts"></script>

<template>
  <footer class="footer-nav">
    <h3>PlateMate</h3>

    <p>Created by Nha Pham and El Brewster</p>

    <p>Helping users plan meals, organize grocery lists, and discover recipes.</p>

    <div class="footer-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/meal-planner">Meal Planner</RouterLink>
      <RouterLink to="/grocery-list">Grocery List</RouterLink>
      <RouterLink to="/recipes">Recipes</RouterLink>
    </div>

    <p>Powered by Vue 3 + Vue Router</p>

    <p>© 2026 PlateMate</p>
  </footer>
</template>

<style>
.footer-nav {
  background-color: #6a6c6e;
  color: white;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
}

.footer-nav h3 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.footer-nav p {
  margin: 0.5rem 0;
  color: #d1d5db;
}

.footer-nav p:last-child {
  margin-top: 1rem;
  font-size: 0.85rem;
}
.footer-links {
  margin: 1rem 0;
}

.footer-links a {
  color: white;
  text-decoration: none;
  margin: 0 12px;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
