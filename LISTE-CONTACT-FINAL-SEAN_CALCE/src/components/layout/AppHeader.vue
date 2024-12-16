<script setup lang="ts">
defineProps<{
  titre: string
}>()
</script>

<template>
  <header class="app-header py-2 px-3 mb-4">
    <h1 class="app-title">{{ titre }}</h1>
  </header>
</template>

<style scoped>
.app-header {
  background-color: #646cff;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.app-title {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
}

@media (max-width: 768px) {
  .app-title {
    font-size: 1.25rem;
  }
}
</style>