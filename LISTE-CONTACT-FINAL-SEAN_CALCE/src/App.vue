<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
:root {
  --app-primary-color: #646cff;
  --app-secondary-color: #535bf2;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
  overscroll-behavior-y: none;
}

#app {
  min-height: 100vh;
  background-color: #f8f9fa;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  * {
    user-select: none;
  }

  input, textarea {
    user-select: text;
  }

  .btn {
    min-height: 44px; /* Better touch targets */
  }
}

/* PWA display fixes */
@media all and (display-mode: standalone) {
  body {
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
  }
}
</style>