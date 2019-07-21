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
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideNav",
  data: function() {
    return {
      items: [
        { icon: "home", title: "Home" },
        { icon: "group_add", title: "Register" },
        { icon: "person", title: "Login" },
        { icon: "reorder", title: "Categories" },
        { icon: "person", title: "Profile" },
        { icon: "escape", title: "Logout" }
      ]
    };
  }
};
</script>

<style>
</style>
