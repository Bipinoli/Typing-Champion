<template>
  <div class="before-race">
    <div class="content" v-if="isHost">
      <div class="time">6:00</div>
      <div class="btn text" @click='startRace'>Start Race</div>
    </div>
    <div class="content" v-else>
      <div class="text">Host hasn't started the race yet</div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'BeforeRace',
  props: {
    isHost: Boolean,
  },
  methods: {
    startRace() {
      alert('start race');
    },
  },
}
</script>



<style scoped>
.before-race {
  display: grid;
  place-items: center;
}
.time {
  padding-bottom: 2rem;
  font-weight: 600;
  font-size: 4rem;
}
.text {
  font-size: 3rem;
}
.btn {
  height: 6rem;
  width: 28rem;
  background-color: var(--green-color);
  color: white;
  border-radius: 10px;
  display: grid;
  place-items: center;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}
.btn:hover {
  cursor: pointer;
}
</style>