<template>
  <div class="countdown">{{ formatSeconds(dtime) }}</div>
</template>


<script>
export default {
  name: 'Countdown',
  props: {
    time: Number
  },
  data() {
    return {
      dtime: this.time,
      elapsed: 0,
      timer: null,
    }
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.dtime -= 1;
        this.elapsed += 1;
        if (this.dtime <= 0) 
          this.over();
      },1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    over() {
      clearInterval(this.timer);
      this.$emit('timeUp');
    },
    getElapsedTime() {
      return this.elapsed;
    },
    formatSeconds(time) {
      return `${Math.floor(time/60)}:${time%60}`;
    }
  },
}
</script>



<style scoped>
.countdown {
  font-size: 24px;
}
</style>