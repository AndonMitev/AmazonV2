<template>
  <v-layout mt-5 row>
    <v-flex mr-5 v-for="order in userData.orders" :key="order" xs12 class="text-sm-center">
      <v-card @click="showOrder(order)">
        <v-img
          src="https://thumbs.dreamstime.com/z/order-red-stamp-text-white-44561786.jpg"
          aspect-ratio="2"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{order}}</h3>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Orders',
  props: ['userData'],
  methods: {
    showOrder(orderId) {
      this.$emit('showOrder', orderId);
    }
  }
};
</script>