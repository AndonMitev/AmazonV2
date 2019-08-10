<template>
  <v-flex md3 mr-5 ml-5 mb-5 v-if="product">
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text" height="200px" :src="product.images[0]">
        <v-card-title class="align-end fill-height">{{product.name}}</v-card-title>
      </v-img>
      <v-card-text>
        <span>Price: {{product.price}}</span>
        <br />
        <span class="text--primary">
          <span>State: {{product.state}}</span>
          <br />
          <span>Likes: {{product.likes.length}}</span>
        </span>
      </v-card-text>

      <v-card-actions>
        <v-flex xs12 sm12 md 6>
          <v-btn :to="{name: 'details', params: {id: product._id}}" color="primary left"><v-icon left>info</v-icon> Details</v-btn>
          <v-btn @click="addToCart(product._id)" color="orange right"><v-icon left>shopping_cart</v-icon> Add to cart</v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import PageTitle from '../shared/PageTitle';


export default {
  name: 'Product',
  props: ['product'],
  methods: {
    addToCart(productId) {
      this.$emit('addToCart', productId);
    }
  },
  components: { PageTitle }
};
</script>

<style>
</style>
