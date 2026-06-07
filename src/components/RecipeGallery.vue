<script setup lang="ts">
    import { ref } from "vue"
    import { useRecipeSearch } from "@/composables/useRecipeSearch";
    import RecipeCard from "./RecipeCard.vue";
    import { useSideboardStore } from "@/stores/sideboardStore";

    const store = useSideboardStore();
    const search = ref("");
    const { data, status, error } = useRecipeSearch(search);

    function handleCardSelect(card) {
      store.selectCard(card);
    }
    function handleCardDeselect(cardId) {
      store.deselectCard(cardId);
    }
    function isCardSelected(cardId) {
      return store.isSelected(cardId);
    }
    function toggleSelection(recipe) {
      if(store.isSelected(recipe.id)){
        store.deselectCard(recipe.id)
      } else {
        store.selectCard(recipe)
      }
    }
    console.log("data from composable: ", data);
</script>

<template>
      <input class="recipe-search" v-model="search" placeholder="Try 'chicken'..."/>
      <p>Status: {{status}}</p>
      <div v-if="status === 'error'">{{error?.message}}</div>

      <div class="recipe-cards-gallery" v-else-if="status=== 'success' && data?.length">
        <RecipeCard
          v-for="recipe in data"
          :key="recipe.id"
          :recipe="recipe"
          @toggle="toggleSelection(recipe)"
        />
      </div>
      <p v-if="status === 'success' && !data?.length">No results for "{{ search }}"</p>
</template>
