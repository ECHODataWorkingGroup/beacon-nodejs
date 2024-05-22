<script setup>

  import { ref, defineProps } from 'vue'
  const props = defineProps({
    colArr: Array,
    tehString: String
  })

  console.log(props)
  const applyCssToString = function(){

    const tehString = props.tehString
    const colArr = props.colArr
    const numColors = colArr.length 
   
    var retHtml = "" 
    var j = 0
    for( var i = 0; i < tehString.length; i++ ){ 
      retHtml += `<span style="color: ${colArr[j++ % numColors]};">${tehString.charAt(i)}</span>`
    } 
  
    return retHtml  
  }

</script>

<template>
  <span v-html="applyCssToString()"></span>
</template>
