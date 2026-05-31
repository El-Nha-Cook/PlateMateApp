
import { ref, type Ref } from "vue"
import { useQuery } from "@pinia/colada"
import { searchRecipes } from "@/api/mealdb"
import { refDebounced } from "@vueuse/core"

export function useRecipeSearch(query: Ref<string>) {
  const debouncedQuery = refDebounced(query, 400)

  return useQuery({
    key: () => ['recipes', 'search', query.value],
    query: () => searchRecipes(query.value),
    enabled: () => debouncedQuery.value.trim().length > 1,
    },
)}