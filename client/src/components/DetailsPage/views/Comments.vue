<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-list>
        <v-list-tile avatar ripple>
          <v-list-tile-content>
            <v-list-tile-title>Alex</v-list-tile-title>
            <v-list-tile-sub-title
              class="text--primary"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis adipisci repellendus quisquam pariatur quod animi illo deleniti laboriosam eos recusandae eaque facilis consequatur, odit vel. Eligendi commodi id praesentium mollitia!</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile avatar ripple>
          <v-list-tile-content>
            <v-list-tile-title>Alex</v-list-tile-title>
            <v-list-tile-sub-title
              class="text--primary"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis adipisci repellendus quisquam pariatur quod animi illo deleniti laboriosam eos recusandae eaque facilis consequatur, odit vel. Eligendi commodi id praesentium mollitia!</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile avatar ripple>
          <v-list-tile-content>
            <v-list-tile-title>Alex</v-list-tile-title>
            <v-list-tile-sub-title
              class="text--primary"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis adipisci repellendus quisquam pariatur quod animi illo deleniti laboriosam eos recusandae eaque facilis consequatur, odit vel. Eligendi commodi id praesentium mollitia!</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile avatar ripple>
          <v-list-tile-content>
            <v-list-tile-title>Alex</v-list-tile-title>
            <v-list-tile-sub-title
              class="text--primary"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis adipisci repellendus quisquam pariatur quod animi illo deleniti laboriosam eos recusandae eaque facilis consequatur, odit vel. Eligendi commodi id praesentium mollitia!</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
    <v-flex xs12 mb-5>
      <v-form @submit.prevent="onSubmit">
        <v-textarea v-model="comment" name="input-7-1" label="Add comment" hint="Be nice!"></v-textarea>
        <v-btn type="submit" color="primary" absolute right :disabled="!isDisabled">Send</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Comments',
  data: () => ({
    comment: ''
  }),
  computed: {
    isDisabled() {
      return this.comment.length;
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.comment);
    }
  }
};
</script>