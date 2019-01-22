<template>
  <div id="app" class="mobile-reverse">
      <BackGrid></BackGrid>
      <ControlBox></ControlBox>
  </div>
</template>

<script>
  import BackGrid from "./components/BackGrid.vue";
  import ControlBox from "./components/ControlBox.vue"

  import "../node_modules/bootstrap/scss/bootstrap.scss";
  import "../public/style.scss";

  export default {
    name: "app",
    components: {
      BackGrid,
      ControlBox
    }
  };
</script>
