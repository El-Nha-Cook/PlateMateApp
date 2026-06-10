<script setup lang="ts"></script>

<template>
  <div class="gallery-card">
    <div class="gallery-card__image">
      <slot />
    </div>
    <div class="gallery-card__caption">
      <slot name="caption" />
    </div>
  </div>
</template>

<style scoped>
.gallery-card {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
}

.gallery-card__image {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.gallery-card__image :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery-card__caption {
  padding: 10px 14px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #35495e;
  text-align: center;
  letter-spacing: 0.02em;
}
</style>
