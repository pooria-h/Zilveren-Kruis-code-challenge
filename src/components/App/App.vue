<template>
  <div id="app" class="main-placeholder">
    <Layout>
      <template #header>
        <HeaderComponent />
      </template>
      <template #main>
        <OnboardingForm />
      </template>
      <template #side>
        <SideBar />
      </template>
      <template #footer>
        <FooterComponent />
        <RatingBar />
      </template>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import Layout from '../Layout.vue';
import HeaderComponent from '../Partials/HeaderComponent.vue';
import RatingBar from '../Partials/RatingBar.vue';
import FooterComponent from '../Partials/FooterComponent.vue';
import OnboardingForm from '../OnboardingForm.vue';

</script>
