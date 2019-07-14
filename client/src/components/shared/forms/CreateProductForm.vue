<template>
  <v-layout row justify-center>
    <v-flex xs12 md6>
      <v-form ref="form" @submit.prevent="onSubmit">
        <v-text-field type="text" v-model="product.name" label="Name" :rules="[nameRules]" />
        <v-text-field type="number" v-model="product.price" label="Price" :rules="[...priceRules]" />
        <v-text-field
          type="number"
          v-model="product.quantity"
          label="Quantity"
          :rules="[qualityRules]"
        />
        <v-radio-group row v-model="product.state" :rules="[stateRules]">
          <label class="mr-5">Product condition:</label>
          <v-radio
            class="text-capitalize"
            v-for="state in product.availableStates"
            :key="state"
            :label="`${state}`"
            :value="state"
          />
        </v-radio-group>
        <v-textarea
          type="text"
          label="Describe your product"
          v-model="product.description"
          :rules="[descriptionRules]"
        />
        <v-btn type="submit">Submit</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import productRules from '../../../services/rules/product';

export default {
  name: 'CreateProductForm',
  data: () => ({
    product: {
      name: '',
      price: null,
      description: '',
      quantity: null,
      state: '',
      availableStates: ['new', 'used']
    }
  }),
  computed: {
    ...productRules
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const { availableStates, ...rest } = this.product;
        this.$emit('onFormSubmited', rest);
      }
    }
  }
};
</script>

<style>
</style>
