<template>
  <div id="app">
    <div class="main">
      <div class="content">content here</div>
      <Chat class="chat"></Chat>
    </div>
  </div>
</template>


<script>

import Chat from '@/components/chat/Chat.vue'

export default {
  name: "App",
  components: {
    Chat,
  }
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




.main {
    width: 100vw;
    height: 100vh;
    display: flex;
}
.content {
    flex: .75;
    border-right: 0px;
    display: grid;
    place-items: center;
}
.chat {
    flex: .25;
}




</style>