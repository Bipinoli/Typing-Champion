<template>
  <div id="app">
    <div class="main">
      <div class="content">content here</div>
      <Chat class="chat"></Chat>
    </div>
  </div>
</template>


<script>

import Chat from '@/components/chat/Chat.vue';

export default {
  name: "Game",
  components: {
    Chat,
  }
}
</script>


<style scoped>

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