<template>
  <div>

    <div class="control-box-mobile sticky-top">

      <div class="control-header">
        <div class="logo-font">Daniel O'Connell</div>
        <div class="logo-icon" @click="$emit('reset')">
          <div class="do-logo">
            <div class="do-logo-d"></div>
            <div class="do-logo-o"></div>
          </div>
        </div>
      </div>
     
        <div
          class="mobile-menu-option-title"
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
</template>

<script>
  import "../../public/controlBox.scss";

  export default {
    name: "app",
    data() {
      return {
        typedCount: 0
      };
    },
    methods: {
      activeClick(choice) {
        this.$store.dispatch("activeClick", choice);
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
