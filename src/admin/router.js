import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import("./components/pages/about")
  },
  {
    path: '/works',
    component: () => import("./components/pages/works")
  },
  {
    path: '/reviews',
    component: () => import("./components/pages/reviews")
  },
  {
    path: '/login',
    component: () => import("./components/pages/login")
  }
];

export default new VueRouter({routes});

