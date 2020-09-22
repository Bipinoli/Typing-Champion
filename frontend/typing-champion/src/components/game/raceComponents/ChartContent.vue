<template>
  <canvas ref="chart"></canvas>
</template>


<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
<script>
export default {
  name: "ChartContent",
  props: ["raceData"],
  // raceData = [
  //     {
  //       name: 'kikakikakiku',
  //       speed: [23, 21, 45, 46, 47, 49, 50, 53, 62, 70, 76, 64, 65],
  //       rank: '2nd',
  //     },
  //      ......
  //   ];
  mounted() {
    if (document.getElementById("chart-js")) return; // was already loaded
    var scriptTag = document.createElement("script");
    scriptTag.src = "https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js";
    scriptTag.id = "chart-js";
    document.getElementsByTagName("head")[0].appendChild(scriptTag);

    scriptTag.addEventListener('load', () => {
      showChart(this.$refs.chart.getContext("2d"), this.raceData);
    });
  },
};


function getMaxArrayLength(data) {
  let retval = -1;
  for (let i=0; i<data.length; i++) {
    retval = Math.max(retval, data[i].speed.length);
  }
  return retval;
}

function showChart(context, data) {
  const MAX_LEN = getMaxArrayLength(data);
  Chart.defaults.derivedLine = Chart.defaults.line;

  let custom = Chart.controllers.line.extend({
    draw: function (ease) {
      // Call super method first
      Chart.controllers.line.prototype.draw.call(this, ease);

      // drawing customization
      let meta = this.getMeta();
      let pt0 = meta.data[meta.data.length - 1];
      let radius = pt0._view.radius + 5;

      let ctx = this.chart.chart.ctx;
      ctx.save();
      ctx.strokeStyle = "red";
      ctx.lineWidth = 1;
      ctx.font = "24px Sans-serif";
      ctx.fillText(this._config.rank, pt0._view.x + 12, pt0._view.y - 18);
      ctx.beginPath();
      ctx.arc(pt0._view.x, pt0._view.y, 8, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();
    },
  });

  // Stores the controller so that the chart initialization routine can look it up with
  // Chart.controllers[type]
  Chart.controllers.derivedLine = custom;

  let _chartData = {
    labels: [...Array(MAX_LEN + 5).keys()],
    datasets: [],
  };
  for (let i = 0; i < data.length; i++) {
    _chartData.datasets.push({
      label: data[i].name,
      rank: data[i].rank,
      data: [0, ...data[i].speed],
      backgroundColor: "rgb(255, 99, 132)",
      fill: false,
      lineTension: 0.3,
      borderColor: "rgb(255, 99, 132)",
    });
  }

  let chart = new Chart(context, {
    type: "derivedLine",
    data: _chartData,
  });
};
  
</script>


<style scoped>
</style>