<template>
  <div>
    <Stepper :step="step" />
    <PageTitle :title="'Create a product'" />
    <CreateProductForm v-if="step === 1" @onFormSubmited="createProduct" />
    <Categories v-else-if="step === 2" @onAddedCategories="addCategories" />
  </div>
</template>

<script>
import Stepper from '../shared/Stepper';
import PageTitle from '../shared/PageTitle';
import CreateProductForm from '../shared/forms/CreateProductForm';
import Categories from '../shared/forms/Categories';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CreateProduct',
  computed: {
    ...mapGetters(['step'])
  },
  methods: {
    ...mapActions(['getCurrentStep', 'completeStepOne']),
    createProduct(product) {
      this.completeStepOne({ product, currentStep: 1 });
    },
    addCategories(categories) {
      console.log(this.step);
    }
  },
  mounted() {
    this.getCurrentStep();
  },
  components: { Stepper, PageTitle, CreateProductForm, Categories }
};
</script>

<style>
</style>
