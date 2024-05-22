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
