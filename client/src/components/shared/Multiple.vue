<template>
  <div>
    <form @submit.prevent="sendFile" enctype="multipart/form-data">
      <input type="file" multiple ref="files" @change="selectFile" />

      <button>Send</button>
    </form>

    <div v-for="file in files" :key="file.name">
      <div>{{file.name}}</div>
      <div>
        <a href>Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.baseURL = 'localhost:7000/';
export default {
  name: 'Multiple',
  data: () => ({
    files: []
  }),
  methods: {
    selectFile() {
      const files = this.$refs.files.files;
      this.files = [...this.files, ...files];
      console.log(this.files);
    },

    async sendFile() {
      const formData = new FormData();

      this.files.forEach(file => {
        formData.append('images', file);
      });

      try {
        axios.post('step/three/complete', formData);
      } catch (error) {
        console.log(error);
      }
    },

    test() {}
  }
};
</script>

<style>
</style>
