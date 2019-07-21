<template>
  <div v-if="!isLoading">
    <Stepper :step="step" />

    <productForm v-if="step === 1" :tempProduct="tempProduct" @onFormSubmited="submitProductForm" />

    <categories
      v-else-if="step === 2"
      :tempProduct="tempProduct"
      @onAddedCategories="addCategories"
      @backToProductForm="backToProductForm"
    />

    <attachImage
      v-else-if="step === 3"
      :tempProduct="tempProduct"
      @onAddedImages="attachImages"
      @backToCategories="backToCategories"
      @onComplete="onComplete"
    />
  </div>
</template>

<script>
import Stepper from '../shared/Stepper';
import { mapActions, mapGetters } from 'vuex';
const productForm = () => import('./CreateProductForm');
const categories = () => import('./Categories');
const attachImage = () => import('./AttachImage');

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
  components: { Stepper, productForm, categories, attachImage }
};
</script>
