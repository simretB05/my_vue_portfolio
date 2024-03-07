import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from './store';
import vuetify from './plugins/vuetify';
import ScrollAnimation from '@/components/utils/ScrollAnimation'

Vue.directive( 'scrollanimation', ScrollAnimation )
Vue.config.productionTip = false;

const options = {
  position: "top-right",
  timeout: 3000,
  transition: "fade",
  pauseOnHover: true,
  closeOnClick: false,
  containerClassName: "my-toast-container",
  bodyClassName: "my-toast-body",
};
Vue.use( Toast, options, );
new Vue( {
  router,
  store,
  vuetify,
  render: h => h( App )
} ).$mount( '#app' );