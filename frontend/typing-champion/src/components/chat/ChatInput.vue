<template>
  <div class="chat-input">
    <div class="chat-input-content">
      <div class="chat-write">
        <span
          class="text-growable"
          role="textbox"
          ref="input-ref"
          @input="inputText($event)"
          @keydown="checkEnterKey($event)"
          contenteditable
        />
      </div>
      <div class="chat-send" @click="send">
        <img src="@/assets/send.svg" alt="send" />
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "ChatInput",
  data() {
    return {
      text: "",
    };
  },
  methods: {

    ...mapActions(["addChatMessage"]),

    send() {
      let payload = {
        type: "my-msg",
        author: this.$store.state.nickname,
        text: this.text,
      };
      this.addChatMessage(payload);
      this.text = "";
      this.$refs["input-ref"].innerHTML = "";
      this.$emit('newChat', {...payload, type: 'others-msg'});
    },

    inputText(e) {
      this.text = e.target.innerText;
    },

    checkEnterKey(e) {
      if (e.keyCode == 13 && !e.shiftKey) {
        // shift + enter = new line
        // enter = send()
        e.preventDefault();
        this.send();
      }
    },
  },
};
</script>


<style scoped>
.chat-input-content {
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid var(--gray-color);
  border-radius: 10px;
  /* box-shadow: 0 0 1px rgba(0,0,0,.1); */
}
.chat-write {
  flex: 0.8;
  padding: 10px 10px 10px 16px;
  display: flex;
  align-items: center;
}
.text-growable {
  display: block;
  width: 18vw;
  max-height: 60vh;
  min-height: 1.5rem;
  overflow: hidden;
  overflow-wrap: break-word;
  resize: none;
  outline: none;
}
.chat-send {
  flex: 0.2;
  display: grid;
  place-items: center;
  background-color: var(--white-color);
  border-radius: 0 10px 10px 0;
  padding-left: 4px;
}
.chat-send:hover {
  cursor: pointer;
}
</style>