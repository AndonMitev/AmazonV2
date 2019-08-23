<template>
  <v-layout align-center row wrap justify-center>
    <v-flex md4 mb-5 v-for="data in productsInCart" :key="data._id">
      <v-card class="mx-auto" max-width="400">
        <v-img class="white--text" height="200px" :src="data.product.images[0]">
          <v-card-title class="align-end fill-height">{{data.product.name}}</v-card-title>
        </v-img>
        <v-card-text>
          <span>Price: {{data.product.price}}</span>
          <br />
          <span class="text--primary">
            <span>State: {{data.product.state}}</span>
            <br />
            <span>Likes: {{data.product.likes.length}}</span>
          </span>
        </v-card-text>
        <v-card-actions>
          <v-flex md12 xs12 sm12>
            <v-btn :to="{name: 'details', params: {id: data.product._id}}" color="primary left">
              <v-icon left>info</v-icon>Details
            </v-btn>
            <v-btn @click="removeProduct(data.product._id)" color="red right">
              <v-icon left>shopping_cart</v-icon>Remove
            </v-btn>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ProductsInCart',
  props: ['productsInCart'],
  methods: {
    removeProduct(productId) {
      this.$emit('removeProduct', productId);
    }
  }
};
</script>