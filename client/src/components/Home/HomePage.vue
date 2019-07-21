<template>
  <PageTitle :title="pageTitle" />
</template>

<script>
import PageTitle from '../shared/PageTitle';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  data: () => ({
    pageTitle: 'Categories'
  }),
  methods: {
    ...mapActions(['getCategories'])
  },
  mounted() {
    this.getCategories();
  },
  components: {
    PageTitle
  }
};
</script>

<style>
</style>
