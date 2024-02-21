import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/OnboardingForm/OnboardingForm.vue'),
    },
    {
      path: '/step1',
      component: () => import('../components/OnboardingForm/OnboardingForm.vue'),
    },
    {
      path: '/step2',
      component: () => import('../components/OnboardingForm/OnboardingForm.vue'),
    },
    {
      path: '/step3',
      component: () => import('../components/OnboardingForm/OnboardingForm.vue'),
    },
  ],
});

export default router;
