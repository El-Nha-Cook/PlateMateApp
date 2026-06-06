import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useSideboardStore = defineStore("sideboard", () => {
    const sideboardCards = ref([]);
    const MAX_SIDEBOARD = 15;

  const plannerCards = ref({
    morning:   [],
    midday:    [],
    afternoon: [],
    evening:   [],
    nightowl:  []
  })

  const groceryList = computed(() => {
    const allCards = Object.values(plannerCards.value).flat();
    return allCards.flatMap(card => card.ingredients ?? []);
  });
    function selectCard(card) {
        //prevents duplicates
        const already = sideboardCards.value.some(c => c.id === card.id);
        if(already)return;
        if(sideboardCards.value.length >= MAX_SIDEBOARD) {
            console.warn("Sideboard is full");
            return;
        }
        sideboardCards.value.push(card);
    };
    function deselectCard(cardId) {
        const idx = sideboardCards.value.findIndex(c => c.id === cardId);
        if(idx !== -1) sideboardCards.value.splice(idx, 1);
    };
    function isSelected(cardId) {
        return sideboardCards.value.some(c => c.id === cardId);
    };
    return { sideboardCards, plannerCards, groceryList, selectCard, deselectCard, isSelected }
},{
    persist: true //this wires up teh localStorage with the plugin
});