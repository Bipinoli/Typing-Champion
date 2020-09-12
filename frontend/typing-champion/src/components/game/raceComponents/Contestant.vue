<template>
  <div class="contestant">
    <div class="speed-part">
      <div class="rank">{{decorateRank(rank)}}</div>
      <div class="wpm">{{wpm}} wpm</div>
    </div>
    <div class="race-track">
      <div class="racer" :class="{'racer-important': nameSpecial.length > 0}" :style="height"></div>
    </div>
    <div class="name-part">
      <div class="name" :class="{important: nameSpecial.length > 0}">{{name}}</div>
      <div class="name-special">{{nameSpecial}}</div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Contestant",
  props: {
    rank: {
      type: Number,
      default: -1,
    },
    wpm: Number,
    name: String,
    nameSpecial: {
      type: String,
      default: "",
    },
    progress: Number,
  },
  computed: {
    height() {
      let style = `height: ${this.progress}%;`;
      if (this.progress == 100) {
        if (this.nameSpecial.length > 0) {
          style += `
            background-color: var(--yellow-color);
            border-radius: 0;
          `;
        } else {
          style += `
            background-color: var(--light-yellow-color);
            border-radius: 0;
          `;
        }
      }
      return style;
    },
  },
  methods: {
    decorateRank(rank) {
      if (rank == -1) return "";
      if (rank == 1) return "1st";
      if (rank == 2) return "2nd";
      if (rank == 3) return "3rd";
      return rank + "th";
    },
  },
};
</script>



<style scoped>
.contestant {
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.speed-part {
  padding: 0.5rem;
  text-align: center;
}
.rank {
  font-weight: bold;
  min-height: 1.2em;
}
.race-track {
  width: 36px;
  height: 36vh;
  background-color: var(--white-color);
  display: grid;
  align-items: flex-end;
}
.racer {
  background-color: var(--light-green-color);
  width: 100%;
  height: 66%;
  border-radius: 50px 50px 0 0;
}
.racer-important {
  background-color: var(--green-color);
}
.name-part {
  text-align: center;
  padding: 0.5rem 0;
  width: 100%;
  justify-self: flex-end;
}
.important {
  font-weight: bold;
}
</style>