<template>
  <div>
    <Stepper :step="step" />
    <PageTitle :title="'Create a product'" />
    <CreateProductForm v-if="step === 1" @onFormSubmited="createProduct" />
    <Categories v-else-if="step === 2" @onAddedCategories="addCategories" />
    <Multiple v-else-if="step === 3" @onAddedImages="attachImages" />
    <div v-if="images">
      <div v-for="image in images" :key="image">
        <img :src="image" :alt="'no image'" />
      </div>
    </div>
  </div>
</template>

<script>
import Stepper from '../shared/Stepper';
import PageTitle from '../shared/PageTitle';
import CreateProductForm from '../shared/forms/CreateProductForm';
import Categories from '../shared/forms/Categories';
import Multiple from '../shared/Multiple';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CreateProduct',
  computed: {
    ...mapGetters(['step', 'tempProduct', 'images'])
  },
  updated() {
    console.log(this.images);
  },
  methods: {
    ...mapActions([
      'getCurrentStep',
      'completeFirstStep',
      'completeSecondStep',
      'completeThirdStep'
    ]),
    createProduct(product) {
      this.completeFirstStep({ product, currentStep: 1 });
    },
    addCategories(categories) {
      this.completeSecondStep({ categories, step: this.step });
    },
    attachImages(images) {
      this.completeThirdStep(images);
    }
  },
  mounted() {
    this.getCurrentStep();
  },
  components: { Stepper, PageTitle, CreateProductForm, Categories, Multiple }
};
</script>

<style>
</style>
