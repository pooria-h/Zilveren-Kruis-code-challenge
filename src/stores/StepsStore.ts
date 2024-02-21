import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import type { Step } from '@/types/Step';

export const useStepsStore = defineStore('StepsStore', () => {
  const router = useRouter();
  const steps = ref([{
    value: 1,
    name: 'Uw gegevens',
  }, {
    value: 2,
    name: 'Uw verzekering',
  }, {
    value: 3,
    name: 'Controle',
  }] as Step[]);
  const currentStep = ref(0);

  function setStep(step: number) {
    const minStep = 1;
    const maxStep = 3;
    if (step < minStep || step > maxStep || step === currentStep.value) {
      return;
    }
    currentStep.value = step;
    pushStepToRouter(step);
  }

  function nextStep() {
    setStep(currentStep.value + 1);
  }
  function previousStep() {
    setStep(currentStep.value - 1);
  }

  function pushStepToRouter(step: number) {
    router.push(`/step${step}`);
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
