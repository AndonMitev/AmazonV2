<template>
  <v-layout row justify-space-around>
    <v-flex xs12 md10>
      <h1 class="text-xs-center display-3 mb-2">Register</h1>
      <v-divider class="mb-5"></v-divider>
      <v-form ref="form" @submit.prevent="onSubmit" lazy-validation>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5>
            <v-text-field
              color="primary"
              v-model="userData.firstName"
              prepend-icon="person"
              label="First name"
              :rules="[firstNameRules]"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md5>
            <v-text-field
              color="primary"
              v-model="userData.lastName"
              prepend-icon="person"
              label="Last name"
              :rules="[lastNameRules]"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5>
            <v-text-field
              color="primary"
              v-model="userData.email"
              prepend-icon="email"
              :rules="[...emailRules]"
              label="Email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md5>
            <v-text-field
              v-model="userData.confirmEmail"
              label="Confirm Email"
              prepend-icon="email"
              :rules="[compareEmails]"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5>
            <v-text-field
              type="password"
              v-model="userData.password"
              label="Password"
              prepend-icon="lock"
              :rules="[...passwordRules]"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md5>
            <v-text-field
              type="password"
              v-model="userData.confirmPassword"
              label="Confirm password"
              :rules="[comparePasswords]"
              prepend-icon="lock"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5>
            <v-text-field
              v-model="userData.address"
              label="Address"
              prepend-icon="account_balance"
              :rules="[...addressRules]"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md5>
            <v-text-field
              v-model="userData.phone"
              label="Phone"
              prepend-icon="call"
              :rules="[phoneRules]"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-btn type="submit" xs12 md2 color="orange lighten-1">
          <v-icon left>error_outline</v-icon>
          <span>Reset</span>
        </v-btn>
        <v-btn type="submit" xs12 md2 color="blue lighten-1">
          <v-icon left>check_circle</v-icon>
          <span>Submit</span>
        </v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import registerRules from '../../services/register-rules';
import userServices from '../../services/user';

export default {
  name: 'Register',
  data: () => ({
    userData: {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      confirmPassword: '',
      address: '',
      phone: ''
    }
  }),
  computed: {
    ...registerRules
  },
  methods: {
    async onSubmit() {
      if (this.$refs.form.validate()) {
        const { confirmEmail, confirmPassword, ...rest } = this.userData;
        await userServices.register(rest);
      }
    }
  }
};
</script>

<style>
</style>
