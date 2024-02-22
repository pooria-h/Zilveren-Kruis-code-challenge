<template>
  <div class="InitialData">
    <h2>Uw Gegevens</h2>
    <FormGroup :name="'Reden van aanmelding'">
      <FormInput>
        <label id="aanmeldreden-label" class="input__title">
          Wat is de reden van uw aanvraag?
        </label>
        <div class="input__group">
          <select v-model="requestType" class="form-control">
            <option
              v-for="option in requestTypeOptions"
              :value="option.value"
              :key="option.value">
              {{ option.name }}
            </option>
          </select>
        </div>
      </FormInput>
    </FormGroup>

    <FormGroup :name="'Persoonlijke gegevens'">
      <FormInput>
        <div class="input__group">
          <label class="input__title">Naam</label>
          <input
            v-model="firstName"
            class="input__field form-control"
            type="text"
          />
        </div>
      </FormInput>
      <FormInput>
        <div class="input__group">
          <label class="input__title">
            Tussenvoegsels
          </label>
          <input
            v-model="infix"
            class="input__field form-control"
            type="text"
          />
        </div>
      </FormInput>
      <FormInput>
        <div class="input__group">
          <label class="input__title">Achternaam</label>
          <input
            v-model="lastName"
            class="input__field form-control"
            type="text"
          />
        </div>
      </FormInput>
      <FormInput>
        <div class="input__group">
          <label class="input__title">Geslacht</label>
          <div class="form-row">
            <div
              v-for="genderOption in genderOptions"
              :key="genderOption.value"
              class="radio custom-radio radio__option">
              <input
                v-model="gender"
                :value="genderOption.value"
                :id="genderOption.value"
                class="radio__input custom-control-input"
                type="radio"
                name="geslacht"
              />
              <label
                class="radio__label custom-control-label"
                :for="genderOption.value">
                {{ genderOption.name }}
              </label>
            </div>
          </div>
        </div>
      </FormInput>
      <FormInput :cssClasses="'flex-column'">
        <div>
          <label class="input__title">
            Geboortedatum
          </label>
        </div>
        <Datepicker
          v-model="birthDate"
          :model-type="'dd-MM-yyyy'"
          :enable-time-picker="false"
          no-today />
      </FormInput>
      <FormInput>
        <div class="input__group">
          <label class="input__title">
            Burgerservicenummer
          </label>
          <input
            v-model="bsn"
            class="input__field form-control is-invalid"
            type="number"
          />
        </div>
        <div
          class="input__feedback invalid-feedback mt-1"
          aria-live="polite">
          <span>
            Helaas is het ingevoerde burgerservicenummer niet geldig. Probeer het opnieuw.
          </span>
        </div>
      </FormInput>
    </FormGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { storeToRefs } from 'pinia';
import { useFormStore } from '@/stores/FormStore';
import FormGroup from '@/components/Layout/Partials/FormGroup.vue';
import FormInput from '@/components/Layout/Partials/FormInput.vue';

export default defineComponent({
  components: {
    FormGroup,
    FormInput,
    Datepicker,
  },
  setup() {
    const {
      requestType,
      firstName,
      infix,
      lastName,
      gender,
      birthDate,
      bsn,
    } = storeToRefs(useFormStore());
    const {
      requestTypeOptions,
      genderOptions,
    } = useFormStore();

    return {
      requestType,
      firstName,
      infix,
      lastName,
      gender,
      birthDate,
      bsn,
      genderOptions,
      requestTypeOptions,
    };
  },
});
</script>
