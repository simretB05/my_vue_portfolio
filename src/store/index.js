import Vue from 'vue';
import Vuex from 'vuex';

import moduleForLoadingPdf from '@/store/modules/moduleForLoadingPdf';

Vue.use( Vuex );

export default new Vuex.Store( {
  modules: {

    moduleForLoadingPdf

  }
} );