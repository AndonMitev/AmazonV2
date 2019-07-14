<template>
  <div>
    <h1 class="text-xs-center display-3 mb-2">{{title}}</h1>
    <v-divider class="mb-5"></v-divider>
  </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['title']
};
</script>

<style>
</style>
