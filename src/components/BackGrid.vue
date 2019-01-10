<template>
  <div class="mobile-reverse">
    <div>
      <div class="back-grid row" v-show="!singlePageView">
        <div class="col-3"></div>
        <div
          class="backgroundGridImage col-3"
          v-if="menuOptions.length > 3"
          v-for="(menuOption, index) in menuOptions"
          v-bind:style="{ top: menuOption.top }"
          v-bind:class="{outlined: menuOption.outlined}"
          :load="sequenceGenerator()"
        >
          {{ menuOption.name }}
        </div>
      </div>

      <div class="row" v-show="singlePageView">
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
          <!-- demo link by using key value and value for url -->
          <div class="project-text-block">
            {{ projectAttribute.description }}
          </div>
        </div>
        <div class="col-1 red"></div>
      </div>

        <div class="row">
          <div v-for="projectAttribute in projectAttributes" class="col-12">
            <div class="" v-for="(image, key) in projectAttribute.images">
              <div class="comp-image-frame" v-if="key !== 'featured_image'">
                <img class="complementary-img" :src="getImgUrl(image)" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="row icon-box">
          <div class="" v-for="projectAttribute in projectAttributes">
            <div class="software-icon">
              <div class="outter-icon" v-for="icon in filtered">
                <div class="inner-icon">
                    <img :src="getImgUrl(icon)" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      

      <!-- alters display for full images mostly for design possible programatic way to do so with fewer lines -->
      <!-- <div class="col-10 green">
          <div class="mock-up-frame">
            <img src="@/assets/images/blacklineproductions_big_logo.png" alt="/src/assets/images/blacklineproductions_big_logo.png">
          </div>
        </div> -->
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
          vue: "software_icons/Vue.js_Logo.svg",
          wordpress: "software_icons/WordPress-logotype-alternative.png",
          html5: "software_icons/HTML5_Logo.svg",
          laravel: "software_icons/laravellogo.svg",
          mysql: "software_icons/logo-mysql-170x115.png",
          nodejs: "software_icons/nodejs.png"
        }
      };
    },
    methods: {
      // log() {
      //   setInterval(setOutline, 3000);
      //   debugger;

      //   function setOutline(i) {
      //     debugger;
      //     this.$store.state.menuOptions[i].outlined = true ? false : true;
      //   }

      //   // let choice = Math.floor(Math.random() * this.menuOptions.length);

      //   for (var i = 0; i < this.menuOptions.length; i++) {
      //     // let outlinedChoice = this.menuOptions[i];
      //     setOutline(i);
      //   }
      // },
      getSkills(skillsArray) {
        let allowed = skillsArray;

        this.filtered = Object.keys(this.skillImages)
          .filter(key => allowed.includes(key))
          .reduce((obj, key) => {
            obj[key] = this.skillImages[key];
            return obj;
          }, {});
      },
      getImgUrl(imgUrl) {
        return require("../assets/" + imgUrl);
      },
      menuReset() {
        this.$store.dispatch("menuReset");
      },
      sequenceGenerator() {
        while (this.sequenceLimit >= 0) {
          let n = Math.floor(Math.random() * this.menuOptions.length);
          this.sequence.push(n);
          this.sequenceLimit--;
        }
        //// run a loop that choses these indexes and than outlines them with an interval to call it again with a fresh sequence
      }
    },
    computed: {
      menuOptions() {
        return this.$store.state.menuOptions;
      },
      filtered() {
        let allowed = this.$store.state.projectAttributes[0].skills;

        let filtered = Object.keys(this.skillImages)
          .filter(key => allowed.includes(key))
          .reduce((obj, key) => {
            obj[key] = this.skillImages[key];
            return obj;
          }, {});

        return filtered;
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
