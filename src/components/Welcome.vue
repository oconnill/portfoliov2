<template>
  <div>
    <div class="row">
      <div class="col-6"></div>
      <div class="col-6">
        <div class="world-box">
          <div class="world-gif">
            <img :src="getImgUrl(entireworld)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "../../public/welcome.scss";

  export default {
    name: "Welcome",
    data() {
      return {
        entireworld: "images/earthworld.gif"
      };
    },
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
