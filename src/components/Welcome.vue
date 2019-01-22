<template>
  <div>
    <div class="row">
      <div class="col-6"></div>
      <div class="col-6 right-center">
        <div class=world-box>
            <div class="world-gif">HEERE I AM</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "../../public/welcome.scss";

  export default {
    name: "Welcome",
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
