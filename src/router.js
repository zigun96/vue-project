import { defineAsyncComponent } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

const component = {
  template: '<component :is="comp" />',
  computed: {
    comp() {
      let { comp } = this.$route.params;
      return defineAsyncComponent(() => import(`./pages/${comp}.vue`));
    },
  },
};

const routes = [
  {
    path: '/',
    component: () => import('./components/HelloWorld.vue'),
  },
  {
    path: '/:comp',
    component,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
