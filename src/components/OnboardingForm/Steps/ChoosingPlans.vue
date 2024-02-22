<template>
  <div class="ChoosingPlans">
    <h2>Verzekering</h2>
    <FormGroup :name="'Basisverzekering'">
      <FormInput>
        <p>
          In Nederland is de basisverzekering verplicht.
          Iedereen wordt voor de basisverzekering
          geaccepteerd. De overheid bepaalt welke zorg hierin
          zit en dit is dus bij elke verzekeraar hetzelfde.
        </p>
        <div class="input__group">
          <label class="input__title">
              Kies uw basisverzekering
          </label>
          <div class="form-row">
            <div
              v-for="(option, index) in basicInsurancePlansOptions"
              :key="option.value"
              :class="{'radio__tile--choice': basicInsurancePlans === option.value}"
              class="radio__tile">
            <div
              v-if="index === 1"
              class="badge radio__tile-badge">
              Meest gekozen
            </div>
            <div class="radio custom-radio radio__option">
              <input
                v-model="basicInsurancePlans"
                :value="option.value"
                type="radio"
                name="radio-insurance"
                :id="`id-${option.value}`"
                class="radio__input custom-control-input"
              />
              <label
                :for="`id-${option.value}`"
                class="radio__label custom-control-label"
              >
                <p class="radio__description">
                  {{ option.name }}
                </p>
                <p class="radio__price">
                  {{ option.price }}
                </p>
              </label>
            </div>
          </div>
        </div>
        </div>
      </FormInput>
    </FormGroup>
    <FormGroup>
      <FormInput>
        <div class="input__group">
          <label class="input__title">
            Kies je betaaltermijn
          </label>
          <select v-model="paymentTerm" class="form-control">
            <option
              v-for="option in paymentTermOptions"
              :value="option.value"
              :key="option.value"
            >
            {{ option.name }}
            </option>
          </select>
        </div>
      </FormInput>
    </FormGroup>
    <FormGroup :name="'Eigen risico'">
      <FormInput>
        <div class="input__group">
          <label class="input__title">
              Kies de hoogste van het eigen risico
          </label>
          <select v-model="decucible" class="form-control">
            <option
              v-for="option in decucibleOptions"
              :key="option.value"
              :value="option.value"
            >
            {{ option.name }}
            </option>
          </select>
        </div>
      </FormInput>
    </FormGroup>
    <FormGroup :name="'Aanvullende verzekering'">
      <FormInput>
        <p>
          Onze aanvullende verzekeringen kennen ruim 100
          verschillende vergoedingen. De hoogte van de
          vergoeding verschilt per pakket.hoogte van de
          vergoeding verschilt per pakket
        </p>
        <div class="input__group">
          <label class="input__title">
            Kies uw aanvullende verzekering
          </label>
          <select v-model="additionalInsurance" class="form-control">
            <option
              v-for="option in additionalInsuranceOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </FormInput>
    </FormGroup>
    <FormGroup>
      <FormInput>
        <div class="input__group">
          <label class="input__title">
            Kies uw tandartsverzekering
          </label>
          <select v-model="dentalInsurance" class="form-control">
            <option
              v-for="option in dentalInsuranceOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </FormInput>
    </FormGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useFormStore } from '@/stores/FormStore';
import FormGroup from '@/components/Layout/Partials/FormGroup.vue';
import FormInput from '@/components/Layout/Partials/FormInput.vue';

export default defineComponent({
  components: {
    FormGroup,
    FormInput,
  },
  setup() {
    const {
      basicInsurancePlans,
      paymentTerm,
      decucible,
      additionalInsurance,
      dentalInsurance,
    } = storeToRefs(useFormStore());
    const {
      basicInsurancePlansOptions,
      paymentTermOptions,
      decucibleOptions,
      additionalInsuranceOptions,
      dentalInsuranceOptions,
    } = useFormStore();

    return {
      basicInsurancePlansOptions,
      basicInsurancePlans,
      paymentTerm,
      paymentTermOptions,
      decucible,
      decucibleOptions,
      additionalInsurance,
      additionalInsuranceOptions,
      dentalInsurance,
      dentalInsuranceOptions,
    };
  },
});
</script>
