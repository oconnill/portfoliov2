<template>
  <div>
    <div class="container">
      <Welcome v-show="areYouWelcome"></Welcome>

      <StaggeredImageGrid></StaggeredImageGrid>

      <SinglePageView></SinglePageView>
    </div>
  </div>
</template>

<script>
  import Welcome from "./Welcome.vue";
  import StaggeredImageGrid from "./StaggeredImageGrid.vue";
  import SinglePageView from "./SinglePageView.vue";

  import "../../public/backgrid.scss";

  export default {
    name: "app",
    components: {
      Welcome,
      StaggeredImageGrid,
      SinglePageView
    },
    data() {
      return {};
    },
    methods: {
      //Logs Data from template when needed
      // log(data) {
      //   console.log(data);
      // },
      getImgUrl(imgUrl) {
        if (imgUrl) {
          return require("../assets/" + imgUrl);
        }
      },
      menuReset() {
        this.$store.dispatch("menuReset");
      },
      openProject(choice) {
        this.$store.dispatch("openProject", choice);
        this.typedCount = 0;
        this.typeWriter();
      },
      typeWriter() {
        let speed = 50;
        let url = this.$store.state.projectAttributes[0]["demoLink"];
        if (this.typedCount < url.length) {
          this.$store.state.typedUrl += url.charAt(this.typedCount);
          this.typedCount++;
          setTimeout(this.typeWriter, speed);
        }
      }
    },
    computed: {
      menuOptions() {
        return this.$store.state.menuOptions;
      },
      singlePageView() {
        return this.$store.state.singlePageView;
      },
      areYouWelcome() {
        return this.$store.state.welcome;
      }
    }
  };
</script>
