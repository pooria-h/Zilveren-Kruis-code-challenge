<template>
  <div class="Stepper mb-5">
    <ol class="stepper__steps">
      <li
        v-for="step in steps"
        :key="step.value"
        :class="{
          'stepper__step--current': step.value === currentStep,
          'stepper__step--completed': step.value < currentStep,
        }"
        class="stepper__step">
        <a
          @click.prevent="setStep(step.value)"
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
import { storeToRefs } from 'pinia';
import { useStepsStore } from '@/stores/StepsStore';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const { setStep } = useStepsStore();
    const { steps, currentStep } = storeToRefs(useStepsStore());

    return {
      steps,
      setStep,
      currentStep,
    };
  },
});
</script>

<style scoped>
  .Stepper {
    position: relative;
  }
  .stepper__step {
    flex: 1;
  }
  .stepper__content {
    text-decoration: none;
  }
  .stepper__title {
    font-weight: bold;
  }
  .stepper__progress {
    background-color: #fecfbb;
  }
</style>
