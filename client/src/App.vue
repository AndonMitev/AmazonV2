<template>
  <v-app>
    <SideNav />
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <Products />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Register from "./components/Register";
import Products from "./components/Products";
import SideNav from "./components/shared/SideNav";

export default {
  name: "App",
  components: {
    HelloWorld,
    Register,
    Products,
    SideNav
  },
  data() {
    return {
      //
    };
  }
};
</script>
