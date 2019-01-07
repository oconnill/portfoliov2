<template>
  <div class="control-box-cont">
    <div class="control-box-title" v-bind:class="{ active: menuTitleActive }">
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
</template>

<script>
  import "../../public/controlBoxBody.scss";

  export default {
    name: "ControlBoxBody",
    data() {
      return {
        isOpen: false,
        developmentTitle: "",
        typedCount: 0
      };
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
    },
    methods: {
      activeClick(choice) {

        this.$store.dispatch("activeClick", choice);

        // this.$store.state.beenClicked = true;
        // this.$store.dispatch("menuChoice", choice);
        // this.menuTitleShow(choice);
        // this.vhCreator(this.menuOptions);
        // this.$store.state.isActive = true;
        // this.$store.state.menuTitleActive = true;
        // this.$store.state.singlePageView = false;
      },
      // vhCreator(projects) {
      //   for (var i = 1; i < projects.length; i++) {
      //     var project = {};
      //     if (i <= 0) {
      //       this.$store.state.menuOptions[i]["top"] = 10 + "vh";
      //     } else {
      //       this.$store.state.menuOptions[i]["top"] = i * 40 + "vh";
      //     }
      //   }
      // },
      openProject(choice) {
        this.$store.state.typedUrl = "";
        let results = this.menuOptions.filter(function(project) {
          return project.name == choice;
        });
        this.$store.dispatch("projectChoice", results);
        this.$store.state.singlePageView = true;
        this.typedCount = 0;
        this.typeWriter();
      },
      // menuTitleShow(choice) {
      //   let arr = this.$store.state.menuTitles;
      //   for (var i = 0; i < arr.length; i++) {
      //     var obj = arr[i];
      //     if (obj.title !== choice) {
      //       obj.show = false;
      //     }
      //   }
      // },
      typeWriter() {
        let speed = 50;
        let url = this.$store.state.projectAttributes[0]["demoLink"];
        if (this.typedCount < url.length) {
          this.$store.state.typedUrl += url.charAt(this.typedCount);
          this.typedCount++;
          setTimeout(this.typeWriter, speed);
        }
      }
    }
  };
</script>
