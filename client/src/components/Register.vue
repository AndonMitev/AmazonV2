<template>
  <v-layout justify-center row fill-height>
    <v-flex xs12 md6>
      <h1 class="text-xs-center">Register</h1>
      <form>
        <v-text-field type="email" name="email" id="email" label="Email" v-model="email"></v-text-field>
        <v-text-field v-model="password" label="Password" data-vv-name="password" required></v-text-field>
        <v-text-field
          v-model="confirmPassword"
          label="Confirm password"
          data-vv-name="confirmPassword"
          required
        ></v-text-field>
        <v-text-field v-model="address" label="Address" data-vv-name="address" required></v-text-field>
        <v-text-field v-model="phone" label="Phone" data-vv-name="phone" required></v-text-field>
        <v-layout row justify-end>
          <v-flex offset-md12>
            <v-btn color="light-green lighten-1">Register</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phone: ""
    };
  }
};
</script>

<style>
</style>
