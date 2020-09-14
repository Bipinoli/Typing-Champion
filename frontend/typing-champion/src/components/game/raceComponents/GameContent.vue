<template>
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
      <div class="text">
        <span class="text-correct">{{ textCorrect }}</span>
        <span class="text-wrong">{{ textWrong }}</span>
        <span class="text-left">{{ textLeft }}</span>
      </div>
    </div>
    <input
      class="text-input"
      placeholder="type here"
      @keydown="writeText($event)"
      :value="trailingText"
      ref="textInput"
    />
    <div class="time-up" v-if="timeup">Time Up!</div>
  </div>
</template>



<script>
import Contestant from "@/components/game/raceComponents/Contestant";

export default {
  name: "GameContent",
  components: { Contestant },
  props: ['contestants'],
  data() {
    return {
      timeup: false,
      progress: 0,
      wpm: 0,
      currPtr: 0,
      correctPtr: 0,
      trailingText: "",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores maxime reiciendis veritatis temporibus excepturi ex, harum magnam et neque adipisci, recusandae voluptatem pariatur quidem possimus autem deleniti eaque doloremque architecto commodi saepe vel! Rerum dolores recusandae est consequatur laborum tempore, et molestias eveniet quos voluptate ea ullam officiis magnam amet doloremque non ipsa sit, inventore commodi mollitia id eligendi facilis quasi eius. Eum reprehenderit consectetur qui sunt enim tempore modi dolore pariatur. Earum eius vero iusto natus sint animi assumenda, omnis laboriosam reprehenderit nostrum tempore minus rerum alias aut sed impedit molestias saepe. Adipisci quisquam provident quaerat illum, vitae commodi modi! Quia sapiente ut illum dolore recusandae modi incidunt doloremque porro alias voluptates ipsa iste, odio itaque facere delectus in dolores adipisci iusto consequuntur fugit quam? Placeat voluptate consequuntur tempora recusandae, velit similique, animi, fuga magni tenetur vel blanditiis earum officiis voluptatem voluptas sit beatae hic harum quo mollitia esse maxime iure dolorum! Facere repellendus molestiae est rerum labore quidem vel corrupti quo odit unde eos veniam deleniti iste fugit quasi perferendis, quibusdam facilis laudantium, at accusamus nihil! Dolorem natus repellendus error? Similique numquam modi vitae animi reiciendis officia ad sunt ab amet? Nihil, nulla necessitatibus. Explicabo voluptatum dolore sed et, expedita ut necessitatibus sit quam ex possimus nobis id nesciunt molestias voluptates. Mollitia molestiae quae eos repudiandae? Aperiam, quo nesciunt? Expedita, a aliquam placeat quos dolores distinctio earum, officia, vero tenetur nemo necessitatibus perferendis. Sapiente exercitationem eos omnis quasi minus cupiditate. Voluptatem id voluptas qui nihil eveniet fugiat.",
      textCorrect: "",
      textWrong: "",
      textLeft: "",
    };
  },
  created() {
    this.textLeft = this.text;
  },
  methods: {
    writeText(e) {
      e.preventDefault();
      this.handleInput(e);
      this.textCorrect = this.text.slice(0, this.correctPtr);
      this.textWrong = this.text.slice(this.correctPtr, this.currPtr);
      this.textLeft = this.text.slice(this.currPtr);
      this.progress = Math.floor(this.textCorrect.length / this.text.length);
      this.wpm = Math.floor(
        this.textCorrect.length /
          ((5 * this.$refs.countdown.getElapsedTime()) / 60)
      );
    },
    handleInput(e) {
      if (e.key.length > 1 && e.key != "Backspace") return;
      if (!/[a-zA-Z,.;: !_\-'"?@%&#$]/.test(e.key)) return;
      if (e.key == "Backspace" && this.trailingText == "") return;
      if (e.key == "Backspace") {
        this.correctPtr =
          this.correctPtr == this.currPtr
            ? Math.max(0, this.correctPtr - 1)
            : this.correctPtr;
        this.currPtr = Math.max(0, this.currPtr - 1);
        this.trailingText = this.trailingText.slice(0, -1);
        return;
      }
      if (
        this.currPtr == this.correctPtr &&
        e.key == this.text.charAt(this.currPtr)
      ) {
        this.currPtr += 1;
        this.correctPtr += 1;
        this.trailingText += e.key;
        if (e.key == " ") this.trailingText = "";
        return;
      }
      this.currPtr += 1;
      this.trailingText += e.key;
    },
    stopGameTimeUp() {
      this.timeup = true;
    },
  },
};
</script>



<style scoped>
.game-content {
  position: relative;
  display: grid;
  grid-template-rows: 86.5vh 48px;
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
.text-correct {
  color: var(--green-color);
}
.text-wrong {
  color: var(--red-color);
}
.text-input {
  height: 48px;
  border: 1px solid var(--gray-color);
  border-radius: 10px;
  text-align: center;
  font-size: 1.125rem;
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
  letter-spacing: 0.15em;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.7);
}
</style>