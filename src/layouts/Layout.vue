<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from '@/layouts/Header.vue'
import NoteCard from "@/components/NoteCard.vue";
</script>

<template>
    <div class="layout-wrapper">
        <!-- header component  -->
         <Header />
        <!-- nav component -->
        <main class="main-layout">
            <NoteCard />
            <RouterView />
        </main>
        <!-- footer component  -->
    </div>
</template>

<style>
</style>
