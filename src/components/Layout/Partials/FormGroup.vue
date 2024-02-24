<template>
  <div class="form-group">
    <h3>{{ name }}</h3>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
  },
});
</script>
