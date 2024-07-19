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

  .subscript {
    font-size: 54%;
  }

</style>

<template>
  <div class="center">
    <p>Hello There!</p>
    <p>You have found a Beacon of Genomic Variations!</p>
    This particular instance is curated by the
      <a href="https://www.sjdhospitalbarcelona.org/en">
        <colstr :colArr="sjdColors" teh-string="SJD"/>
      </a> Children's Hospital, located in Barcelona.

    <p> It is part of the
      <a href="https://www.echohospitals.org/">
        <colstr teh-string="ECHO"/>
      </a> Hospitals Network.
    </p>

    <p>Please <router-link :to="{ name: 'authLogin' }">Login</router-link> to begin.</p>
    <div class="subscript">
    Based on the
      <a href="https://www.ga4gh.org/product/beacon-api/">
       <colstr :colArr="ga4ghColors" teh-string="GA4GH"/>
      </a> Beacon (v2) Specification<br/>and
      <a href="https://github.com/EGA-archive/beacon2-ri-api">
        <colstr :colArr="egaColors" teh-string="EGA"/>
      </a> Reference Implementation.
    </div>
</div>
</template>
