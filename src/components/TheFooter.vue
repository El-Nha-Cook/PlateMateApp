<script setup lang="ts">
import { Icon } from '@iconify/vue'

const team = [
  {
    name: 'Nha Pham',
    linkedin: 'https://www.linkedin.com/in/nha-minh-pham/',
    github: 'https://github.com/nhapham03',
  },
  {
    name: 'El Brewster',
    linkedin: 'https://www.linkedin.com/in/el-brewster/',
    github: 'https://github.com/elbi3',
  },
]

const stack = [
  { icon: 'logos:vue', label: 'Vue 3' },
  { icon: 'logos:vitejs', label: 'Vite' },
  { icon: 'logos:pinia', label: 'Pinia' },
]
</script>

<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-left">
        <p class="footer-created">Created by Nha Pham and El Brewster</p>
        <p class="footer-desc">
          Helping users plan meals, organize grocery lists, and discover recipes.
        </p>
      </div>

      <div class="footer-right">
        <div v-for="person in team" :key="person.name" class="person-row">
          <span class="person-name">{{ person.name }}</span>
          <a :href="person.github" target="_blank" :aria-label="`${person.name} GitHub`">
            <Icon icon="mdi:github" width="18" />
          </a>
          <a :href="person.linkedin" target="_blank" :aria-label="`${person.name} LinkedIn`">
            <Icon icon="mdi:linkedin" width="18" />
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>Powered by Vue 3 + Vite + Pinia</span>
      <div class="stack-icons">
        <Icon
          v-for="tech in stack"
          :key="tech.label"
          :icon="tech.icon"
          :title="tech.label"
          width="20"
        />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #6a6c6e;
  color: white;
  padding: 2rem;
  margin-top: 3rem;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer-created {
  font-weight: 600;
  margin-bottom: 0.4rem;
}

.footer-desc {
  color: #d1d5db;
  font-size: 0.9rem;
}

.footer-right {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
}

.person-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.person-name {
  font-size: 0.9rem;
  color: #d1d5db;
}

.person-row a {
  color: #d1d5db;
  display: flex;
  transition: color 0.15s;
}

.person-row a:hover {
  color: white;
}

.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 1rem;
  font-size: 0.85rem;
  color: #d1d5db;
}

.stack-icons {
  display: flex;
  gap: 6px;
  align-items: center;
}
</style>
