<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-list>
        <div v-for="comment in comments" :key="comment._id">
          <v-list-tile avatar ripple>
            <v-list-tile-content>
              <v-list-tile-title>{{comment.email}}</v-list-tile-title>
              <v-list-tile-sub-title class="text--primary">{{comment.content}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </div>
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
  props: ['comments'],
  computed: {
    isDisabled() {
      return this.comment.length;
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.comment);
      this.comment = '';
    }
  }
};
</script>