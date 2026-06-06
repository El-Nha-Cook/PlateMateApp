import { defineStore } from "pinia";
import { ref } from "vue";

export const useSideboardStore = defineStore("sideboard", () => {
    const sideboardCards = ref([]);
    const MAX_SIDEBOARD = 15;

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
    return { sideboardCards, selectCard, deselectCard, isSelected }
},{
    persist: true //this wires up teh localStorage with the plugin
});