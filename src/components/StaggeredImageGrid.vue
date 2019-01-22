<template>
  <div>
    <div class="back-grid row" v-show="!singlePageView">
      <div class="col-3"></div>
      <div
        class="backgroundGridImage col-3"
        v-if="menuOptions.length > 3"
        v-for="menuOption in menuOptions"
        v-bind:style="{ top: menuOption.top }"
      >
        <div v-bind:class="{outlined: menuOption.outlined}">
          <a
            v-if="!menuOption.thumbnail_movie"
            @mouseover="boxOutline(menuOption)"
            @mouseleave="boxOutlineLeave(menuOption)"
            href="#"
            @click="openProject(menuOption.name)"
          >
            <img
              class="thumbnail"
              :src="getImgUrl(menuOption.thumbnail)"
              alt=""
            />
          </a>
          <div v-if="(menuOption.thumbnail_movie)">
            <video
              :src="getImgUrl(menuOption.thumbnail_movie)"
              poster="nice-default.jpg"
              autoplay
              loop
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "../../public/welcome.scss";

  export default {
    name: "StaggeredImageGrid",
    components: {},
    methods: {
      getImgUrl(imgUrl) {
        if (imgUrl) {
          return require("../assets/" + imgUrl);
        }
      },
      boxOutline(project) {
        project.outlined = true;
      },
      boxOutlineLeave(project) {
        project.outlined = false;
      },
      openProject(choice) {
        this.$store.dispatch("openProject", choice);
        this.typedCount = 0;
        this.typeWriter();
      }
    },
    computed: {
      menuOptions() {
        return this.$store.state.menuOptions;
      },
      singlePageView() {
        return this.$store.state.singlePageView;
      },
    }
  };
</script>
