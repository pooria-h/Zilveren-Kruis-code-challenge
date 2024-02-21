<template>
  <div class="BackAndForward mb-6 mt-4 d-flex justify-content-between">
    <div>
      <button
        @click="previousStep"
        v-if="currentStep !== 1"
        type="button"
        class="btn btn-outline-dark btn--no-underline">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
            fill="currentColor"
          />
        </svg>
        {{ backButtonText }}
      </button>
    </div>
    <div>
      <button type="submit" class="btn btn-cta-02 btn--no-underline">
        {{ submitButtonText }}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
            fill="currentColor"
          />
      </svg>
    </button>
    </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
// eslint-disable-next-line import/no-unresolved
import { useStepsStore } from '@/stores/StepsStore';

export default defineComponent({
  setup() {
    const { previousStep } = useStepsStore();
    const { currentStep } = storeToRefs(useStepsStore());
    const submitButtonText = computed<string>(() => {
      if (currentStep.value === 1) {
        return 'Ga verder naar verzekering';
      }
      if (currentStep.value === 2) {
        return 'Ga verder naar controle';
      }
      return 'Verstuur mijn aanvraag';
    });
    const backButtonText = computed<string>(() => {
      if (currentStep.value === 2) {
        return 'Terug naar gegevens';
      }
      if (currentStep.value === 3) {
        return 'Terug naar verzekering';
      }
      return '';
    });

    return {
      previousStep,
      currentStep,
      submitButtonText,
      backButtonText,
    };
  },
});
</script>
