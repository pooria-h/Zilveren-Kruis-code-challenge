import { defineStore } from 'pinia';
import { ref } from 'vue';
import type * as Interfaces from '@/types/FormOptions';

export const useFormStore = defineStore('FormStore', () => {
  const requestTypeOptions = ref([{
    value: 'new',
    name: 'Nieuwe werkgever met collectiviteit bij Zilveren Kruis',
  }, {
    value: '1-1-2023',
    name: 'Overstappen per 1-1-2023 naar Zilveren Kruis',
  },
  ] as Interfaces.RequestType[]);
  const requestType = ref('' as string);
  const firstName = ref('' as string);
  const infix = ref('' as string);
  const lastName = ref('' as string);
  const gender = ref('' as string);
  const genderOptions = ref([{
    value: 'man',
    name: 'Man',
  }, {
    value: 'woman',
    name: 'Vrouw',
  }] as Interfaces.Gender[]);
  const birthDate = ref(null as Date | null);
  const bsn = ref(null as number | null);
  const basicInsurancePlansOptions = ref([{
    value: 'Budget',
    name: 'Basis Budget',
  }, {
    value: 'Zeker',
    name: 'Basis Zeker',
  }, {
    value: 'Exclusief',
    name: 'Basis Exclusief',
  },
  ] as Interfaces.BasicInsurancePlans[]);
  const basicInsurancePlans = ref('' as string);
  const paymentTerm = ref('' as string);
  const paymentTermOptions = ref([{
    value: 'monthly',
    name: 'Per maand',
  }, {
    value: 'quarterly',
    name: 'Per kwartaal',
  }, {
    value: 'yearly',
    name: 'Per kwartaal',
  },
  ] as Interfaces.PaymentTerm[]);
  const decucible = ref(null as number | null);
  const decucibleOptions = ref([{
    value: 358,
    name: '€ 358,00',
  }, {
    value: 885,
    name: '€ 885,00',
  },
  ] as Interfaces.Decucible[]);
  const additionalInsurance = ref('' as string);
  const additionalInsuranceOptions = ref([{
    value: 'additional1',
    name: 'Aanvullend 1',
  }, {
    value: 'additional2',
    name: 'Aanvullend 2',
  }, {
    value: 'additional3',
    name: 'Aanvullend 3',
  },
  ] as Interfaces.AdditionalInsurance[]);
  const dentalInsurance = ref('' as string);
  const dentalInsuranceOptions = ref([{
    value: 'tand1',
    name: 'Tand 1',
  }, {
    value: 'tand2',
    name: 'Tand 2',
  }, {
    value: 'tand3',
    name: 'Tand 3',
  },
  ] as Interfaces.DentalInsurance[]);

  return {
    requestType,
    firstName,
    infix,
    lastName,
    gender,
    birthDate,
    bsn,
    basicInsurancePlans,
    paymentTerm,
    decucible,
    additionalInsurance,
    dentalInsurance,
    requestTypeOptions,
    basicInsurancePlansOptions,
    genderOptions,
    paymentTermOptions,
    decucibleOptions,
    additionalInsuranceOptions,
    dentalInsuranceOptions,
  };
});
