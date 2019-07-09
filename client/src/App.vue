<template>
  <v-app dark>
    <v-toolbar color="deep-purple lighten-1">
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Register</v-btn>
        <v-btn flat>Login</v-btn>
        <v-btn flat>Products</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-container>
      <!-- <Register /> -->
      <Products />
    </v-container>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Register from "./components/Register";
import Products from "./components/Products";

export default {
  name: "App",
  components: {
    HelloWorld,
    Register,
    Products
  },
  data() {
    return {
      //
    };
  }
};
</script>
