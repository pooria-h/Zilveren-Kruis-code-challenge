<template>
  <div :class="cssClasses" class="form-input my-4">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  cssClasses: {
    type: String,
    default: '',
  },
});
</script>
