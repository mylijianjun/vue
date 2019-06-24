<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @media screen and (min-width:900px) {
    html {
      font-size: 50px
    }
  }
  *{ margin: 0; padding: 0}
  html{
    font-size:13.33333333vw;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.4rem;
  color: #2c3e50;
}
</style>
