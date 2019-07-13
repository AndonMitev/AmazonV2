<template>
  <v-app>
    <SideNav />
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <Register />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Register from "./components/Register";
import Products from "./components/Products";
import SideNav from "./components/shared/SideNav";
import Details from './components/Details';

export default {
  name: "App",
  components: {
    HelloWorld,
    Register,
    Products,
    SideNav,
    Details
  },
  data() {
    return {
      //
    };
  }
};
</script>
