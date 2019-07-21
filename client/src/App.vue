<template>
  <v-app>
    <SideNav />
    <v-toolbar app></v-toolbar>
    <v-content>
      <v-container fluid>
        <Create />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Register from './components/user/Register';
import Products from './components/Product/Products';
import SideNav from './components/shared/SideNav';
import Details from './components/Product/Details';
import Login from './components/user/Login';
import Create from './components/Product/Create';
import HomePage from './components/Home/HomePage';

export default {
  name: 'App',
  components: {
    Register,
    Products,
    SideNav,
    Details,
    Login,
    Create,
    HomePage
  },
  data() {
    return {
      //
    };
  }
};
</script>
