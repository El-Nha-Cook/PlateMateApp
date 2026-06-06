<script setup lang="ts">
import { makeDraggable } from '@vue-dnd-kit/core';
import { useTemplateRef } from 'vue';

const props = defineProps({ 
    card: Object,
    origin: String,
    nudgeDown: Function
});

const emit = defineEmits(['click', 'remove']);

const cardRef = useTemplateRef('cardRef');

makeDraggable(cardRef, {
    //this is the payload the drop zone reads through e.draggingElements[0].data
    data: () => ({ id: props.card.id, origin: props.origin})
});
</script>

<template>
    <div
        ref="cardRef"
        style="touch-action: none;"
        @click="emit('click')"
    >
    <span>{{ card.emoji ?? '🥣' }} {{ card.title ?? card.name }}</span>
    <button v-if="origin === 'planner'" @click.stop="emit('remove')">x</button>
    <button v-if="origin === 'planner'" @click.stop="nudgeDown(card.id)">↓</button>
    <button v-else @click.stop="emit('click')">Add -></button>
    </div>
</template>