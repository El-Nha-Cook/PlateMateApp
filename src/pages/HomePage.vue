<script setup lang="ts">
import { RouterLink } from 'vue-router'
import GalleryCard from '@/components/GalleryCard.vue'
const base = import.meta.env.BASE_URL

const foods = [
  { src: `${base}bowl.jpg`, label: 'Bowl' },
  { src: `${base}cake.jpg`, label: 'Cake' },
  { src: `${base}frenchtoast.jpg`, label: 'French Toast' },
  { src: `${base}kebab.jpg`, label: 'Kebab' },
  { src: `${base}pizza.jpg`, label: 'Pizza' },
  { src: `${base}sandwich.jpg`, label: 'Sandwich' },
]
</script>

<template>
  <div class="home">
    <h1 class="home__title">Food Gallery</h1>
    <p class="home__subtitle">Fresh picks from PlateMate</p>

    <div class="gallery-grid">
      <GalleryCard v-for="food in foods" :key="food.label">
        <img :src="food.src" :alt="food.label" />

        <!-- #caption → named slot for the label -->
        <template #caption>{{ food.label }}</template>
      </GalleryCard>
    </div>

    <div class="home__cta">
      <RouterLink to="/recipes" class="btn-recipes"> Browse Recipes → </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.home__title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #35495e;
  margin-bottom: 0.25rem;
}

.home__subtitle {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.home__cta {
  margin-top: 2rem;
  text-align: center;
}

.btn-recipes {
  display: inline-block;
  padding: 0.65rem 1.75rem;
  background-color: #1d473b;
  color: whitesmoke;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.btn-recipes:hover {
  background-color: #2e3032;
}
</style>
