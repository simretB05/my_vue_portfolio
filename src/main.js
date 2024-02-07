import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/dist/vuetify.min.css';
import vuetify from './plugins/vuetify'; // Assuming you already have vuetify configured

Vue.config.productionTip = false;

new Vue( {
  router,
  vuetify,
  render: h => h( App ),
} ).$mount( '#app' );




