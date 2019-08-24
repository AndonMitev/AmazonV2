<template>
  <v-navigation-drawer app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">Application</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list dense class="pt-0">
      <ListTile :icon="items[0].icon" :title="items[0].title" :link="items[0].link" />
      <ListTile
        v-if="!userData && !isLoggedIn"
        :icon="items[1].icon"
        :title="items[1].title"
        :link="items[1].link"
      />
      <ListTile
        v-if="!userData && !isLoggedIn"
        :icon="items[2].icon"
        :title="items[2].title"
        :link="items[2].link"
      />
      <ListTile
        v-if="userData || isLoggedIn"
        :icon="items[3].icon"
        :title="items[3].title"
        :link="items[3].link"
      />
      <ListTile
        v-if="userData || isLoggedIn"
        :icon="items[5].icon"
        :title="items[5].title"
        :link="items[5].link"
      />
      <span @click="logout">
        <ListTile
          v-if="userData || isLoggedIn"
          :icon="items[6].icon"
          :title="items[6].title"
          :link="items[6].link"
        />
      </span>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ListTile from './ListTIle';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SideNav',
  data: function() {
    return {
      items: [
        { icon: 'home', title: 'Home', link: '/' },
        {
          icon: 'group_add',
          title: 'Register',
          link: '/register'
        },
        { icon: 'person', title: 'Login', link: '/login' },
        {
          icon: 'shopping_cart',
          title: 'My cart',
          link: '/cart'
        },
        { icon: 'reorder', title: 'Categories', link: '/' },
        {
          icon: 'person',
          title: 'Create product',
          link: '/product/create'
        },
        {
          icon: 'highlight_off',
          title: 'Logout',
          link: '/login'
        }
      ]
    };
  },
  computed: {
    ...mapGetters(['userData']),
    isLoggedIn() {
      return localStorage.getItem('id');
    }
  },
  methods: {
    ...mapActions(['logoutAction']),
    logout() {
      this.logoutAction();
      this.$router.push('/login');
    }
  },
  mounted() {
    console.log(this.userData);
  },
  updated() {
    console.log(this.userData);
  },
  components: {
    ListTile
  }
};
</script>

<style>
</style>
