<template>
  <div>
    <v-layout row mt-2 justify-center>
      <v-flex xs10 mb-5>
        <v-carousel height="350" interval="3000">
          <v-carousel-item v-for="(item,i) in product.model.images" :key="i" :src="item"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <ProductDetails :product="product" @addRaiting="addRaiting" @addLike="addLike" @addToCart="addToCart" />

    <v-divider></v-divider>
    <v-layout mt-5 row wrap>
      <!-- <v-flex>
        <h3 class="text--sm-center">Prices over time</h3>
        <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
      </v-flex>-->
    </v-layout>
    <v-divider></v-divider>
    <v-layout mt-5 row wrap>
      <v-flex>
        <h3>Comments</h3>
        <v-list two-line>
          <!-- <template v-for="(comment, index) in product.model.comments">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

            <v-list-tile v-else :key="item.title" avatar @click>
              <v-list-tile-avatar>
                <img :src="item.avatar" />
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>-->
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout mt-5 row wrap justify-end>
      <v-flex xs12>
        <v-textarea name="input-7-1" label="Message..."></v-textarea>
      </v-flex>
      <v-flex xs12>
        <div>
          <v-btn reverse color="primary">Send</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts';
import { mapState, mapActions } from 'vuex';
import ProductDetails from './views/ProductDetails';

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
      'addToCartAction'
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
    addToCart() {
      this.addToCartAction(this.productId);
    }
  },
  computed: {
    ...mapState(['product'])
  },
  mounted() {
    this.productId = this.$route.params.id;
    this.getProductByIdAction(this.productId);
    this.addView();
  },
  components: {
    GChart,
    ProductDetails
  }
};
</script>

<style>
</style>
