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
export default {
  name: 'Multiple',
  data: () => ({
    files: []
  }),
  methods: {
    selectFile() {
      const files = this.$refs.files.files;
      this.files = [...this.files, ...files];
    },
    sendFile() {
      const formData = new FormData();

      this.files.forEach(file => {
        formData.append('images', file);
      });

      this.$emit('onAddedImages', formData);
    }
  }
};
</script>

<style>
</style>
