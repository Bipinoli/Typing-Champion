<template>
  <div id="app" class="main">
    <race></race>
    <div class="chat"></div>
  </div>
</template>




<script>

import Race from '@/components/game/Race';

export default {
  name: "App",
  components: {
    Race,
  },
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
    border: 2px solid var(--gray-color);
}


</style>