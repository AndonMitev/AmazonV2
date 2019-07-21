<template>
  <div mt-5>
    <PageTitle :title="'Select categories'" />
    <v-layout row justify-center>
      <v-flex md6>
        <v-layout row wrap justify-center>
          <v-flex xs12 md4 v-for="category in availableCategories" :key="category">
            <v-checkbox :label="category" :value="category" v-model="categories"></v-checkbox>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-btn @click="onNext" color="primary right">Next</v-btn>
    <v-btn @click="onBack" color="primary">Back</v-btn>
  </div>
</template>

<script>
import PageTitle from '../shared/PageTitle';

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
  props: ['tempProduct'],
  computed: {
    setCategories() {
      if (this.tempProduct && this.tempProduct.categories.length) {
        this.categories = [...this.tempProduct.categories];
      }
    }
  },
  methods: {
    onNext() {
      this.$emit('onAddedCategories', this.categories);
    },
    onBack() {
      this.$emit('backToProductForm');
    }
  },
  mounted() {
    this.setCategories;
  },
  components: {
    PageTitle
  }
};
</script>