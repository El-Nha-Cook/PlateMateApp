<script setup lang="ts">
import type { Recipe } from "@/api/types.ts";
defineProps<{
    recipe: Recipe
}>();
</script>

<template>
    <article class="card-container">
        <div class="row">0</div>
        <div class="form-inputs-group">
            <div class="input-container">
                <span class="my-label" for="blog-title">Recipe Title: {{recipe.title}}</span>
                <input class="my-input" name="blog-title" type="text" >
            <!-- <input name="blog-title" type="text" class="title-input" v-model="newPost.title"> -->
            </div>
            <div class="input-container">
                <span class="my-label" for="blog-title">Category: {{recipe.category}}</span>
                <input class="my-input" name="blog-title" type="text" >
                <!-- <input name="blog-title" type="text" class="title-input" v-model="newPost.title"> -->
            </div>
            <div class="input-container">
                <label class="my-label" for="blog-title">Ingredient:</label>
                <input class="my-input" name="blog-title" type="text" >
                <!-- <input name="blog-title" type="text" class="title-input" v-model="newPost.title"> -->
            </div>
            <div class="input-container">
                <label class="my-label" for="blog-title">Instructions:</label>
                <input class="my-input" name="blog-title" type="text" >
                <!-- <input name="blog-title" type="text" class="title-input" v-model="newPost.title"> -->
            </div>
        </div>
    </article>
</template>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    min-width: 60%;
    background-color: whitesmoke;
}
.row {
    border-bottom: 1px solid red;
    color: whitesmoke;
}
.form-inputs-group {
    margin: 0;
}
.input-container {
    border-bottom: 1px solid darkcyan;
    padding-left: 5ch;
}
.my-label {
    color: darkblue;
}
.my-input {
    background-color: whitesmoke;
    border: none;
}
.my-input:hover {
    border: none;
}
.my-input:active {
    border: none;
}
</style>