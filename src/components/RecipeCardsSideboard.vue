<script setup lang="ts">
import DraggableCard from "./DraggableCard.vue";
import { makeDroppable } from "@vue-dnd-kit/core";
import { useTemplateRef } from "vue";

defineProps({ cards: Array});
const emit = defineEmits(["move-to-dashboard"]);

const sideboardRef = useTemplateRef('sideboardRef');

const { isDragOver } = makeDroppable(sideboardRef, {
    events: {
        onDrop(e) {
            const cardId = e.draggedItems?.[0]?.data?.id;
            const origin = e.draggedItems?.[0]?.data?.origin;
        }
    }
});
</script>

<template>
    <aside 
    ref="sideboardRef"
    class="sideboard-aside"
    :class="{ 'is-drag-over': isDragOver }"
    >
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
    background-color: var(--bg);
    border: 2px solid seagreen;
    padding: 1rem;
    width: 30%;
}
</style>