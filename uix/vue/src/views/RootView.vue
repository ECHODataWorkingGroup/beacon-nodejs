<script setup>
  import colstr from '../components/ColorString.vue'

  // GreyBlue, Brick, Pale Gold, Sick Green
  const echoColors = [ '#84bcc9', '#b5472f', '#e6cd56', '#a3bd31' ]
  const sjdColors  = [ '#ff0000', '#942682', '#ec6500' ]
  const ga4ghColors = [ '#4faedc', '#1b75bb', '#8bc53f', '#f9a533', '#e34a3b', '#9f7ab0' ]
  const egaColors  = [ '#185177', '#5e9cc3', '#eb9662', '#f6c75e' ]

</script>
<style scoped>

  .center {
    text-align: center;
  } 
</style>

<template>
  <div class="center">
    <h3>Hello There!</h3>
    <h2>This is the</h2><colstr teh-string="ECHO"/>
    <h2>Beacon (v2) Landing Page.</h2>
  </div>
<p class="center">It's probably the case you want to be calling this API via programatic means, 
    rather than browsing it on the web...try: curl -XPOST ...</p>
</template>
