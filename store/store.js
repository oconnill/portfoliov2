import vue from "vue";
import vuex from "vuex";
import { debug } from "util";

vue.use(vuex);

export const store = new vuex.Store({
  state: {
    menuOptions: [],
    projectAttributes: [],
    typedCount: 0,
    isActive: false,
    menuTitleActive: false,
    beenClicked: false,
    singlePageView: false,
    typedUrl: "",
    menuTitles: [
      {
        title: "development",
        show: true
      },
      {
        title: "design",
        show: true
      },
      {
        title: "photography",
        show: true
      }
    ],
    developmentOptions: [
      {
        name: "RV Idaho",
        // image: require('../assets/rvidaho_hover.png'),
        description:
          "Built with a development team, a form for brochure sign-up.  All entries could be exported by admin to a .csv file type. Laravel, Javascript, and WordPress were used in the development.",
        demoLink: "https://rvidaho.org/free-camping-guide/",
        type: "browser-mockup with-url",
        outlined: false
      },
      {
        name: "Brundage",
        // image: require('../assets/brundage_hover.png'),
        description:
          "Updated homepage weather widget and worked to bring in a graph displaying snow data for base and summit depth",
        demoLink: "https://brundage.com/",
        type: "browser-mockup with-url",
        outlined: false
      },
      {
        name: "Kanban",
        // image: require('../assets/kanban-hover.png'),
        description:
          "Organize work flow with custom boards, lists, tasks, and notes",
        demoLink: "https://kanban-oconnell.herokuapp.com/",
        gitHubLink: "https://github.com/oconnill/vue-kanban",
        type: "browser-mockup with-url",
        outlined: false
      },
      {
        name: "Music Selector",
        // image: require('../assets/music-selector-hover.png'),
        description: "Build a playlist of songs from the I Tunes API",
        demoLink: "https://vue-music-oconnell.herokuapp.com/",
        gitHubLink: "https://github.com/oconnill/vue-music-checkpoint",
        type: "browser-mockup with-url",
        outlined: false
      },
      {
        name: "Univ-Rss",
        // image: require('../assets/univrss-hover.png'),
        description:
          "Personal dashboard for weather, rss feeds, local events, todo lists, photos, and spotify",
        demoLink: "",
        gitHubLink: "https://github.com/oconnill/Univ-Rss",
        type: "browser-mockup with-url",
        outlined: false
      }
    ],
    designOptions: [
      {
        name: "Yearly Poster Project 1986 - 1994",
        // image: require('../assets/univrss-hover.png'),
        description:
          "Personal dashboard for weather, rss feeds, local events, todo lists, photos, and spotify",
        demoLink: "",
        gitHubLink: "https://github.com/oconnill/Univ-Rss",
        outlined: false
      }
    ],
    photographyOptions: [
      {
        name: "Dublin Summer 1990",
        // image: require('../assets/univrss-hover.png'),
        description:
          "Personal dashboard for weather, rss feeds, local events, todo lists, photos, and spotify",
        demoLink: "",
        gitHubLink: "https://github.com/oconnill/Univ-Rss",
        outlined: false
      }
    ]
  },
  mutations: {
    setMenuOptions(state, data) {
      state.menuOptions = data;
    },
    setProjectChoice(state, data) {
      state.projectAttributes = data;
    },
    setMenuTitles(state, data) {
      state.menuOptions = data;
    },
    //Active Click Setters
    setBeenClicked(state, data) {
      state.beenClicked = data;
    },
    setMenuChoice(state, data) {
      state.menuChoice = data;
    },
    setIsActive(state, data) {
      state.isActive = data;
    },
    setMenuTitleActive(state, data) {
      state.MenuTitleActive = data;
    },
    setSinglePageView(state, data) {
      state.SinglePageView = data;
    }
  },
  actions: {
    menuChoice({ commit, dispatch }) {
      let choice = this.state.menuChoice;

      switch (choice) {
        case "development":
          commit("setMenuOptions", this.state.developmentOptions);
          break;
        case "design":
          commit("setMenuOptions", this.state.designOptions);
          break;
        case "photography":
          commit("setMenuOptions", this.state.photographyOptions);
          break;
      }
    },
    projectChoice({ commit, dispatch }, choice) {
      commit("setProjectChoice", choice);
    },
    openProject({ commit, dispatch }, choice) {
      this.state.typedUrl = "";

      let results = this.state.menuOptions.filter(function(project) {
        return project.name == choice;
      });

      commit("setProjectChoice", results);
      this.state.singlePageView = true;
      // dispatch("typeWriter")
    },
    // typeWriter() {
    //   let speed = 50;
    //   let count = this.state.typedCount;
    //   let url = this.state.projectAttributes[0]["demoLink"];

    //   if (count < url.length) {
    //     this.state.typedUrl += url.charAt(count);
    //     count++;
    //     setTimeout(this.typeWriter, speed);
    //   }
    //   console.log(count)
    // },
    menuReset({ commit, dispatch }) {
      commit("setMenuOptions", this.state.standardMenuOptions);
    },
    activeClick({ commit, dispatch }, choice) {
      commit("setBeenClicked", true);
      commit("setMenuChoice", choice);
      dispatch("menuChoice");
      dispatch("menuTitleShow");
      dispatch("vhCreator");
      commit("setIsActive", true);
      commit("setMenuTitleActive", true);
      commit("setSinglePageView", false);
    },
    vhCreator() {
      let projects = this.state.menuOptions;

      for (var i = 1; i < projects.length; i++) {
        if (i <= 0) {
          this.state.menuOptions[i]["top"] = 10 + "vh";
        } else {
          this.state.menuOptions[i]["top"] = i * 40 + "vh";
        }
      }
    },
    menuTitleShow() {
      let arr = this.state.menuTitles;
      for (var i = 0; i < arr.length; i++) {
        var obj = arr[i];
        if (obj.title !== this.state.menuChoice) {
          obj.show = false;
        }
      }
    }
  },
  methods: {}
});

export default store;
