<template>
  <div>
    <div class="control-box-mobile sticky-top">
      <div class="control-header">
        <div class="logo-font">Daniel O'Connell</div>
        <div class="logo-icon" @click="menuReset()">
          <div class="do-logo">
            <div class="do-logo-d"></div>
            <div class="do-logo-o"></div>
          </div>
        </div>
      </div>
      <div class="">
        <div
          class="control-box-title"
          v-bind:class="{ active: menuTitleActive }"
        >
          <h3
            class="menu-option-title"
            v-for="menuTitle in menuTitles"
            v-show="menuTitle.show"
            @click="activeClick(menuTitle.title)"
          >
            {{ menuTitle.title }}
          </h3>
        </div>
        <div v-show="beenClicked">
          <div class="control-box-body">
            <ul>
              <li
                v-for="menuOption in menuOptions"
                @click="openProject(menuOption.name)"
              >
                <h3>{{ menuOption.name }}</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ControlBox from "./ControlBox.vue";
  import ControlBoxBody from "./ControlBoxBody.vue";
  import "../../public/controlBox.scss";

  export default {
    name: "app",
    components: {
      ControlBox,
      ControlBoxBody
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
      beenClicked() {
        return this.$store.state.beenClicked;
      },
      menuTitleActive() {
        return this.$store.state.menuTitleActive;
      },
      menuTitles() {
        return this.$store.state.menuTitles;
      }
    }
  };
</script>
