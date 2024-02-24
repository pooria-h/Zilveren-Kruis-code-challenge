<template>
  <div :class="cssClasses" class="form-input my-4">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    cssClasses: {
      type: String,
      default: '',
    },
  },
});
</script>
