<template>
  <div class="OnboardingForm">
    <form @submit.prevent="submit">
      <h1 class="mt-5">Aanmelden</h1>
      <Stepper />
      <InitialData v-if="currentStep === 1" />
      <ChoosingPlans v-if="currentStep === 2" />
      <ControlForm v-if="currentStep === 3" />
      <BackAndForward />
    </form>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useStepsStore } from '@/stores/StepsStore';
import { useFormStore } from '@/stores/FormStore';
import InitialData from './Steps/InitialData.vue';
import ChoosingPlans from './Steps/ChoosingPlans.vue';
import ControlForm from './Steps/ControlForm.vue';
import BackAndForward from './BackAndForward.vue';
import Stepper from './Stepper.vue';

export default defineComponent({
  components: {
    InitialData,
    ChoosingPlans,
    ControlForm,
    BackAndForward,
    Stepper,
  },
  setup() {
    const {
      nextStep,
      setStep,
    } = useStepsStore();
    const {
      steps,
      currentStep,
    } = storeToRefs(useStepsStore());
    const { validateForm } = useFormStore();

    function submit() {
      if (currentStep.value === 3) {
        validateForm();
        console.log('API call to submit the form');
        return;
      }
      nextStep();
    }

    onBeforeMount(() => {
      if (currentStep.value === 0) {
        setStep(1);
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
