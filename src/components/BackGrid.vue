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
          {{ menuOption.name }}
        </div>
      </div>

      <div class="row" v-show="singlePageView">
        <div class="col-4 red"></div>

        <div class="col-12 col-lg-8 green" v-for="projectAttribute in projectAttributes">
          <div class="project-title">
            <h2>{{ projectAttribute.name }}</h2>
          </div>
          <div v-bind:class="projectAttribute.type">
            <div class="browser-input">{{ typedUrl }}</div>
            <div class="mock-up-frame">
              <img src="https://picsum.photos/1240/790/?random" />
            </div>
          </div>

          <div class="project-text-block">
            {{ projectAttribute.description }}
          </div>
        </div>
        <!-- alters display for full images mostly for design possible programatic way to do so with fewer lines -->
        <!-- <div class="col-10 green">
          <div class="mock-up-frame">
            <img src="@/assets/images/blacklineproductions_big_logo.png" alt="/src/assets/images/blacklineproductions_big_logo.png">
          </div>
        </div> -->
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
      return {};
    },
    methods: {
      menuReset() {
        this.$store.dispatch("menuReset");
      }
    },
    computed: {
      menuOptions() {
        return this.$store.state.menuOptions;
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
