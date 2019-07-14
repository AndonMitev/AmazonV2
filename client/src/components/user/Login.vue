<template>
  <v-layout row wrap justify-center>
    <v-flex xs12 sm6>
      <h1 class="text-xs-center display-3 mb-2">Login</h1>
      <v-divider class="mb-5"></v-divider>
      <v-form ref="form" @submit.prevent="onSubmit">
        <v-text-field
          type="text"
          label="Email"
          prepend-icon="email"
          v-model="userData.email"
          :rules="[usernameRules]"
        ></v-text-field>

        <v-text-field
          type="password"
          prepend-icon="lock"
          label="Password"
          v-model="userData.password"
          :rules="[passwordRules]"
        ></v-text-field>

        <v-btn type="submit" xs12 md2 color="blue lighten-1">
          <v-icon left>check_circle</v-icon>
          <span>Login</span>
        </v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import loginRules from '../../services/rules/login';
import userServices from '../../services/user';
import lsServices from '../../services/local-storage';

export default {
  name: 'Login',
  data: () => ({
    userData: {
      email: '',
      password: ''
    }
  }),
  computed: {
    ...loginRules
  },
  methods: {
    async onSubmit() {
      if (this.$refs.form.validate()) {
        try {
          const userMetadata = await userServices.login({ ...this.userData });
          lsServices.setUserData(userMetadata);
          this.$toastr.success('Message', 'Title');
        } catch (error) {}
      }
    }
  }
};
</script>

<style>
</style>
