<template>
  <div>
    <Stepper :step="step" />
    <PageTitle :title="'Create a product'" />
    <CreateProductForm @onFormSubmited="setInStore" />
  </div>
</template>

<script>
import Stepper from '../shared/Stepper';
import PageTitle from '../shared/PageTitle';
import CreateProductForm from '../shared/forms/CreateProductForm';
import { mapActions } from 'vuex';

export default {
  name: 'CreateProduct',
  data: () => ({
    step: 1
  }),
  methods: {
    ...mapActions(['setProduct']),
    setInStore(product) {
      this.setProduct(product);
    }
  },
  components: { Stepper, PageTitle, CreateProductForm }
};
</script>

<style>
</style>
