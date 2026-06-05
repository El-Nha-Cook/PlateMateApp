<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="layout-wrapper">
    <TheHeader />
    <main class="main-layout">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

