<script setup lang="ts">
import {useSideboardStore} from "@/stores/sideboardStore.ts";
import { storeToRefs } from "pinia";

const store = useSideboardStore();
const { groceryList } = storeToRefs(store);

</script>

<template>
      <h3 class="grocery-list-title">Grocery List</h3>
      <div class="groceries-wrapper">
        <h4>(from Meal Planner)</h4>
        <section class="grocery-list-wrapper">
          <div class="grocery-item" v-for="(ingredient, idx) in groceryList" :key="idx">
            &#11047;&#11047;&nbsp;{{ ingredient.name }} — {{ ingredient.measure }}
          </div>
        </section>
      </div>
</template>