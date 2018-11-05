<template>
  <div id="app">
<ControlBox></ControlBox>
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

