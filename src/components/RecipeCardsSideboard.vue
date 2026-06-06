<script setup lang="ts">
// import { makeDraggable } from "@vue-dnd-kit/core";
import DraggableCard from "./DraggableCard.vue";

defineProps({ cards: Array});
const emit = defineEmits(["move-to-dashboard"]);
</script>

<template>
    <aside class="sideboard-aside">
        <h3>sideboard</h3>
        <DraggableCard 
            v-for="card in cards" 
            :key="card.id"
            :card="card"
            origin="sideboard"
            @click="emit('move-to-dashboard', card.id)"
        />
    </aside>
</template>

<style>
.sideboard-aside {
    background-color: aqua;
    border: 1px solid blue;
    padding: 1rem;
}
</style>