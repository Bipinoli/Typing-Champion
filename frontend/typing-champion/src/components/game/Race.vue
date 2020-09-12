<template>
  <div class="content">
    <div class="top-bar">
      <div class="navs">
        <div class="nav">Race</div>
        <div class="nav">Analytics</div>
      </div>
      <countdown :time="countdown" @timeUp="timeUp" ref="countdown"></countdown>
    </div>
    <div class="game-content">
      <div class="visuals">
        <div class="race">
          <contestant
            v-for="c in contestants"
            :key="c.id"
            :name="c.name"
            :nameSpecial="c.nameSpecial"
            :wpm="c.wpm"
            :rank="c.rank"
            :progress="c.progress"
          ></contestant>
        </div>
        <div
          class="text"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores maxime reiciendis veritatis temporibus excepturi ex, harum magnam et neque adipisci, recusandae voluptatem pariatur quidem possimus autem deleniti eaque doloremque architecto commodi saepe vel! Rerum dolores recusandae est consequatur laborum tempore, et molestias eveniet quos voluptate ea ullam officiis magnam amet doloremque non ipsa sit, inventore commodi mollitia id eligendi facilis quasi eius. Eum reprehenderit consectetur qui sunt enim tempore modi dolore pariatur. Earum eius vero iusto natus sint animi assumenda, omnis laboriosam reprehenderit nostrum tempore minus rerum alias aut sed impedit molestias saepe. Adipisci quisquam provident quaerat illum, vitae commodi modi! Quia sapiente ut illum dolore recusandae modi incidunt doloremque porro alias voluptates ipsa iste, odio itaque facere delectus in dolores adipisci iusto consequuntur fugit quam? Placeat voluptate consequuntur tempora recusandae, velit similique, animi, fuga magni tenetur vel blanditiis earum officiis voluptatem voluptas sit beatae hic harum quo mollitia esse maxime iure dolorum! Facere repellendus molestiae est rerum labore quidem vel corrupti quo odit unde eos veniam deleniti iste fugit quasi perferendis, quibusdam facilis laudantium, at accusamus nihil! Dolorem natus repellendus error? Similique numquam modi vitae animi reiciendis officia ad sunt ab amet? Nihil, nulla necessitatibus. Explicabo voluptatum dolore sed et, expedita ut necessitatibus sit quam ex possimus nobis id nesciunt molestias voluptates. Mollitia molestiae quae eos repudiandae? Aperiam, quo nesciunt? Expedita, a aliquam placeat quos dolores distinctio earum, officia, vero tenetur nemo necessitatibus perferendis. Sapiente exercitationem eos omnis quasi minus cupiditate. Voluptatem id voluptas qui nihil eveniet fugiat.</div>
      </div>
      <div class="text-input">Varius in eget v</div>
    </div>
    <div class="time-up" v-if="timeup">Time Up!</div>
  </div>
</template>



<script>
import Contestant from "@/components/game/raceComponents/Contestant";
import Countdown from "@/components/game/raceComponents/Countdown";

export default {
  name: "Race",
  components: { Contestant, Countdown },
  mounted() {
    this.$refs.countdown.start();
  },
  data() {
    return {
      timeup: false,
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
    timeUp() {
      this.timeup = true;
    },
  }
};
</script>



<style scoped>
.content {
  position: relative;
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
  display: grid;
  grid-template-rows: 86.5vh 48px;
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
.visuals {
  padding: 1rem 0;
  display: grid;
  grid-template-rows: 6.5fr 3.5fr;
}
.race {
  display: flex;
  justify-content: space-around;
}
.text {
  max-height: 100%;
  font-size: 18px;
  word-wrap: break-word;
  overflow-y: auto;
}
.text-input {
  height: 48px;
  border: 1px solid var(--gray-color);
  border-radius: 10px;
  display: grid;
  place-items: center;
}
.time-up {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-size: 3rem;
  letter-spacing: .15em;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, .7);
}
</style>