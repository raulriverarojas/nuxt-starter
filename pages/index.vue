<script >
import * as d3soccer from "d3-soccer";
pitch = d3_soccer.pitch()
  .height(300)                // Heigth of the SVG object (in pixels)
  .rotate(false)              // Rotate the pitch by 90 degrees
  .showDirOfPlay(false)       // Show an arrow on the plot to indicate the direction of play
  .shadeMiddleThird(false)    // Shade the middle third of the pitch
  .pitchStrokeWidth(.5)       // Strokewidth of the pitch lines
  .goals("line")              // Style used to draw the goals. Alternatives are "box" or a custom function.
  .clip([[0, 0], [105, 68]]); 
</script>


<template>
  <div>
    <AerialPitch props="pitch"/>
  </div>
</template>

<style scoped></style>
