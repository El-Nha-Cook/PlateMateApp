<script setup lang="ts">
    import { ref } from "vue"
    import { useRecipeSearch } from "@/composables/useRecipeSearch";
    import RecipeCard from "./RecipeCard.vue";

    const search = ref("");

    const { data, status, error } = useRecipeSearch(search);
    console.log("data from composable: ", data);
</script>

<!-- test code to see api call data:  -->
<template>

    <input v-model="search" placeholder="Try 'chicken'..."/>
    <p>Status: {{status}}</p>
    <div v-if="status === 'error'">{{error?.message}}</div>
    <div v-else-if="status=== 'success' && data?.length">
      <RecipeCard
        v-for="recipe in data"
        :key="recipe.id"
        :recipe="recipe"
      />
        <!-- <pre style="white-space: pre-wrap; word-break: break-all;">{{ JSON.stringify(data[0], null, 2) }}</pre> -->
    <!-- Quick sanity check on ingredients specifically -->
    <!-- <h3>{{ data[0].title }}</h3> -->
    <!-- <ul>
      <li v-for="ing in data[0].ingredients" :key="ing.name">
        {{ ing.measure }} {{ ing.name }}
      </li>
    </ul> -->
    </div>
    <p v-if="status === 'success' && !data?.length">No results for "{{ search }}"</p>
</template>