<template>
    <div class="row icon-box">
      <div class="col-3"></div>
      <div class="col-12 col-lg-8 ">
        <div class="">
          <div class="software-icon">
            <div class="outter-icon" v-for="icon in filtered" :key="icon">
              <div class="inner-icon">
                <img :src="getImgUrl(icon)" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1 red"></div>
    </div>
</template>

<script>
  import "../../public/softwareicons.scss";

  export default {
    name: "SoftwareIcons",
    components: {},
    data() {
      return {
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
      getImgUrl(imgUrl) {
        if (imgUrl) {
          return require("../assets/" + imgUrl);
        }
      }
    },
    computed: {
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
      }
    }
  };
</script>
