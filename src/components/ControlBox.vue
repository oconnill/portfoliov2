<template>
  <div>
    <div v-bind:class="{ active: isActive }" class="control-box">
      <div class="control-header">
        <div class="logo-font">Daniel O'Connell</div>
        <div class="logo-icon" @click="menuReset()">
          <div class="do-logo">
            <div class="do-logo-d"><a href="#"></a></div>
            <div class="do-logo-o"><a href="#"></a></div>
          </div>
        </div>
      </div>
      <ControlBoxBody></ControlBoxBody>
      <div class="control-footer">
        <a href="https://www.linkedin.com/in/danieloconne11/" target="_blank"
          ><i class="fab fa-linkedin-in"></i
        ></a>
        <a href="https://github.com/oconnill" target="_blank"
          ><i class="fab fa-github"></i
        ></a>
        <a href="mailto: daniel.richard.oconnell@gmail.com" target="_blank"
          ><i class="far fa-envelope"></i
        ></a>
      </div>
    </div>
    <ControlBoxMobile v-on:reset="menuReset()"></ControlBoxMobile>
  </div>
</template>

<script>
  import ControlBoxBody from "./ControlBoxBody.vue";
  import ControlBoxMobile from "./ControlBoxMobile.vue";

  import "../../public/controlBox.scss";

  export default {
    name: "app",
    components: {
      ControlBoxBody,
      ControlBoxMobile
    },
    methods: {
      menuReset() {
        this.$store.state.beenClicked = false;
        this.$store.state.isActive = false;
        this.$store.state.singlePageView = false;
        this.$store.state.menuTitleActive = false;
        this.$store.state.welcome = true;
        this.menuTitleReset();
        this.$store.dispatch("menuReset");
      },
      menuTitleReset() {
        let arr = this.$store.state.menuTitles;

        for (var i = 0; i < arr.length; i++) {
          arr[i].show = true;
        }
      }
    },
    computed: {
      isActive() {
        return this.$store.state.isActive;
      },
      menuTitles() {
        return this.$store.state.menuTitles;
      }
    }
  };
</script>
