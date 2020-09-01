<template>
  <div class="chat">
    <div class="chat-header">
      <div class="chat-title">Typing Champion</div>
      <img src="@/assets/hamburger.svg" @click="toggleChatMenu" alt="chat menu" class="hamburger" />
    </div>
    <div class="overlay" v-if="isChatMenuShowing" @click="toggleChatMenu">
      <div class="drawer">
        <div class="drawer-title"><b>5</b> participants</div>
        <ul>
          <li>
            <span class="authority">Host</span>
            <span class="name">binay123 (you)</span>
          </li>
          <li>
            <span class="authority"></span>
            <span class="name">Naruto</span>
          </li>
          <li>
            <span class="authority"></span>
            <span class="name">Kagayari3Xz</span>
          </li>
          <li>
            <span class="authority"></span>
            <span class="name">messi4everGOAT</span>
          </li>
          <li>
            <span class="authority"></span>
            <span class="name">kikakukakiku</span>
          </li>
        </ul>
      </div>
    </div>
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
      isChatMenuShowing: false,
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
      this.scrollIntoLatestMsg();
    });

    this.socket.on("new-chat", (payload) => {
      console.log("new chat received: ", payload);
      this.addChatMessage(payload);
      this.scrollIntoLatestMsg();
    });
  },

  computed: mapGetters(["allMessages"]),

  methods: {
    shoutNewChat(payload) {
      this.scrollIntoLatestMsg();
      this.socket.emit("new-chat", payload);
    },
    scrollIntoLatestMsg() {
      // making sure that vitrual dom updates get reflected before
      // manually working from actual dom
      setTimeout(() => {
        document
          .getElementById("end-mark")
          .scrollIntoView({ behavior: "smooth", block: "end" });
      }, 0);
    },
    toggleChatMenu() {
      this.isChatMenuShowing = !this.isChatMenuShowing;
    },
    ...mapActions(["addChatMessage", "addJoinInfo"]),
  },
};
</script>


<style scoped>
.chat {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}
.chat-header {
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  z-index: 2;
  padding: 1rem 0.5rem;
  background-color: #fff;
  border-radius: 10px;
}
.chat-header > img:hover {
  cursor: pointer;
}
.chat-title {
  flex: 0.9;
  text-align: center;
}
.hamburger {
  flex: 0.08;
}
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  padding-top: 3rem;
  /* background-color: rgba(88, 188, 130, .6); */
  background-color: #f9db6d;
  background-color: rgba(249, 219, 109, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1;
}
.drawer {
  position: absolute;
  right: 0;
  width: 70%;
  height: 84%;
  overflow: auto;
  background-color: #fff;
  border-radius: 10px 0px 0px 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  padding-bottom: 1rem;
}
.drawer-title {
  text-align: end;
  padding: 0.5rem;
  padding-bottom: 1rem;
}
.drawer > ul > li {
  display: flex;
  align-items: flex-end;
  padding: 0.5rem;
  padding-left: 1rem;
  text-align: start;
}
.authority {
  display: inline-block;
  min-height: 1rem;
  min-width: 3rem;
  font-weight: 600;
}
.name {
  max-width: 80%;
  word-wrap: break-word;
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