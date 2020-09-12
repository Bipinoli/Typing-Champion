<template>
  <div class="content" :class='{animate: curState >= 1}'>
    {{states[curState]}}
  </div>
</template>
}

<script>
export default {
  name: 'BeginRaceCountdown',
  data() {
    return {
      states: ['ready', '3', '2', '1', 'Go!'],
      curState: 0, 
    };
  },
  created() {
    prepareGame().then(data => {
      setInterval(()=> {
        console.log(data);
        this.changeState();
      }, 1000);
    });  
  },
  methods: {
    changeState() {
      this.curState += 1;
      if (this.curState == this.states.length) {
        // alert('state overflow');
        this.curState = 0;
      }
    }
  }
}


function prepareGame() {
  return new Promise((resolve, reject) => {
    try {
      resolve({text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos provident laborum assumenda? Delectus sint provident, pariatur dolores repudiandae rem aperiam commodi harum rerum eum ut odio vitae explicabo, illum suscipit."})
    } catch (e) {
      reject(e);
    }
  });
}
</script>


<style scoped>
.content {
  display: grid;
  place-items: center;
  font-size: 4rem;
}
.animate {
  animation: scaleAnim 1s ease infinite;
}

@keyframes scaleAnim {
  0% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>