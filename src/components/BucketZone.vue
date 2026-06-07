<script setup lang="ts">
import { makeDroppable } from '@vue-dnd-kit/core';
import { useTemplateRef } from 'vue';
import DraggableCard from './DraggableCard.vue';

const props = defineProps({
    bucketKey: String,
    label: String,
    cards: Array,
    moveToDashboard: Function,
    moveToSideboard: Function,
    moveBetweenBuckets: Function,
    nudgeDown: Function
});

const bucketRef = useTemplateRef('bucketRef');

const { isDragOver } = makeDroppable(bucketRef, {
    events: {
        onDrop(e) {
            const cardId = e.draggedItems?.[0]?.data?.id;
            const origin = e.draggedItems?.[0]?.data?.origin;
            if(!cardId) return;

            if(origin === 'sideboard') {
                props.moveToDashboard(cardId, props.bucketKey);
            } else {
                props.moveBetweenBuckets(cardId, props.bucketKey);
            }
        }
    }
});
</script>

<template>
    <div
        ref="bucketRef"
        class="bucket-zone"
        :class="{'is-drag-over': isDragOver}"
    >
        <h4>{{label}}</h4>
        <DraggableCard 
            v-for="card in cards"
            :key="card.id"
            :card="card"
            origin="planner"
            :nudge-down="nudgeDown"
            @remove="props.moveToSideboard(card.id)"
        />
        <p v-if="cards.length === 0" class="bucket-empty">drop here</p>
    </div>
</template>


<style>
.bucket-zone {
  border: 1px dashed seagreen;
  padding: 0.5rem;
  min-height: 60px;
}
.bucket-zone.is-drag-over {
  outline: 2px solid seagreen;
}
.bucket-empty {
  color: #aaa;
  font-size: 0.8rem;
  font-style: italic;
}
</style>