<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/layouts/Header.vue'
</script>

<template>
  <div class="recipes-layout-wrapper">
    <!-- header component  -->
    <Header />
    <!-- nav component -->
    <main class="recipes-layout">
      <RouterView />
    </main>
    <!-- footer component  -->
  </div>
</template>

<style>
</style>

