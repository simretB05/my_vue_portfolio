// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
// import AboutPage from '@/views/AboutPage.vue';
// import ContactPage from '@/views/ContactPage.vue';
// import ProjectsPage from '@/views/ProjectsPage.vue';
import UserHomePage from '@/views/UserHomePage.vue';

Vue.use( VueRouter );

const routes = [
  {
    path: '/',
    name: 'home',
    component: UserHomePage,
  },
  {
    path: '/about',
    name: 'about',
    // component: AboutPage,
  },
  {
    path: '/contact',
    name: 'contact',
    // component: ContactPage,
  },
  {
    path: '/projects',
    name: 'projects',
    // component: ProjectsPage,
  },
];

const router = new VueRouter( {
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
} );

export default router;
