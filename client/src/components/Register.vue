<template>
  <v-layout row justify-space-around>
    <v-flex xs12 md10>
      <h1 class="text-xs-center display-3 mb-2">Register</h1>
      <v-divider class="mb-5"></v-divider>
      <form>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5>
            <v-text-field
              color="primary"
              v-model="firstName"
              prepend-icon="person"
              label="First name"
              :rules="[firstNameRules]"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md5>
            <v-text-field
              color="primary"
              v-model="lastName"
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
              v-model="email"
              prepend-icon="email"
              :rules="[...emailRules]"
              label="Email"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md5>
            <v-text-field
              v-model="confirmEmail"
              label="Confirm Email"
              prepend-icon="email"
              :rules="[compareEmails]"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5>
            <v-text-field
              v-model="password"
              label="Password"
              prepend-icon="lock"
              :rules="[...passwordRules]"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md5>
            <v-text-field
              v-model="confirmPassword"
              label="Confirm password"
              :rules="[comparePasswords]"
              prepend-icon="lock"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row wrap justify-space-around>
          <v-flex xs12 md5>
            <v-text-field
              v-model="address"
              label="Address"
              prepend-icon="account_balance"
              :rules="[...addressRules]"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 md5>
            <v-text-field
              v-model="phone"
              label="Phone"
              prepend-icon="call"
              :rules="[phoneRules]"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
      </form>
      <v-layout align-center justify-end row mt-5 mr-5>
        <v-btn color="orange lighten-1">
          <v-icon left>error_outline</v-icon>
          <span>Reset</span>
        </v-btn>
        <v-btn color="blue lighten-1">Submit</v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import registerRules from "../services/register-rules";

export default {
  name: "Register",
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: ""
  }),
  computed: {
    ...registerRules
  }
};
</script>

<style>
</style>
