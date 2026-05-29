<script setup lang="ts">
import { RouterView } from "vue-router";
import NoteCard from "@/components/NoteCard.vue";
</script>

<template>
    <div class="layout-wrapper">
        <!-- header component  -->
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