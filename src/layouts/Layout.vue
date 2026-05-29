<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
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
    <Footer />
  </div>
</template>

<style></style>
