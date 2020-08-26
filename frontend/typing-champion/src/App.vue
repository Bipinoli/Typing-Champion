<template>
  <div id="app">
    <router-view @join='join' @host='host'/>
  </div>
</template>




<script>
export default {
  name: "App",
  methods: {
    join(nickname) {
      console.log(nickname, ' joined');
      this.$router.replace('/game');
    },
    host(nickname) {
      console.log('hosted by ', nickname);
      this.$router.replace('/game');
    }
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

</style>