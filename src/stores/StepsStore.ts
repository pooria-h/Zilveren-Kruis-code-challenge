import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import type { Step } from '@/types/Step';

export const useStepsStore = defineStore('StepsStore', () => {
  const router = useRouter();
  const steps = [{
    value: 1,
    name: 'Uw gegevens',
  }, {
    value: 2,
    name: 'Uw verzekering',
  }, {
    value: 3,
    name: 'Controle',
  }] as Step[];
  const currentStep = computed(() => {
    if (router.currentRoute.value.name === 'OnboardingForm') {
      return Number(router.currentRoute.value.params.step);
    }
    return 1;
  });

  function setStep(step: number) {
    pushStepToRouter(step);
  }

  function nextStep() {
    pushStepToRouter(currentStep.value + 1);
  }
  function previousStep() {
    pushStepToRouter(currentStep.value - 1);
  }

  function pushStepToRouter(step: number) {
    router.push(`/step/${step}`);
  }

  return {
    steps,
    currentStep,
    setStep,
    nextStep,
    previousStep,
    pushStepToRouter,
  };
});
