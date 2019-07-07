<template>
  <div class="text-center">
    <h1>Chat room</h1>
    <div>
      <div id="chat-room">
        <div
          class="mb-3"
        >User1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident sint iure officia. Aut hic obcaecati nam cumque? Exercitationem nemo accusamus quos. Velit quos doloremque aliquam voluptate nihil voluptatum ex iste.</div>
        <div
          class="mb-3"
        >User2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident sint iure officia. Aut hic obcaecati nam cumque? Exercitationem nemo accusamus quos. Velit quos doloremque aliquam voluptate nihil voluptatum ex iste.</div>
        <div
          class="mb-3"
        >User3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident sint iure officia. Aut hic obcaecati nam cumque? Exercitationem nemo accusamus quos. Velit quos doloremque aliquam voluptate nihil voluptatum ex iste.</div>
        <input
          @keyup.enter="onKeyup"
          class="col-md-12"
          type="text"
          v-model="message"
          placeholder="Message..."
          id="message-sender"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    message: ""
  }),
  methods: {
    onKeyup(event) {
      event.preventDefault();
      console.log(this.message);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chat-room {
  height: 600px;
  width: 50%;
  text-align: justify;
  margin: auto;
  border: 3px solid rgb(112, 112, 226);
  border-radius: 10px;
  padding: 15px;
}

#message-sender {
  position: relative;
  top: 200px;
}
</style>
