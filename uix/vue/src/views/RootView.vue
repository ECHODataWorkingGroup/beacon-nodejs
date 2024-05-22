<script setup>
  import colstr from '../components/ColorString.vue'
  // GreyBlue, Brick, Pale Gold, Sick Green
  const colArr = [ '#84bcc9', '#b5472f', '#e6cd56', '#a3bd31' ]

</script>

<style scoped>
  
  @font-face {
    font-family: 'montserrat';
    src: local('../assets/font-montserrat-thin.woff2') format("woff2"); 
  }

  * {
    font-family: 'montserrat';
    font-weight: 700;
  }

  .center {
    text-align: center;
  } 
</style>

<template>
  <div class="center">
    <h3>Hello! Intrepid BioInfo-type person!</h3>
    <h2>This is the</h2><colstr :colArr="colArr" tehString="ECHO"/><h2> (v2) Landing Page.</h2>
  </div>
<p class="center">It's probably the case you want to be calling this API via programatic means, 
    rather than browsing it on the web...try: curl -XPOST ...</p>
</template>
