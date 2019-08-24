<template>
  <v-container fluid>
    <PageTitle :title="pageTitle" />
    <ProductsInCart
      v-if="productsInCart && productsInCart.length"
      :productsInCart="productsInCart"
      @removeProduct="removeProduct"
      @finishOrder="finishOrder"
    />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PageTitle from '../shared/PageTitle';
import ProductsInCart from './views/ProductsInCart';
import Product from '../Home/views/Product';

export default {
  name: 'Cart',
  data: () => ({
    pageTitle: 'My Cart'
  }),
  methods: {
    ...mapActions([
      'getCartAction',
      'removeProductFromCartAction',
      'finishOrderAction'
    ]),
    removeProduct(productId) {
      this.removeProductFromCartAction(productId);
    },
    finishOrder() {
      console.log(this.productsInCart);
      this.finishOrderAction(this.productsInCart);
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
    ProductsInCart,
    Product
  }
};
</script>