<template>
  <div class="container">
      <div id="app">
        <BackGrid></BackGrid>
        </div>
  </div>
</template>

<script>
  import BackGrid from './components/BackGrid.vue'
  import '../node_modules/bootstrap/scss/bootstrap.scss';
  import '../public/style.scss';

  export default {
    name: 'app',
    components: {
      BackGrid
    }
  }
</script>