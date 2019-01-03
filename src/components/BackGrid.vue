<template>
  <div>
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
        <div class="col-3 red"></div>

        <div class="col-9 green" v-for="projectAttribute in projectAttributes">
          <h2>{{ projectAttribute.name }}</h2>
          <div v-bind:class="projectAttribute.type">
            <div class="browser-input">{{ typedUrl }}</div>
            <div class="mock-up-frame">
              <img src="https://picsum.photos/1200/600/?random" />
            </div>
          </div>

          <div class="project-text-block">
            {{ projectAttribute.description }}
          </div>
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
      return {};
    },
    methods: {
      menuReset() {
        this.$store.dispatch("menuReset");
      },
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
