<template>
  <v-layout row wrap mb-5 mt-5>
    <v-flex xs12 sm12 md4 mr-5>
      <v-img :src="product.model.images[0]" height="400px" />
    </v-flex>
    <v-flex xs12 sm12 md6 ml-5>
      <div class="text-sm-center">
        <div>
          <span class="title" mb-3>{{product.model.name}}</span>
        </div>
        <!-- <p class="caption font-weight-bold">Test user</p> -->
        <v-layout class="row" mt-4>
          <v-flex md3>
            <v-rating @input="addRaiting" v-model="product.model.rating"></v-rating>
          </v-flex>
          <v-flex mt-2 offset-xs1 class="text-md-center">
            <span>{{product.model.views.length}} customer review</span>
          </v-flex>
          <v-flex class="text-md-center">
            <span>
              <v-btn class="ma-2" text icon color="blue lighten-2" @click="addLike">
                <v-icon>thumb_up</v-icon>
              </v-btn>
              {{product.model.likes.length}} likes
            </span>
          </v-flex>
        </v-layout>
        <v-layout class="row" mt-4>
          <v-flex md3 mt-2>
            <span>Price: {{product.model.price}}$</span>
          </v-flex>
          <v-flex mt-2 offset-xs1 class="text-md-center">
            <span>Quantity: {{product.model.quantity}}</span>
          </v-flex>
          <v-flex mt-2 class="text-md-center">
            <span>State: {{product.model.state}}</span>
          </v-flex>
        </v-layout>
        <v-layout mt-5>
          <v-flex col-sm-12 class="text-sm-center">
            <div>{{product.model.description}}</div>
          </v-flex>
        </v-layout>
        <v-layout mt-5 row justify-space-around>
          <v-flex md-4>
            <v-btn round color="orange" depressed @click="addToCart">
              <v-icon left>shopping_cart</v-icon>
              <span>Add to cart</span>
            </v-btn>
          </v-flex>
          <v-flex md-4>
            <v-btn round color="teal">
              <v-icon left>keyboard_backspace</v-icon>
              <span>Back</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ProductDetails',
  data: () => ({
    rating: 3
  }),
  props: ['product'],
  methods: {
    addRaiting(raitingValue) {
      this.$emit('addRaiting', raitingValue);
    },
    addLike() {
      this.$emit('addLike');
    },
    addToCart() {
      this.$emit('addToCart');
    }
  }
};
</script>