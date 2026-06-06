<script setup lang="ts">
//parent of MenuDashboard and RecipeSideboard and lives in PlannerPage 
//and also handles state for drag-n-drop between sideboard and dashboard child components.
import MenuDashboard from './MenuDashboard.vue';
import RecipeCardsSideboard from './RecipeCardsSideboard.vue';
import { DnDProvider } from '@vue-dnd-kit/core';
import { ref } from "vue";
import { useSideboardStore } from '@/stores/sideboardStore';
import { storeToRefs } from 'pinia';

const store = useSideboardStore();
const { sideboardCards } = storeToRefs(store);

const plannerCards = ref({
    morning: [],
    midday: [],
    afternoon: [],
    evening: [],
    nightowl: []
});

const bucketOrder = ['morning', 'midday', 'afternoon', 'evening', 'nightowl']

function moveToDashboard(cardId, bucketKey?){
    const idx = sideboardCards.value.findIndex(card => card.id === cardId);
    if(idx === -1) return;
    const [card] = sideboardCards.value.splice(idx, 1);

    const targetBucket = bucketKey ?? 'morning';
    plannerCards.value[targetBucket].push(card);

};
function nudgeDown(cardId) {
    console.log('nudgeDown called with:', cardId)
    for(let i = 0; i <bucketOrder.length; i++) {
        const bucket = plannerCards.value[bucketOrder[i]];
        const idx = bucket.findIndex(c => c.id === cardId);
        console.log(`checking bucket ${bucketOrder[i]}, idx: ${idx}`)
        if(idx !== -1){
            const isLast = i === bucketOrder.length - 1;
            if(isLast) return;
            const [card] = bucket.splice(idx, 1);
            plannerCards.value[bucketOrder[i+1]].push(card);
            return;
        }
    }
}
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
                :nudge-down="nudgeDown"
            />
            <RecipeCardsSideboard 
                :cards="sideboardCards" 
                @move-to-dashboard="moveToDashboard"
                @return-to-sideboard="moveToSideboard"
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