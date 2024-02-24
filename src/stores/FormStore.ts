import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type * as Interfaces from '@/types/FormOptions';
import type { FormError } from '@/types/FormError';

export const useFormStore = defineStore('FormStore', () => {
  const Errors = ref([] as FormError[]);
  const requestTypeOptions = [{
    value: 'new',
    name: 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis',
  }, {
    value: '1-1-2023',
    name: 'Overstappen per 1-1-2023 naar Zilveren Kruis',
  },
  ] as Interfaces.RequestType[];
  const requestType = ref('new' as string);
  const firstName = ref('' as string);
  const infix = ref('' as string);
  const lastName = ref('' as string);
  const gender = ref('' as string);
  const genderOptions = [{
    value: 'man',
    name: 'Man',
  }, {
    value: 'woman',
    name: 'Vrouw',
  }] as Interfaces.Gender[];
  const birthDate = ref(null as Date | null);
  const bsn = ref(null as number | null);
  const basicInsurancePlansOptions = [{
    value: 'Budget',
    name: 'Basis Budget',
    price: '€ 1.393,26 per jaar',
  }, {
    value: 'Zeker',
    name: 'Basis Zeker',
    price: '€ 1.483,54 per jaar',
  }, {
    value: 'Exclusief',
    name: 'Basis Exclusief',
    price: '€ 1.624,62 per jaar',
  },
  ] as Interfaces.BasicInsurancePlans[];
  const basicInsurancePlans = ref('Zeker' as string);
  const paymentTerm = ref('yearly' as string);
  const paymentTermOptions = [{
    value: 'monthly',
    name: 'Per maand',
  }, {
    value: 'quarterly',
    name: 'Per kwartaal',
  }, {
    value: 'yearly',
    name: 'Per jaar',
  },
  ] as Interfaces.PaymentTerm[];
  const deductible = ref(null as number | null);
  const deductibleOptions = [{
    value: 358,
    name: '€ 358,00',
  }, {
    value: 885,
    name: '€ 885,00',
  },
  ] as Interfaces.Deductible[];
  const additionalInsurance = ref('additional1' as string);
  const additionalInsuranceOptions = [{
    value: 'additional1',
    name: 'Aanvullend 1',
  }, {
    value: 'additional2',
    name: 'Aanvullend 2',
  }, {
    value: 'additional3',
    name: 'Aanvullend 3',
  },
  ] as Interfaces.AdditionalInsurance[];
  const dentalInsurance = ref('tand1' as string);
  const dentalInsuranceOptions = [{
    value: 'tand1',
    name: 'Tand 1',
  }, {
    value: 'tand2',
    name: 'Tand 2',
  }, {
    value: 'tand3',
    name: 'Tand 3',
  },
  ] as Interfaces.DentalInsurance[];
  const isDeductibleVisible = computed(() => basicInsurancePlans.value === 'Budget');

  // TODO: Will be refactored and Vee-Validate will be used
  function validateForm() {
    if (Errors.value.length > 0) {
      throw new Error('Form is not valid');
    }
  }

  function setDeductibleBasedOnChoosenPlan(plan: string) {
    if (plan !== 'Budget') {
      deductible.value = null;
    }
    else {
      deductible.value = 358;
    }
  }

  return {
    validateForm,
    setDeductibleBasedOnChoosenPlan,
    isDeductibleVisible,
    Errors,
    requestType,
    firstName,
    infix,
    lastName,
    gender,
    birthDate,
    bsn,
    basicInsurancePlans,
    paymentTerm,
    deductible,
    additionalInsurance,
    dentalInsurance,
    requestTypeOptions,
    basicInsurancePlansOptions,
    genderOptions,
    paymentTermOptions,
    deductibleOptions,
    additionalInsuranceOptions,
    dentalInsuranceOptions,
  };
});
