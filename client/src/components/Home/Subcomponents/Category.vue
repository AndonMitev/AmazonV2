<template>
  <v-layout>
    <v-flex md-12 v-for="category in categories.categories" :key="category._id">
        {{category}}
      <div>
          <h3>{{category.name}} - {{categories.length}} Products</h3>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Category',
  props: ['categories'],
  mounted() {
     // console.log(this.categories);
  }
};
</script>

<style>
</style>
