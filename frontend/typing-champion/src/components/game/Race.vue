<template>
  <div class="content">
    <div class="top-bar">
      <div class="navs">
        <div class="nav">Race</div>
        <div class="nav">Analytics</div>
      </div>
      <countdown :time="countdown" @timeUp="finishGame" ref="countdown"></countdown>
    </div>
    <!-- <game-content :contestants="contestants" ref="gameContent"></game-content> -->
    <chart-content :raceData="raceData"></chart-content>
  </div>
</template>



<script>
import Countdown from "@/components/game/raceComponents/Countdown";
// import GameContent from "@/components/game/raceComponents/GameContent";
import ChartContent from "@/components/game/raceComponents/ChartContent";

export default {
  name: "Race",
  components: { Countdown, ChartContent },
  mounted() {
    this.$refs.countdown.start();
  },
  data() {
    return {
      countdown: 1005,
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
      raceData: [
        {
          name: "kikakikakiku",
          speed: [23, 21, 45, 46, 47, 49, 50, 53, 62, 70, 76, 64, 65],
          rank: "2nd",
        },
        {
          name: "dagarok",
          speed: [32, 30, 32, 45, 50, 51, 67, 75, 82, 92, 72],
          rank: "1st",
        },
        {
          name: "naruto",
          speed: [
            20,
            10,
            12,
            30,
            20,
            22,
            10,
            30,
            22,
            21,
            10,
            11,
            9,
            12,
            19,
            32,
            28,
            27,
            29,
            11,
            12,
            13,
            14,
          ],
          rank: "time up",
        },
        {
          name: "kagayari32x",
          speed: [
            20,
            32,
            34,
            45,
            33,
            21,
            50,
            45,
            50,
            30,
            51,
            52,
            55,
            43,
          ],
          rank: "3rd",
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