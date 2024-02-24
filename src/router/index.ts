import { createRouter, createWebHistory } from 'vue-router';
import OnboardingFormVue from '@/components/OnboardingForm/OnboardingForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'OnboardingForm',
      path: '/step/:step',
      component: OnboardingFormVue,
    },
    {
      path: '/',
      redirect: '/step/1',
    },
  ],
});

export default router;
