<template>
  <div id="app">
    <router-view @join='join' @host='host'/>
  </div>
</template>




<script>

import { mapActions } from 'vuex';

export default {
  name: "App",
  methods: {
    join(nickname) {
      console.log(nickname, ' joined');
      this.setNickname(nickname);
      this.$router.replace(`/game/${this.$store.state.signature}`);
    },
    host(nickname) {
      hostRequest(nickname).then((signature) => {
        this.setNickname(nickname);
        this.$router.replace(`/game/${signature}`);
      });
    },
    ...mapActions(['setNickname']),
  }
}

function hostRequest(nickname) {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:3000/api/connect/host/${nickname}`)
    .then(data => data.json())
    .then(data => {
      resolve(data.signature);
    })
    .catch(e => {
      reject(e);
    });
  });
}

</script>




<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');

:root {
    --green-color: #26C485;
    --red-color: #D7263D;
    --yellow-color: #F9DB6D;
    --black-color: #32322C;
    --white-color: #EEF0F2;
    --gray-color: #BABABA;

    --light-yellow-color: #FBE79D;
    --light-green-color: #5CD6A5;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html, body {
    font-family: 'Lato', sans-serif;
    color: var(--black-color);
}
textarea, input {
    outline: none;
    border: none;
    font-family: 'Lato', sans-serif;
    color: var(--black-color);
}

</style>