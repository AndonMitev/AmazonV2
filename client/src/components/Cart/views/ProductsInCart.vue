<template>
  <v-row>
    <v-col cols="12">
      <v-card v-for="product in productsInCart" :key="product._id" class="mx-auto" max-width="400">
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
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ProductsInCart',
  props: ['productsInCart'],
  mounted() {
    console.log(this.productsInCart);
  }
};
</script>