<template>
  <div v-if="!isLoading">
    <Stepper :step="step" />
    <PageTitle :title="'Create a product'" />

    <CreateProductForm
      v-if="step === 1"
      @onFormSubmited="createProduct"
      :tempProduct="tempProduct"
    />

    <Categories
      v-else-if="step === 2"
      @onAddedCategories="addCategories"
      @backToProductForm="backToProductForm"
    />
    <Multiple v-else-if="step === 3 || step === 4" @onAddedImages="attachImages" />
    <div v-if="haveImages">
      <div v-for="image in tempProduct.images" :key="image">
        <img :src="image" :alt="'no image'" />
      </div>
    </div>
    <v-layout row align-center v-if="step === 4">
      <v-btn @click="onBack" class="primary">Back</v-btn>
      <v-btn v-if="haveImages" @click="onComplete" class="primary">Complete</v-btn>
    </v-layout>
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
  data: () => ({
    showProduct: false
  }),
  computed: {
    ...mapGetters(['step', 'tempProduct', 'isLoading']),
    haveImages() {
      return this.tempProduct && this.tempProduct.images;
    }
  },
  methods: {
    ...mapActions([
      'getCurrentStep',
      'completeFirstStep',
      'completeSecondStep',
      'completeThirdStep',
      'finishCreatingPhase'
    ]),
    createProduct(product) {
      this.completeFirstStep({ product, step: 1 });
    },
    addCategories(categories) {
      this.completeSecondStep({ categories, step: this.step });
    },
    backToProductForm() {
      this.getCurrentStep(1);
    },
    attachImages(images) {
      this.completeThirdStep(images);
    },
    onComplete() {
      this.finishCreatingPhase(this.tempProduct);
    },
    onBack() {}
  },
  mounted() {
    this.getCurrentStep();
  },
  components: { Stepper, PageTitle, CreateProductForm, Categories, Multiple }
};
</script>

<style>
</style>
