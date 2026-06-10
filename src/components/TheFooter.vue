<script setup lang="ts">
import { Icon } from '@iconify/vue'

const team = [
  {
    name: 'Nha Pham',
    linkedin: 'https://www.linkedin.com/in/nha-pham-96a181295/',
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

