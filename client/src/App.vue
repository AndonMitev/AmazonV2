<template>
  <v-app>
    <SideNav />
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Product from './components/Product/Product';
import SideNav from './components/shared/SideNav';
import CategoriesPage from './components/Home/CategoriesPage';

export default {
  name: 'App',
  components: {
    Product,
    SideNav,
    CategoriesPage
  },
  data() {
    return {
      //
    };
  }
};
</script>
