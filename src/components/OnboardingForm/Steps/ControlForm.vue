<template>
  <div class="ControlForm">
    <h2>Controleren</h2>

    <div class="mt-4">
      <h4>Wat is de reden van uw aanvraag?</h4>
      <p class="mb-6">{{ generateVisualInput(requestType) }}</p>
    </div>

    <div class="mt-4">
      <h4>Naam</h4>
      <p class="mb-6">{{ generateVisualInput(firstName) }}</p>
    </div>

    <div class="mt-4">
      <h3>Tussenvoegsels</h3>
      <p class="mb-6">{{ generateVisualInput(infix) }}</p>
    </div>

    <div class="mt-4">
      <h3>Achternaam</h3>
      <p class="mb-6">{{ generateVisualInput(lastName) }}</p>
    </div>

    <div class="mt-4">
      <h3>Geslacht</h3>
      <p class="mb-6">{{ generateVisualInput(gender) }}</p>
    </div>

    <div class="mt-4">
      <h3>Geboortedatum</h3>
      <p class="mb-6">{{ generateVisualInput(birthDate) }}</p>
    </div>

    <div class="mt-4">
      <h3>Burgerservicenummer</h3>
      <p class="mb-6">{{ generateVisualInput(bsn) }}</p>
    </div>

    <div class="mt-4">
      <h3>Basisverzekering</h3>
      <p class="mb-6">{{ generateVisualInput(basicInsurancePlans) }}</p>
    </div>

    <div class="mt-4">
      <h3>Kies je betaaltermijn</h3>
      <p class="mb-6">{{ generateVisualInput(paymentTerm) }}</p>
    </div>

    <div class="mt-4">
      <h3>Kies de hoogste van het eigen risico</h3>
      <p class="mb-6">{{ generateVisualInput(decucible) }}</p>
    </div>

    <div class="mt-4">
      <h3>Kies uw aanvullende verzekering</h3>
      <p class="mb-6">{{ generateVisualInput(additionalInsurance) }}</p>
    </div>

    <div class="mt-4">
      <h3>Kies uw tandartsverzekering</h3>
      <p class="mb-6">{{ generateVisualInput(dentalInsurance) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFormStore } from '@/stores/FormStore';

export default defineComponent({
  setup() {
    const {
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
    } = useFormStore();

    function generateVisualInput(input: string | number | Date | null) {
      if (input === null) {
        return '-----';
      }
      if (typeof input === 'string' && input.length === 0) {
        return '-----';
      }
      if (typeof input === 'number' && input === 0) {
        return '-----';
      }
      if (input instanceof Date) {
        return input.toLocaleDateString();
      }
      return input;
    }

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
      generateVisualInput,
    };
  },
});
</script>
