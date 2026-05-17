<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/layouts/Header.vue'
</script>

<template>
  <div class="layout-wrapper">
    <!-- header component  -->
    <Header />
    <!-- nav component -->
    <main class="main-layout">
      <RouterView />
    </main>
    <!-- footer component  -->
  </div>
</template>

<style>
/* temporary styling  */
.layout-wrapper {
  margin: 0;
  padding: 0;
}
.main-layout {
  display: flex;
  flex-direction: column;
  background-color: gainsboro;
  align-items: center;
  flex: 1;
  gap: 1rem;
}
</style>
