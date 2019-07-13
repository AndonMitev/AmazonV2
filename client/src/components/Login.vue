<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm6>
      <h1 class="text-xs-center display-3 mb-2">Login</h1>
      <v-divider class="mb-5"></v-divider>
      <form>
        <v-text-field
          label="Email"
          prepend-icon="email"
          v-model="username"
          :rules="[usernameRules]"
        ></v-text-field>
        <v-text-field
          prepend-icon="lock"
          label="Password"
          v-model="password"
          :rules="[passwordRules]"
        ></v-text-field>
      </form>
      <v-layout align-center justify-center row mt-2 mr-5>
        <v-btn xs12 md2 color="blue lighten-1">
          <v-icon left>check_circle</v-icon>
          <span>Login</span>
        </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import loginRules from '../services/login-rules';

export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: ''
  }),
  computed: {
    ...loginRules
  }
};
</script>

<style>
</style>
