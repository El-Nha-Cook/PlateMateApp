<script setup lang="ts">
import BucketZone from './BucketZone.vue';

const props = defineProps({ 
    plannerCards: Object,
    moveToDashboard: Function, //moveToDashboard passed down from parent
    moveToSideboard: Function,
    moveBetweenBuckets: Function,
    nudgeDown: Function
}); //defineProps compiler macro takes an options object

const buckets = [
  { key: 'morning',   label: '🌅 Morning'   },
  { key: 'midday',    label: '☀️ Midday'    },
  { key: 'afternoon', label: '🌤 Afternoon' },
  { key: 'evening',   label: '🌙 Evening'   },
  { key: 'nightowl',  label: '🦉 NightOwl'  },
];

</script>

<template>
    <section class="menu-dashboard-section">
        <h3>Menu Dashboard</h3>
        <BucketZone
        v-for="bucket in buckets"
        :bucket-key="bucket.key"
        :label="bucket.label"
        :cards="plannerCards[bucket.key]"
        :move-to-dashboard="moveToDashboard"
        :move-to-sideboard="moveToSideboard"
        :move-between-buckets="moveBetweenBuckets"
        :nudge-down="nudgeDown"
        />
    </section>
</template>

<style>
.menu-dashboard-section {
    background-color: var(--bg);
    border: 2px solid seagreen;
    padding: 1rem;
    width: 60%;
}
.menu-dashboard-section.is-overed{
    outline: 5px solid seagreen;
}
</style>