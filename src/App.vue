<template>
  <div class="container">
      <div id="app">
        <BackGrid>
            <ControlBox></ControlBox>
        </BackGrid>
        </div>
  </div>
</template>

<script>
  import BackGrid from './components/BackGrid.vue'


  import '../node_modules/bootstrap/scss/bootstrap.scss';

  export default {
    name: 'app',
    components: {
      ControlBox,
      BackGrid
    }
  }
</script>