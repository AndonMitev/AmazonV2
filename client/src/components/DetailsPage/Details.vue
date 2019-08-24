<template>
  <div>
    <v-layout row mt-2 justify-center>
      <v-flex xs10 mb-5>
        <v-carousel height="350" interval="3000">
          <v-carousel-item v-for="(item,i) in product.images" :key="i" :src="item"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <ProductDetails
      :product="product"
      @addRaiting="addRaiting"
      @addLike="addLike"
      @addToCart="addToCart"
    />

    <v-divider></v-divider>

    <Comments @onSubmit="onSubmit" :comments="product.comments" />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import { mapGetters, mapActions } from 'vuex';
import ProductDetails from './views/ProductDetails';
import Comments from './views/Comments';

export default {
  name: 'Details',
  data: () => ({
    productId: null
  }),
  methods: {
    ...mapActions([
      'getProductByIdAction',
      'addLikeAction',
      'addViewAction',
      'addRaitingAction',
      'addToCartAction',
      'addCommentAction'
    ]),
    addRaiting(raitingValue) {
      this.addRaitingAction({ productId: this.productId, raitingValue });
    },
    addLike() {
      this.addLikeAction(this.productId);
    },
    addView() {
      this.addViewAction(this.productId);
    },
    addToCart(quantity) {
      this.addToCartAction({ id: this.productId, quantity });
    },
    onSubmit(comment) {
      this.addCommentAction({ id: this.productId, comment });
    }
  },
  computed: {
    ...mapGetters(['product'])
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.getProductByIdAction(this.productId);
    console.log(this.product);
    this.addView();
  },
  components: {
    GChart,
    ProductDetails,
    Comments
  }
};
</script>

<style>
</style>
