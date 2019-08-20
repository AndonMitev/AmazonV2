<template>
  <v-container fluid>
    <PageTitle :title="pageTitle" />
    <ProductsInCart
      v-if="productsInCart && productsInCart.length"
      :productsInCart="productsInCart"
      @removeProduct="removeProduct"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PageTitle from '../shared/PageTitle';
import ProductsInCart from './views/ProductsInCart';

export default {
  name: 'Cart',
  data: () => ({
    pageTitle: 'My Cart'
  }),
  methods: {
    ...mapActions(['getCartAction', 'removeProductFromCartAction']),
    removeProduct(productId) {
      this.removeProductFromCartAction(productId);
    }
  },
  computed: {
    ...mapGetters(['productsInCart'])
  },
  mounted() {
    this.getCartAction();
  },
  components: {
    PageTitle,
    ProductsInCart
  }
};
</script>