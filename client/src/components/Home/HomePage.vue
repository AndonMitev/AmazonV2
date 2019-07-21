<template>
  <div>
    <PageTitle :title="pageTitle" />
    <v-layout v-if="!isLoading">
      <Category :categories="categories" />
    </v-layout>
  </div>
</template>

<script>
import PageTitle from '../shared/PageTitle';
import Category from './Subcomponents/Category';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  data: () => ({
    pageTitle: 'Categories'
  }),
  computed: {
    ...mapState(['categories', 'isLoading'])
  },
  methods: {
    ...mapActions(['getCategories'])
  },
  mounted() {
    this.getCategories();
  },
  components: {
    PageTitle,
    Category
  }
};
</script>

<style>
</style>
