<template>
  <div>
      <div class="row">
          <div class="col-6"></div>
          <div class="col-6 right-center"></div>
      </div>
  </div>
</template>

<script>
  import "../../public/welcome.scss";

  export default {
    name: "app",
    components: {},
    methods: {
        getImgUrl(imgUrl) {
        if (imgUrl) {
          return require("../assets/" + imgUrl);
        }
      }
    },
    computed: {}
  };
</script>
