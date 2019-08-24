<template>
  <v-flex md4 mb-5>
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
        <v-flex md12 xs12 sm12>
          <v-btn block :to="{name: 'details', params: {id: product._id}}" color="primary left">
            <v-icon left>info</v-icon>Details
          </v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import PageTitle from '../../shared/PageTitle';

export default {
  name: 'Product',
  props: ['product'],
  components: { PageTitle }
};
</script>

<style>
</style>
