<template>
  <div id="app" class="main-placeholder">
    <Layout>
      <template #header>
        <HeaderComponent />
      </template>
      <template #main>
        <router-view />
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
import Layout from '../Layout/Layout.vue';
import HeaderComponent from '../Layout/Partials/HeaderComponent.vue';
import SideBar from '../Layout/Partials/SideBar.vue';
import RatingBar from '../Layout/Partials/RatingBar.vue';
import FooterComponent from '../Layout/Partials/FooterComponent.vue';
</script>
