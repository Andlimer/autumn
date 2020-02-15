import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import about from './components/pages/about';
import works from './components/pages/works';
import reviews from './components/pages/reviews';
import login from './components/pages/login';

const routes = [
  {
    path: '/',
    component: about
  },
  {
    path: '/works',
    component: works
  },
  {
    path: '/reviews',
    component: reviews
  },
  {
    path: '/login',
    component: login
  }
];

export default new VueRouter({routes});

