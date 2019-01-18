<template>
  <div class="mobile-reverse">
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
                  <!-- need a poster image -->
                  <video
                    :src="getImgUrl(image)"
                    poster="nice-default.jpg"
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
            <div class="" v-for="(image, key) in projectAttribute.images">
              <div
                class="comp-image-frame col-12"
                v-if="key !== 'featured_image'"
              >
                <img class="complementary-img" :src="getImgUrl(image)" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="row icon-box">
          <div class="col-3"></div>
          <div class="col-12 col-lg-8 ">
            <div class="">
              <div class="software-icon">
                <div class="outter-icon" v-for="icon in filtered">
                  <div class="inner-icon">
                    <img :src="getImgUrl(icon)" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1 red"></div>
        </div>
      </div>
    </div>
    <ControlBox></ControlBox>
  </div>
</template>

<script>
  import ControlBox from "./ControlBox.vue";
  import "../../public/backgrid.scss";

  export default {
    name: "app",
    components: {
      ControlBox
    },
    data() {
      return {
        sequence: [],
        sequenceLimit: 4,
        skillImages: {
          mysql: "software_icons/logo-mysql-170x115.png",
          vue: "software_icons/Vue.js_Logo.svg",
          wordpress: "software_icons/WordPress-logotype-alternative.png",
          html5: "software_icons/HTML5_Logo.svg",
          laravel: "software_icons/laravellogo.svg",
          javascript: "software_icons/JavaScript-logo.png",
          nodejs: "software_icons/nodejs.png",
          react: "software_icons/React-icon.svg",
          sass: "software_icons/sasslogo.png",
          mongo: "software_icons/MongoDB_Gray_Logo_FullColor_RGB-01.jpg"
        }
      };
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
      filtered() {
        if (this.$store.state.projectAttributes[0].skills) {
          let allowed = this.$store.state.projectAttributes[0].skills;

          let filtered = Object.keys(this.skillImages)
            .filter(key => allowed.includes(key))
            .reduce((obj, key) => {
              obj[key] = this.skillImages[key];
              return obj;
            }, {});

          return filtered;
        }
      },
      designPhoto() {
        return this.$store.state.designPhoto;
      },
      projectAttributes() {
        return this.$store.state.projectAttributes;
      },
      singlePageView() {
        return this.$store.state.singlePageView;
      },
      typedUrl() {
        return this.$store.state.typedUrl;
      }
    }
  };
</script>
