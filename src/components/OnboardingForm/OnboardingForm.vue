<template>
  <div class="OnboardingForm">
    <form @submit.prevent="submit">
      <InitialData v-if="currentStep === 1" />
      <ChoosingPlans v-if="currentStep === 2" />
      <ControlForm v-if="currentStep === 3" />
      <ControlStep :step="currentStep" />
    </form>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import InitialData from './Steps/InitialData.vue';
import ChoosingPlans from './Steps/ChoosingPlans.vue';
import ControlForm from './Steps/ControlForm.vue';
import ControlStep from './ControlStep.vue';

export default {
  components: {
    InitialData,
    ChoosingPlans,
    ControlForm,
    ControlStep,
  },
  setup() {
    const router = useRouter();
    const currentStep = ref(1);

    function submit() {
      if (currentStep.value === 3) {
        console.log('API call to submit the form');
        return;
      }
      setStep(currentStep.value + 1);
    }

    function setStep(step: number) {
      const minStep = 1;
      const maxStep = 3;
      if (step < minStep || step > maxStep) {
        return;
      }

      currentStep.value = step;
      pushStepToRouter(step);
    }

    function pushStepToRouter(step: number) {
      router.push(`/step${step}`);
    }

    onBeforeMount(() => {
      if (currentStep.value === 1) {
        pushStepToRouter(1);
      }
    });

    return {
      currentStep,
      submit,
    };
  },
};
</script>
