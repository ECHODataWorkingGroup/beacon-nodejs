<script setup>
</script>

<template>
  <nav>
    <!-- <div v-if="!hasAuthed"> -->
    <!-- <div v-else> -->
    <!-- </div> -->
    <router-link :to="{ name: 'authLogin' }">Login</router-link> |
    <router-link :to="{ name: 'getBeaconRoot' }">Home</router-link> |
    <router-link :to="{ name: 'getBeaconInfoRoute' }">BeaconInfo</router-link> |
    <router-link :to="{ name: 'getBeaconModels' }">Models</router-link>
  </nav>

<Suspense>
  <router-view>
  </router-view>
</Suspense>

</template>

<style>
  
  @font-face {
    font-family: 'montserrat';
    src: local('../assets/font-montserrat-thin.woff2') format("woff2"); 
  }

  :root {
    /* INDP */
    --color-bluegrey: #b0cedc;
    --color-dark-grey-blue: #405a74;
    --color-silver: #cee1e6;
    /* ECHO */
    --color-grey-blue:    #84bcc9; /* E */
    --color-red-brick:    #b5472f; /* C */
    --color-pale-gold:    #e6cd56; /* H */
    --color-hosp-green:   #a3bd31; /* O */
    --color-almost-black: #0f0f0f;
    --color-pale-grey:    #e8e8e8;
    --color-ice-blue:     #c5e3ea;
    /* SJD */
    --color-fire-engine-red: #ff0000; /* S */
    --color-warm-purple:     #942682; /* J */
    --color-orange:          #ec6500; /* D */
    /* GA4GH */
    --color-cool-blue : #4faedc;
    --color-bluish:     #1b75bb;
    --color-leaf:       #8bc53f;
    --color-mango:      #f9a533;
    --color-coral:      #e34a3b;
    --color-dark-lilac: #9f7ab0;
  }

  body {
    background-color: #0f0f0f;
    /* color: #f0f0ff; */
    color: #84bcc9;
    font-family: 'montserrat', Helvetica, Arial, sans-serif;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

div {
    color: #84bcc9;
}


#app {
/*  text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
