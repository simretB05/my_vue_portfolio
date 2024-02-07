// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
// import AboutPage from '@/views/AboutPage.vue';
// import ContactPage from '@/views/ContactPage.vue';
// import ProjectsPage from '@/views/ProjectsPage.vue';
import HomePage from '@/views/HomePage.vue';

Vue.use( VueRouter );

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },

];

const router = new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
} );

export default router;
