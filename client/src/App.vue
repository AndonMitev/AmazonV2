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
import Products from './components/Product/Products';
import SideNav from './components/shared/SideNav';
import Details from './components/Product/Details';
import CategoriesPage from './components/Home/CategoriesPage';

export default {
  name: 'App',
  components: {
    Products,
    SideNav,
    Details,
    CategoriesPage
  },
  data() {
    return {
      //
    };
  }
};
</script>
