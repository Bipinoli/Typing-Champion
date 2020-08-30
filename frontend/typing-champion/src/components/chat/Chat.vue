<template>
  <div class="chat">
    <div class="chat-display">
      <template v-for="msg in allMessages">
        <chat-message
          v-if="msg.category == 'chat'"
          :key="msg.id"
          :type="msg.type"
          :author="msg.author"
          :text="msg.text"
        ></chat-message>
        <joined-left-info v-else :key="msg.id" :name="msg.name" :info="msg.info"></joined-left-info>
      </template>
      <span id="end-mark"></span>
    </div>
    <chat-input @newChat="shoutNewChat"></chat-input>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

import ChatMessage from "@/components/chat/ChatMessage.vue";
import JoinedLeftInfo from "@/components/chat/JoinedLeftInfo.vue";
import ChatInput from "@/components/chat/ChatInput.vue";

import io from "socket.io-client";

export default {
  name: "Chat",
  components: {
    ChatMessage,
    JoinedLeftInfo,
    ChatInput,
  },

  data() {
    return {
      socket: {},
    };
  },

  created() {
    this.socket = io("http://localhost:3000");

    this.socket.emit("user-info", {
      name: this.$store.state.nickname,
      info: "joined",
    });

    this.socket.on("user-info", (payload) => {
      this.addJoinInfo(payload);
      // making sure that vitrual dom updates get reflected before
      // manually working from actual dom
      setTimeout(() => {
        document
          .getElementById("end-mark")
          .scrollIntoView({ behavior: "smooth", block: "end" });
      }, 0);
    });

    this.socket.on("new-chat", (payload) => {
      console.log("new chat received: ", payload);
      this.addChatMessage(payload);
      // making sure that vitrual dom updates get reflected before
      // manually working from actual dom
      setTimeout(() => {
        document
          .getElementById("end-mark")
          .scrollIntoView({ behavior: "smooth", block: "end" });
      }, 0);
    });
  },

  computed: mapGetters(["allMessages"]),

  methods: {
    shoutNewChat(payload) {
      this.socket.emit("new-chat", payload);
    },
    ...mapActions(["addChatMessage", "addJoinInfo"]),
  },
};
</script>


<style scoped>
.chat {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}
.chat-display {
  width: 100%;
  flex: 0.93;
  display: flex;
  flex-direction: column;
  padding: 0.7rem;
  overflow: auto;
}
.chat-input {
  flex: 0.07;
  padding: 0.7rem;
}
</style>