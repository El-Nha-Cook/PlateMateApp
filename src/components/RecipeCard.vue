<script setup lang="ts">
import { ref } from "vue";
import type { Recipe } from "@/api/types.ts";
import { useSideboardStore } from "@/stores/sideboardStore";

const isFlipped = ref(false);
defineProps<{recipe: Recipe}>();
const emit = defineEmits(["toggle"]);
const store = useSideboardStore();

function getIngredientClass(ingredient, index, ingredients){
    const isWide = `${ingredient.name} - ${ingredient.measure}`.length > 30;
    //simulate grid slot sonsumption to find the effective last column position
    let nextCol = 0; // tracks which column the next item will land in (0 = left, 1 = right)
    let currentCol = 0;
    for(let i=0; i<= index; i++){
        const wide = `◍ ${ingredients[i].name} - ${ingredients[i].measure}`.length > 30;
        currentCol = nextCol;
        if(wide) {
            nextCol = 0; // wide items consume the full row, next item starts left
        } else {
            nextCol = nextCol === 0 ? 1 : 0; // toggle between columns
        }
        // if (i===index) break;
    }
    const isLast = index === ingredients.length - 1;
    const isSecondToLast = index === ingredients.length - 2;
// Last item is dangling if it's in col 1 (right column, paired with something)
// but we need to check if making it wide would orphan the item before it
    const lastIsDangling = isLast && !isWide && currentCol === 1;
    // const isDangling = isLast && !isWide && currentCol === 1;
      const secondToLastIsOrphaned = isSecondToLast && !isWide && currentCol === 0 && 
    (() => {
      // peek at the last item's column
      const lastWide = `${ingredients[index + 1].name} - ${ingredients[index + 1].measure}`.length > 30;
      return !lastWide && nextCol === 1; // last item would land in col 1 (dangling)
    })();
//   console.log(index, ingredient.name, { isWide, currentCol, isLast, isDangling });
    return {
        'ingredient-wide': isWide || lastIsDangling || secondToLastIsOrphaned,
    };
};
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
                <div class="ingredients-grid">

                    <div 
                    v-for="(ingredient, index) in recipe.ingredients"
                    :key="`${ingredient.name}-${ingredient.measure}-${index}`"
                    :class="getIngredientClass(ingredient,index,recipe.ingredients)"
                    >
                        <div class="output-container">
                            <span class="my-detail">
                                <span class="dot">&#9677;</span>&nbsp;&nbsp; 
                                {{ ingredient.name }} - 
                                {{ ingredient.measure.toLowerCase() }} 
                            </span>
                        </div>
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
.ingredients-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.ingredient-wide {
  grid-column: 1 / -1;
}
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