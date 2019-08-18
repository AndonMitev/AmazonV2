import Vue from 'vue'
import Vuex from 'vuex'

import product from './store/product';
import categories from './store/categories';
import creatingPhases from './store/product-creating-phases';
import cart from './store/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product,
    categories,
    creatingPhases,
    cart
  }
})
