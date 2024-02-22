<template>
  <div class="form-group">
    <h3>{{ name }}</h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
