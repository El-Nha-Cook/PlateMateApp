<script setup lang="ts">
//parent of MenuDashboard and RecipeSideboard: basically a wrapper that goes into PlannerPage 
//and also handles state for drag-n-drop between sideboard and dashboard child components.
import MenuDashboard from './MenuDashboard.vue';
import RecipeCardsSideboard from './RecipeCardsSideboard.vue';
import { DnDProvider } from '@vue-dnd-kit/core';
import { ref } from "vue";

const sideboardCards = ref([
  { id: 'oats',    name: 'Overnight Oats',  emoji: '🥣' },
  { id: 'chicken', name: 'Grilled Chicken', emoji: '🍗' },
  { id: 'salad',   name: 'Garden Salad',    emoji: '🥗' },
])
const plannerCards = ref({
    morning: [],
    midday: [],
    afternoon: [],
    evening: [],
    nightowl: []
});

function moveToDashboard(cardId, bucketKey){
    const idx = sideboardCards.value.findIndex(card => card.id === cardId);
    if(idx === -1) return;
    const [card] = sideboardCards.value.splice(idx, 1);
    plannerCards.value[bucketKey].push(card);

};
function moveToSideboard(cardId, bucketKey){
      console.log('moveToDashboard called with:', cardId, bucketKey)  // add this
    for(const bucket of Object.values(plannerCards.value)){
        const idx = bucket.findIndex(c => c.id === cardId);
        if(idx !== -1) {
            const [card] = bucket.splice(idx, 1);
            sideboardCards.value.push(card);
            return;
        }
    }
    // const idx = plannerCards.value.findIndex(card => card.id === cardId);
    // if(idx === -1) return;
    // const [card] = plannerCards.value.splice(idx, 1);
    // sideboardCards.value.push(card);
};

function moveBetweenBuckets(cardId, toBucketKey) {
    for(const bucket of Object.values(plannerCards.value)){
        const idx = bucket.findIndex(c => c.id === cardId);
        if(idx !== -1){
            const [card] = bucket.splice(idx, 1);
            plannerCards.value[toBucketKey].push(card);
            return;
        }
    }
};
</script>

<template>
    <DnDProvider>
        <div class="menu-planner-wrapper">
            <MenuDashboard 
                :planner-cards="plannerCards" 
                :move-to-dashboard="moveToDashboard"
                :move-to-sideboard="moveToSideboard"
                :move-between-buckets="moveBetweenBuckets"
            />
            <RecipeCardsSideboard 
                :cards="sideboardCards" 
                @move-to-dashboard="moveToDashboard"
            />
        </div>
    </DnDProvider>
</template>

<style>
.menu-planner-wrapper{
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
</style>