<template>
  <v-app>
    <SideNav />
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container v-if="isLoading === true">
        <h1>Loading....</h1>
      </v-container>
      <v-container v-else fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import SideNav from './components/shared/SideNav';
import CategoriesPage from './components/Home/CategoriesPage';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    SideNav,
    CategoriesPage
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
};
</script>
