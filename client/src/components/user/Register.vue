<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label>Email</label>
        <input type="text" placeholder="Email" v-model="userData.email" @input="onInput" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" v-model="userData.password" @input="onInput" />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Password"
          v-model="userData.confirmPassword"
          @input="onInput"
        />
      </div>
      <div>
        <label>Address</label>
        <input type="text" placeholder="Address" v-model="userData.address" @input="onInput" />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" placeholder="Phone" v-model="userData.phone" @input="onInput" />
      </div>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      userData: {
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phone: ''
      }
    };
  },
  methods: {
    onInput() {},
    onSubmit() {
      console.log({ ...this.userData });
    }
  }
};
</script>

<style>
</style>
