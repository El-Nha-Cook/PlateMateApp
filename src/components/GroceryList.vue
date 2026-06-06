<script setup lang="ts">
import {useSideboardStore} from "@/stores/sideboardStore.ts";
import { storeToRefs } from "pinia";

const store = useSideboardStore();
const { groceryList, plannerCards } = storeToRefs(store);

</script>

<template>
<p>grocery list component</p>

      <div v-for="(ingredient, idx) in groceryList" :key="idx">
        {{ ingredient.name }} — {{ ingredient.measure }}
      </div>

</template>