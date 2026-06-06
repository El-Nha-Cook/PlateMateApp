<script setup lang="ts">
import { ref } from "vue";
import type { Recipe } from "@/api/types.ts";
import { useSideboardStore } from "@/stores/sideboardStore";

const isFlipped = ref(false);
defineProps<{recipe: Recipe}>();
const emit = defineEmits(["toggle"]);
const store = useSideboardStore();
</script>

<template>
    <article 
    class="card-container"
    :class="{'is-selected': store.isSelected(recipe.id)}"
    :aria-checked="store.isSelected(recipe.id)"
    role="checkbox"
    >
        <div v-if="!isFlipped">
            <div class="row-title">{{recipe.title}}</div>
            <div class="line-outputs-group">
                <div class="output-container">
                    <span class="my-detail">{{recipe.category.toUpperCase()}} --- {{recipe.area}}</span>
                </div>
                <div class="output-container">
                    <span class="my-detail" >Ingredients:</span>
                </div>
                <div v-for="ingredient in recipe.ingredients"
                :key="`${ingredient.name}-${ingredient.measure}`"
                >
                    <div class="output-container">
                        <span class="my-detail">
                            <span class="dot">&#9677;</span>&nbsp;&nbsp; 
                            {{ ingredient.name }} - 
                            {{ ingredient.measure.toLowerCase() }} 
                        </span>
                    </div>
                </div>
                <!-- this button flips card to the back or front -->
                <button class="flip-btn" @click="isFlipped = !isFlipped">
                {{ isFlipped ? 'Front' : 'Instructions' }} 
                </button>
                <!-- this button selects the card for the menu -->
                <button
                class="select-btn"
                @click.stop="emit('toggle')"
                :aria-label="store.isSelected(recipe.id) ? 'Remove from sideboard' : 'Add to sideboard'"
                >
                {{ store.isSelected(recipe.id) ? 'Selected' : 'Select'}}
                </button>
            </div>
        </div>
        <!-- add a flipped component here because the instructions are frequently larger than a "card size" -->
        <div v-if="isFlipped">
            <div class="form-inputs-group">
                {{recipe.instructions}}
            </div>
            <button class="flip-btn" @click="isFlipped = !isFlipped">
            {{ isFlipped ? 'Front' : 'Instructions' }}
            </button>
        </div>
    </article>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    background-color: whitesmoke;
    border-top: 1px solid ghostwhite;
    border-right: 1px solid ghostwhite;
    border-bottom: 1px solid silver;
    border-left: 1px solid lightgray;
}
.row-title {
    border-bottom: 1px solid red;
    color: midnightblue;
    line-height: 1.8;
    font-size: large;
    padding-left: 6ch;
}
.line-outputs-group {
    margin: 0;
    min-width: 30ch;
}
.output-container {
    /* border-bottom: 1px solid darkcyan; */
    border-bottom: 1px solid #86a9a5;
    padding-left: 5ch;
}
.my-detail {
    color: darkblue;
}
.dot {
    font-size: small;
}
.flip-btn {
    background-color: whitesmoke;
    border: none;
    font-style: italic;
    cursor: pointer;
}

</style>