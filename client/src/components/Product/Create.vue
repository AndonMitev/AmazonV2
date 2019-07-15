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
    ...mapGetters(['step', 'tempProduct'])
  },
  methods: {
    ...mapActions(['getCurrentStep', 'completeFirstStep', 'completeSecondStep']),
    createProduct(product) {
      this.completeFirstStep({ product, currentStep: 1 });
    },
    addCategories(categories) {
      this.completeSecondStep({categories, step: this.step});
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
