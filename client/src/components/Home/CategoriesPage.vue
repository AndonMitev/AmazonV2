<template>
  <div>
    <PageTitle :title="pageTitle" />
    <v-layout v-if="!isLoading">
      <v-layout row wrap justify-start>
        <v-flex xs12 v-for="category in categories.categories" :key="category._id">
          <div>
            <h3>{{category.name}} - {{category.products.length}} Products</h3>
            <v-layout row wrap justify-start mt-3>
              <Product v-for="product in category.products" :key="product.id" :product="product" />
            </v-layout>
          </div>
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
    </v-layout>
  </div>
</template>

<script>
import PageTitle from '../shared/PageTitle';
import Product from './views/Product';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CategoriesPage',
  data: () => ({
    pageTitle: 'Categories'
  }),
  computed: {
    ...mapState(['categories', 'isLoading'])
  },
  methods: {
    ...mapActions(['getCategoriesAction'])
  },
  mounted() {
    console.log('lol');
    this.getCategoriesAction();
  },
  components: {
    PageTitle,
    Product
  }
};
</script>

<style>
</style>
