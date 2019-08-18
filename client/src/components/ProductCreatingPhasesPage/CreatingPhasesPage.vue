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
      'getCurrentStepAction',
      'completeFirstStepAction',
      'completeSecondStepAction',
      'completeThirdStepAction',
      'finishCreatingPhaseAction'
    ]),
    submitProductForm(product) {
      this.completeFirstStepAction({ product, step: 1 });
    },
    addCategories(categories) {
      this.completeSecondStepAction({ categories, step: this.step });
    },
    backToProductForm() {
      this.getCurrentStepAction(1);
    },
    attachImages(images) {
      this.completeThirdStepAction(images);
    },
    backToCategories() {
      this.getCurrentStepAction(2);
    },
    onComplete() {
      this.finishCreatingPhaseAction(this.tempProduct);
    }
  },
  mounted() {
    this.getCurrentStepAction();
  },
  components: { Stepper, productForm, categories, attachImage }
};
</script>
