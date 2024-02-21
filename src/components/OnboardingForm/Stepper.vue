<template>
  <div class="Stepper mb-5">
    <ol class="stepper__steps">
      <li
        v-for="step in steps"
        :key="step.value"
        class="stepper__step">
        <a
          @click.prevent="'#'"
          class="stepper__content"
          href="#"
          aria-disabled="false"
          aria-current="false">
          <span class="stepper__number">
            <span class="stepper__icon">{{ step.value }}</span>
          </span>
          <span class="stepper__title">{{ step.name }}</span>
        </a>
      </li>
    </ol>
    <div class="stepper__progress"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Step } from '@/types/Step';

export default defineComponent({
  props: {
    steps: {
      type: Array as PropType<Step[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
  .Stepper {
    position: relative;
    z-index: 1;
    width: 100%;
  }
  .stepper__steps {
    list-style: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    counter-reset: steps-counter;
    padding-left: 0;
    margin-bottom: 0;
  }
  .stepper__step {
    counter-increment: steps-counter;
    position: relative;
    text-align: left;
    flex-basis: unset;
    flex-grow: unset;
    display: block;
    flex: 1;
  }
  .stepper__content {
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
  .stepper__step:first-child .stepper__content {
    justify-content: flex-start;
  }
  .stepper__number {
    content: counter(steps-counter);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: inline-block;
    line-height: 1.8rem;
    text-align: center;
    flex-shrink: 0;
    z-index: 1;
    color: #002857;
    background-color: #fff;
    border: 2px solid #fecfbb;
  }
  .stepper__title {
    color: #002857;
    font-size: .875rem;
    font-weight: bold;
    margin-bottom: 0;
    padding-right: 0;
    padding-top: 0;
  }
  .stepper__progress {
    display: block;
    position: absolute;
    width: 100%;
    top: 1rem;
    margin-top: 0;
    height: 2px;
    background-color: #fecfbb;
    max-width: calc(100% - 2px);
    max-height: calc(100% - 2px);
    overflow: hidden;
  }
</style>
