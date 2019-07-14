import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import product from './store/product';
import categories from './store/categories';
import creatingPhases from './store/product-creating-phases';

export default new Vuex.Store({
  modules: {
    product,
    categories,
    creatingPhases
  }
})
