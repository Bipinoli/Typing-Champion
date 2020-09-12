<template>
  <div class="join">
    <div>
      <div class="content">
        <div :class="{'error-msg': !validNickname, 'correct-msg': validNickname}">{{errorMsg}}</div>
        <input type="text" placeholder="Enter Nickname" v-model="nickname" />
        <div class="btns">
          <div class="btn" @click="join" v-if="joining">Join</div>
          <div class="btn" @click="host" v-else>Host</div>
        </div>
      </div>
      <p class="share-msg">Share your URL to invite others</p>
    </div>
  </div>
</template>


<script>
import io from "socket.io-client";

export default {
  name: "Join",
  data() {
    return {
      nickname: "",
      errorMsg: "you must provide a nickname",
      validNickname: false,
      joining: false,
    };
  },
  created() {
    if (this.$store.state.signature != "") {
      this.joining = true;
    }
  },
  watch: {
    nickname(value) {
      let error = this.validateNickname(value);
      if (error == "") {
        this.validNickname = true;
        this.errorMsg = "valid nickname";
        return;
      }
      this.validNickname = false;
      this.errorMsg = error;
    },
  },
  methods: {
    join() {
      if (this.validNickname) {
        checkIfNameAvailable(this.nickname, this.$store.state.signature).then(
          (isAvailable) => {
            if (!isAvailable) {
              this.validNickname = false;
              this.errorMsg =
                "Sorry! the nickname is taken. Please choose another";
              return;
            }
            this.$emit("join", this.nickname);
          }
        );
      }
    },
    host() {
      if (this.validNickname) {
        this.$emit("host", this.nickname);
      }
    },
    validateNickname(name) {
      const firstCharCheck = /^[a-zA-Z_]/;
      const whitespaceCheck = /\s/;
      const fullCheck = /^[a-zA-Z_]\w*$/;

      if (name.length == 0) return "you must provide a nickname";
      if (!firstCharCheck.test(name))
        return "nickname must start with an alphabet";
      if (whitespaceCheck.test(name)) return "nickname must be a single word";
      if (!fullCheck.test(name))
        return "only alphabets and numbers are allowed in a nickname";
      if (name.length < 2) return "nickname is too short";
      if (name.length > 25) return "nickname is too long";
      return "";
    },
  },
};

function checkIfNameAvailable(name, signature) {
  return new Promise((resolve, reject) => {
    try {
      let socket = io("http://localhost:3000");
      socket.emit("check-if-name-available", {
        name: name,
        signature: signature,
      });
      socket.on("name-availability", (isAvailable) => {
        resolve(isAvailable);
      });
    } catch (e) {
      reject(e);
    }
  });
}
</script>


<style scoped>
.join {
  background-color: var(--white-color);
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
.content {
  display: flex;
  flex-direction: column;
  width: 30vw;
}
.error-msg {
  color: var(--red-color);
  font-weight: lighter;
  padding-bottom: 0.4rem;
  text-align: center;
}
.correct-msg {
  color: var(--green-color);
  font-weight: lighter;
  padding-bottom: 0.4rem;
  text-align: center;
}
input {
  width: 100%;
  padding: 0.8rem 1.2rem;
  text-align: center;
  font-size: 1.5vw;
}
input::placeholder {
  font-weight: lighter;
}
.btns {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 1.5vw;
  justify-content: space-around;
  padding: 1rem;
}
.btn {
  background-color: var(--green-color);
  color: white;
  width: 48%;
  text-align: center;
  padding: 0.8rem;
  user-select: none;
  letter-spacing: 0.15em;
}
.btn:hover {
  cursor: pointer;
}
.share-msg {
  text-align: center;
  padding-top: 1rem;
  font-weight: lighter;
}
</style>