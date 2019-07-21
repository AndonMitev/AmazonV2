<template>
  <div>
    <PageTitle :title="'Attach images'" />
    <v-layout>
      <v-flex xs12 mb-3>
        <v-form @submit.prevent="sendFile" enctype="multipart/form-data">
          <input class="file-path" id="file" type="file" multiple ref="files" @change="selectFile" />
          <label for="file">Select images</label>
          <label v-if="this.files.length">You selected {{this.files.length }} images</label>
          <v-btn type="submit" class="primary right">Send</v-btn>
        </v-form>
      </v-flex>
    </v-layout>

    <v-layout row justify-center v-if="haveImages">
      <v-flex md8>
        <v-carousel height="550" interval="2000">
          <v-carousel-item v-for="(image,i) in tempProduct.images" :key="i" :src="image"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-btn class="primary" @click="onClick">Back</v-btn>
    <v-btn v-if="haveImages" @click="onComplete" class="primary right">Complete</v-btn>
  </div>
</template>

<script>
import PageTitle from '../shared/PageTitle';

export default {
  name: 'AttachImage',
  data: () => ({
    files: []
  }),
  props: ['tempProduct'],
  computed: {
    haveImages() {
      return this.tempProduct && this.tempProduct.images.length;
    }
  },
  methods: {
    selectFile() {
      const files = this.$refs.files.files;
      this.files = [...files];
    },
    sendFile() {
      if (this.files.length) {
        const formData = new FormData();

        this.files.forEach(file => {
          formData.append('images', file);
        });

        this.files = [];
        this.$emit('onAddedImages', formData);
      }
    },
    onClick() {
      this.$emit('backToCategories');
    },
    onComplete() {
      this.$emit('onComplete');
    }
  },
  components: {
    PageTitle
  }
};
</script>

<style scoped>
[type='file'] {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  white-space: nowrap;
  width: 1px;
}

[type='file'] + label {
  background-color: #3486D7;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  padding-left: 2rem 4rem;
  line-height: 40px;
  padding: 0 10px;
  font-size: 1.1rem;
}
[type='file']:hover {
  background-color: #3486D7;
}
</style>
