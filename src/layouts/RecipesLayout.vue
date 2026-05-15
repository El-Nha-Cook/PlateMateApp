<script setup lang="ts">
import { RouterView } from "vue-router";

</script>

<template>
    <div class="recipes-layout-wrapper">
        <!-- header component  -->
        <!-- nav component -->
        <main class="recipes-layout">
            <RouterView />
        </main>
        <!-- footer component  -->
    </div>
</template>

<style>
/* temporary styling  */
.recipes-layout-wrapper {
    margin: 0;
    padding: 0;
}
.recipes-layout {
    display: flex;
    flex-direction: column;
    background-color: gainsboro;
    align-items: center;
    flex: 1;
    gap: 1rem;

}
</style>