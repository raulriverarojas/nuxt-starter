<script >
import * as d3 from "d3"
export default {
  props: {
    pitch: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      // Create the chart using D3
      const chart = d3.create('div')
        .attr("class", "d3-soccer dark-theme")
        .style("width", this.pitch.width() + "px")
        .style("background-color", "black")
        .call(this.pitch); // Assuming `pitch` is a valid D3 function or selection

      // Append the created chart to the container
      this.$refs.chartContainer.appendChild(chart.node());
    }
  }
};
</script>

<template>
  <div class="pitch">
  </div>
</template>

<style scoped></style>
