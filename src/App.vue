<template>
  <div class="container">
      <div id="app">
          <ControlBox></ControlBox>
        </div>
  </div>
</template>

<script>
  import ControlBox from './components/ControlBox.vue'

  import '../node_modules/bootstrap/scss/bootstrap.scss';

  export default {
    name: 'app',
    components: {
      ControlBox
    }
  }
</script>