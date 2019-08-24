<template>
  <v-layout column>
    <UserData v-if="user" :userData="user" />
    <Orders v-if="user && user.orders" :userData="user" @showOrder="showOrder" />
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserData from './views/UserData';
import Orders from './views/Orders';

export default {
  name: 'Profile',
  computed: {
    ...mapGetters(['userData', 'user'])
  },
  methods: {
    ...mapActions(['getProfileAction']),
    showOrder(orderId) {
      console.log(orderId);
    }
  },
  mounted() {
    const userId = this.userData || localStorage.getItem('id');
    this.getProfileAction(userId);
  },
  components: {
    UserData,
    Orders
  }
};
</script>