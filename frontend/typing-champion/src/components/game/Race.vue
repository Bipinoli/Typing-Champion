<template>
  <div class="content">
    <div class="top-bar">
      <div class="navs">
        <div class="nav">Race</div>
        <div class="nav">Analytics</div>
      </div>
      <countdown :time="countdown" @timeUp="finishGame" ref="countdown"></countdown>
    </div>
    <game-content :contestants="contestants" ref="gameContent"></game-content>
  </div>
</template>



<script>
import Countdown from "@/components/game/raceComponents/Countdown";
import GameContent from "@/components/game/raceComponents/GameContent";

export default {
  name: "Race",
  components: { Countdown, GameContent },
  mounted() {
    this.$refs.countdown.start();
  },
  data() {
    return {
      countdown: 5,
      contestants: [
        {
          id: 0,
          name: "kikakukakiku",
          nameSpecial: "(you)",
          wpm: 20,
          rank: 1,
          progress: 100,
        },
        {
          id: 1,
          name: "naruto",
          nameSpecial: "",
          wpm: 42,
          rank: -1,
          progress: 60,
        },
        {
          id: 2,
          name: "davidZoxt",
          nameSpecial: "",
          wpm: 21,
          rank: -1,
          progress: 72.6,
        },
        {
          id: 3,
          name: "romolus",
          nameSpecial: "",
          wpm: 33,
          rank: 2,
          progress: 100,
        },
        {
          id: 4,
          name: "romolus",
          nameSpecial: "",
          wpm: 33,
          rank: 3,
          progress: 100,
        },
      ],
    };
  },
  methods: {
    finishGame() {
      this.$refs.gameContent.stopGameTimeUp();
    },
  },
};
</script>



<style scoped>
.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0.2rem 1.5rem;
}
.top-bar {
  flex: 0.05;
}
.game-content {
  flex: 0.95;
}
.top-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navs {
  display: flex;
}
.nav {
  font-size: 18px;
  padding: 0.5rem;
  border-bottom: 2px solid var(--yellow-color);
  margin-right: 1rem;
}
.nav:hover {
  cursor: pointer;
}
</style>