<template>
  <div>
    <v-stepper value="2">
      <v-stepper-header>
        <v-stepper-step step="1" complete>Create product</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2">Select category</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Add images</v-stepper-step>
      </v-stepper-header>
    </v-stepper>

    <v-layout row justify-center>
      <v-flex xs12 md8>
        <h1 class="text-xs-center display-3 mb-2">Create product</h1>
        <v-divider class="mb-5"></v-divider>
        <v-form ref="form" @submit.prevent="onSubmit">
          <v-text-field type="text" v-model="model.name" label="Name"></v-text-field>
          <v-text-field type="number" v-model="model.price" label="Price"></v-text-field>
          <v-text-field type="number" v-model="model.quantity" label="Quantity"></v-text-field>

          <v-layout mb-3>
            <v-radio-group :label="'State'" row v-model="model.state">
              <v-radio
                v-for="state in model.states"
                :key="state"
                :label="`${state}`"
                :value="state"
              ></v-radio>
            </v-radio-group>
          </v-layout>

          <div mt-5>
            <label class="text-none">Categories</label>

            <v-layout row wrap>
              <v-flex xs12 md4 v-for="category in model.availableCategories" :key="category">
                <v-checkbox :label="category" :value="category" v-model="model.categories"></v-checkbox>
              </v-flex>
            </v-layout>
          </div>

          <v-textarea type="text" label="Description"></v-textarea>

          <v-btn type="submit">Submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'CreateProduct',
  data: () => ({
    model: {
      name: '',
      availableCategories: [
        'Books',
        'Movies',
        'TV',
        'Music',
        'Games',
        'Electronics',
        'Computers',
        'Home',
        'Garden',
        'Pets',
        'Beauty',
        'Health',
        'Grocery',
        'Toys',
        'Children',
        'Baby',
        'Apparel',
        'Shoes',
        'Watches',
        'Sports',
        'Outdoors',
        'Automotive',
        'Motorcycle',
        'Industrial',
        'Handmade'
      ],
      price: 0,
      description: '',
      quantity: '',
      states: ['New', 'Used'],
      state: '',
      categories: []
    }
  }),
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const { availableCategories, states, ...rest } = this.model;
        console.log(rest);
      }
    }
  }
};
</script>

<style>
</style>
