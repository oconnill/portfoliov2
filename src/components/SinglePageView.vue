<template>
  <div>
    <div v-show="singlePageView">
      <div class="row">
        <div class="col-3 red"></div>
        <div
          class="col-12 col-lg-8 green"
          v-for="projectAttribute in projectAttributes"
        >
          <div class="project-title">
            <h2>{{ projectAttribute.name }}</h2>
          </div>
          <div v-bind:class="projectAttribute.type">
            <div class="browser-input">{{ typedUrl }}</div>
            <div
              class="mock-up-frame"
              v-for="(image, key) in projectAttribute.images"
            >
              <div v-if="key == 'featured_image'">
                <img :src="getImgUrl(image)" v-bind:alt="image" />
              </div>
              <div v-if="key == 'movie1'">
                <video
                  :src="getImgUrl(image)"
                  :poster="getImgUrl(placeholderWatch.placeholder)"
                  autoplay
                  loop
                ></video>
              </div>
            </div>
          </div>
          <div class="project-text-block">
            {{ projectAttribute.description }}
          </div>
        </div>
        <div class="col-1 red"></div>
      </div>

      <div class="row" v-if="designPhoto">
        <div v-for="projectAttribute in projectAttributes">
          <div v-for="(image, key) in projectAttribute.images">
            <div
              class="comp-image-frame col-12"
              v-if="key !== 'featured_image'"
            >
              <img class="complementary-img" :src="getImgUrl(image)" alt="" />
            </div>
          </div>
        </div>
      </div>

      <SoftwareIcons></SoftwareIcons>

    </div>
  </div>
</template>

<script>
  import "../../public/singlepageview.scss";
  import SoftwareIcons from "./SoftwareIcons.vue";

  export default {
    name: "SinglePageView",
    components: {
      SoftwareIcons
    },
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
      projectAttributes() {
        return this.$store.state.projectAttributes;
      },
      typedUrl() {
        return this.$store.state.typedUrl;
      },
      designPhoto() {
        return this.$store.state.designPhoto;
      },
      placeholderWatch() {
        if (this.$store.state.projectAttributes.length > 0) {
          return this.$store.state.projectAttributes[0].images;
        }
      }
    }
  };
</script>
