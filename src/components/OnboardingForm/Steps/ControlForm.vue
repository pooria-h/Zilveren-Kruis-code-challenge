<template>
  <div class="ControlForm">
    <h2>Controleren</h2>

    <div class="mt-4">
      <h4>Wat is de reden van uw aanvraag?</h4>
      <p class="mb-6">
        {{ findElemByValueProp(requestTypeOptions, requestType)?.name || EMPTY_INPUT }}
      </p>
    </div>

    <div class="mt-4">
      <h4>Naam</h4>
      <p class="mb-6">{{ firstName || EMPTY_INPUT }}</p>
    </div>

    <div class="mt-4">
      <h3>Tussenvoegsels</h3>
      <p class="mb-6">{{ infix || EMPTY_INPUT }}</p>
    </div>

    <div class="mt-4">
      <h3>Achternaam</h3>
      <p class="mb-6">{{ lastName || EMPTY_INPUT }}</p>
    </div>

    <div class="mt-4">
      <h3>Geslacht</h3>
      <p class="mb-6">
        {{ findElemByValueProp(genderOptions, gender)?.name || EMPTY_INPUT }}
      </p>
    </div>

    <div class="mt-4">
      <h3>Geboortedatum</h3>
      <p class="mb-6">{{ birthDate || EMPTY_INPUT }}</p>
    </div>

    <div class="mt-4">
      <h3>Burgerservicenummer</h3>
      <p class="mb-6">{{ bsn || EMPTY_INPUT }}</p>
    </div>

    <div class="mt-4">
      <h3>Basisverzekering</h3>
      <p class="mb-6">
        {{ findElemByValueProp(basicInsurancePlansOptions, basicInsurancePlans)?.name || EMPTY_INPUT }}
      </p>
    </div>

    <div class="mt-4">
      <h3>Kies je betaaltermijn</h3>
      <p class="mb-6">
        {{ findElemByValueProp(paymentTermOptions, paymentTerm)?.name || EMPTY_INPUT }}
      </p>
    </div>

    <div class="mt-4">
      <h3>Kies de hoogste van het eigen risico</h3>
      <p class="mb-6">
        {{ findElemByValueProp(deductibleOptions, deductible)?.name || EMPTY_INPUT }}
      </p>
    </div>

    <div class="mt-4">
      <h3>Kies uw aanvullende verzekering</h3>
      <p class="mb-6">
        {{ findElemByValueProp(additionalInsuranceOptions, additionalInsurance)?.name || EMPTY_INPUT }}
      </p>
    </div>

    <div class="mt-4">
      <h3>Kies uw tandartsverzekering</h3>
      <p class="mb-6">
        {{ findElemByValueProp(dentalInsuranceOptions, dentalInsurance)?.name || EMPTY_INPUT }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFormStore } from '@/stores/FormStore';
import findElemByValueProp from '@/services/findElemByValueProp';

const EMPTY_INPUT = '---';

export default defineComponent({
  setup() {
    const {
      requestType,
      requestTypeOptions,
      firstName,
      infix,
      lastName,
      gender,
      genderOptions,
      birthDate,
      bsn,
      basicInsurancePlans,
      basicInsurancePlansOptions,
      paymentTerm,
      paymentTermOptions,
      deductible,
      deductibleOptions,
      additionalInsurance,
      additionalInsuranceOptions,
      dentalInsurance,
      dentalInsuranceOptions,
    } = useFormStore();

    return {
      requestType,
      requestTypeOptions,
      firstName,
      infix,
      lastName,
      gender,
      genderOptions,
      birthDate,
      bsn,
      basicInsurancePlans,
      basicInsurancePlansOptions,
      paymentTerm,
      paymentTermOptions,
      deductible,
      deductibleOptions,
      additionalInsurance,
      additionalInsuranceOptions,
      dentalInsurance,
      dentalInsuranceOptions,
      findElemByValueProp,
      EMPTY_INPUT,
    };
  },
});
</script>
