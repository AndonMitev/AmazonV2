<template>
  <div mt-5>
    <v-layout row justify-center>
      <v-flex md6>
        <v-layout row wrap justify-center>
          <v-flex xs12 md4 v-for="category in availableCategories" :key="category">
            <v-checkbox :label="category" :value="category" v-model="categories"></v-checkbox>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-btn @click="onClick" color="primary">Next</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data: () => ({
    availableCategories: [
      'Books',
      'Movies',
      'TV',
      'Music',
      'Games',
      'Electronics',
      'Computers',
      'Home',
      'Garden',
      'Pets',
      'Beauty',
      'Health',
      'Grocery',
      'Toys',
      'Children',
      'Baby',
      'Apparel',
      'Shoes',
      'Watches',
      'Sports',
      'Outdoors',
      'Automotive',
      'Motorcycle',
      'Industrial',
      'Handmade'
    ],
    categories: []
  }),
  methods: {
    onClick() {
      this.$emit('onAddedCategories', this.categories);
    }
  }
};
</script>

<style>
</style>
