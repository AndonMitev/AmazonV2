<template>
  <div v-if="!isLoading">
    <Stepper :step="step" />

    <CreateProductForm
      v-if="step === 1"
      :tempProduct="tempProduct"
      @onFormSubmited="submitProductForm"
    />

    <Categories
      v-else-if="step === 2"
      :tempProduct="tempProduct"
      @onAddedCategories="addCategories"
      @backToProductForm="backToProductForm"
    />

    <AttachImage
      v-else-if="step === 3 || step === 4"
      :tempProduct="tempProduct"
      @onAddedImages="attachImages"
      @backToCategories="backToCategories"
      @onComplete="onComplete"
    />
  </div>
</template>

<script>
import Stepper from '../shared/Stepper';
import PageTitle from '../shared/PageTitle';
import CreateProductForm from '../shared/forms/CreateProductForm';
import Categories from '../shared/forms/Categories';
import AttachImage from '../shared/AttachImage';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CreateProduct',
  data: () => ({
    showProduct: false
  }),
  computed: {
    ...mapGetters(['step', 'tempProduct', 'isLoading'])
  },
  methods: {
    ...mapActions([
      'getCurrentStep',
      'completeFirstStep',
      'completeSecondStep',
      'completeThirdStep',
      'finishCreatingPhase'
    ]),
    submitProductForm(product) {
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
    backToCategories() {
      this.getCurrentStep(2);
    },
    onComplete() {
      this.finishCreatingPhase(this.tempProduct);
    }
  },
  mounted() {
    this.getCurrentStep();
  },
  components: { Stepper, PageTitle, CreateProductForm, Categories, AttachImage }
};
</script>

<style>
</style>
