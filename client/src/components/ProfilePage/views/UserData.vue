<template>
  <v-layout row wrap mb-5 mt-5>
    <v-flex xs12 sm12 md4 mr-5>
      <v-img :src="'https://afribary.com/authors/anonymous-user/photo'" height="400px" />
    </v-flex>
    <v-flex xs12 sm12 md6 ml-5>
      <div class="text-sm-center">
        <div>
          <span class="title" mb-3>Hello, {{userData.firstName}} {{userData.lastName}}</span>
        </div>
        <v-layout class="row" mt-4>
          <v-flex mt-2 offset-xs1 class="text-md-center">
            <span></span>
          </v-flex>
        </v-layout>
        <v-layout class="row" mt-4 mb-5>
          <v-flex md3 mt-2>
            <span>Email: {{userData.email}}</span>
          </v-flex>
          <v-flex mt-2 offset-xs1 class="text-md-center">
            <span>Orders: {{userData.orders.length}}</span>
          </v-flex>
          <v-flex mt-2 class="text-md-center">
            <span>Address: {{userData.address}}</span>
          </v-flex>
        </v-layout>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'UserData',
  props: ['userData'],
  mounted() {
    console.log(this.userData);
  }
};
</script>