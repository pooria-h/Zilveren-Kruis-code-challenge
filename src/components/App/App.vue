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
import Layout from '@/components/Layout/Layout.vue';
import HeaderComponent from '@/components/Layout/Partials/HeaderComponent.vue';
import SideBar from '@/components/Layout/Partials/SideBar.vue';
import RatingBar from '@/components/Layout/Partials/RatingBar.vue';
import FooterComponent from '@/components/Layout/Partials/FooterComponent.vue';
</script>
