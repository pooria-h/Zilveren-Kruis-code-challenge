<template>
  <div class="OnboardingForm">
    <form @submit.prevent="submit">
      <h1 class="mt-5">Aanmelden</h1>
      <Stepper :steps="steps" />
      <InitialData v-if="currentStep === 1" />
      <ChoosingPlans v-if="currentStep === 2" />
      <ControlForm v-if="currentStep === 3" />
      <SubmitButton :step="currentStep" />
    </form>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeMount, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import type { Step } from '@/types/Step';
import InitialData from './Steps/InitialData.vue';
import ChoosingPlans from './Steps/ChoosingPlans.vue';
import ControlForm from './Steps/ControlForm.vue';
import SubmitButton from './SubmitButton.vue';
import Stepper from './Stepper.vue';

export default defineComponent({
  components: {
    InitialData,
    ChoosingPlans,
    ControlForm,
    SubmitButton,
    Stepper,
  },
  setup() {
    const router = useRouter();
    const steps: Step[] = [{
      value: 1,
      name: 'Uw gegevens',
    }, {
      value: 2,
      name: 'Uw verzekering',
    }, {
      value: 3,
      name: 'Controle',
    }];
    const currentStep = ref(steps[0].value);

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
      steps,
      submit,
    };
  },
});
</script>
