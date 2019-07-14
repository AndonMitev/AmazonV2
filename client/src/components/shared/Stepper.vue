<template>
  <v-stepper :value="step">
    <v-stepper-header>
      <v-stepper-step step="1">Create product</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2">Select categories</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Attach images</v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  name: 'Stepper',
  props: ['step']
};
</script>

<style>
</style>
