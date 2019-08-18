<template>
  <div>
    <PageTitle :title="pageTitle" />
    <ProductsInCart :productsInCart="productsInCart" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PageTitle from '../shared/PageTitle';
import ProductsInCart from './views/ProductsInCart';

export default {
  name: 'Cart',
  data: () => ({
    pageTitle: 'My Cart'
  }),
  methods: {
    ...mapActions(['getCartAction'])
  },
  computed: {
    ...mapState(['productsInCart'])
  },
  mounted() {
    this.getCartAction();
    console.log(this.productsInCart);
  },
  components: {
    PageTitle,
    ProductsInCart
  }
};
</script>