<script setup lang="ts">
import type { ButtonProps } from '@/types'

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false
})

const getButtonClasses = () => {
  return {
    'base-button': true,
    [`base-button--${props.variant}`]: true,
    [`base-button--${props.size}`]: true,
    'base-button--disabled': props.disabled
  }
}
</script>

<template>
  <button
    :class="getButtonClasses()"
    :disabled="disabled"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.base-button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
}

.base-button--primary {
  background-color: #646cff;
  color: white;
}

.base-button--secondary {
  background-color: transparent;
  border-color: #646cff;
  color: #646cff;
}

.base-button--small {
  font-size: 0.875em;
  padding: 0.4em 0.8em;
}

.base-button--large {
  font-size: 1.125em;
  padding: 0.8em 1.6em;
}

.base-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.base-button:hover:not(.base-button--disabled) {
  border-color: #747bff;
}
</style>