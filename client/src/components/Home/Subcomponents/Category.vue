<template>
  <v-layout row wrap justify-start>
    <v-flex v-for="category in categories.categories" :key="category._id">
      <div>
        <h3>{{category.name}} - {{category.products.length}} Products</h3>
        <v-layout row wrap justify-start mt-3>
          <Product
            @viewDetails="viewDetails"
            @addToCart="addToCart"
            v-for="product in category.products"
            :key="product.id"
            :product="product"
          />
        </v-layout>
      </div>
      <v-divider></v-divider>
    </v-flex>
  </v-layout>
</template>

<script>
import Product from '../../Product/Product';

export default {
  name: 'Category',
  props: ['categories'],
  methods: {
    viewDetails(id) {
      console.log(id);
    },
    addToCart(id) {
      console.log(id);
    }
  },
  components: { Product }
};
</script>

<style>
</style>
