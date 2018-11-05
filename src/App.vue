<template>
  <div id="app">
    <div class="container">
        <div class="row">
            <div class="col small red"></div>
            <div class="col small blue"></div>
            <div class="col small">Here</div>
          </div>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import '../public/style.scss'
import '../node_modules/bootstrap/scss/bootstrap.scss';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
