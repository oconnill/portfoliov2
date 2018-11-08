import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

export const store = new vuex.Store({
  state: {
    menuOptions: [],
    standardMenuOptions: [
      { name: "development" },
      { name: "design" },
      { name: "photography" }
    ],
    developmentOptions: [
      'development',
      {
        name: "RV Idaho",
        // image: require('../assets/rvidaho_hover.png'),
        description:
          "Built with a development team, a form for brochure sign-up.  All entries could be exported by admin to a .csv file type. Laravel, Javascript, and WordPress were used in the development.",
        demoLink: "https://rvidaho.org/free-camping-guide/"
      },
      {
        name: "Brundage",
        // image: require('../assets/brundage_hover.png'),
        description:
          "Updated homepage weather widget and worked to bring in a graph displaying snow data for base and summit depth",
        demoLink: "https://brundage.com/"
      },
      {
        name: "Kanban",
        // image: require('../assets/kanban-hover.png'),
        description:
          "Organize work flow with custom boards, lists, tasks, and notes",
        demoLink: "https://kanban-oconnell.herokuapp.com/",
        gitHubLink: "https://github.com/oconnill/vue-kanban"
      },
      {
        name: "Music Selector",
        // image: require('../assets/music-selector-hover.png'),
        description: "Build a playlist of songs from the I Tunes API",
        demoLink: "https://vue-music-oconnell.herokuapp.com/",
        gitHubLink: "https://github.com/oconnill/vue-music-checkpoint"
      },
      {
        name: "Univ-Rss",
        // image: require('../assets/univrss-hover.png'),
        description:
          "Personal dashboard for weather, rss feeds, local events, todo lists, photos, and spotify",
        demoLink: "",
        gitHubLink: "https://github.com/oconnill/Univ-Rss"
      }
    ],
    designOptions: [
      {
        name: "Yearly Poster Project 1986 - 1994",
        // image: require('../assets/univrss-hover.png'),
        description:
          "Personal dashboard for weather, rss feeds, local events, todo lists, photos, and spotify",
        demoLink: "",
        gitHubLink: "https://github.com/oconnill/Univ-Rss"
      }
    ],
    photographyOptions: [
      {
        name: "Dublin Summer 1990",
        // image: require('../assets/univrss-hover.png'),
        description:
          "Personal dashboard for weather, rss feeds, local events, todo lists, photos, and spotify",
        demoLink: "",
        gitHubLink: "https://github.com/oconnill/Univ-Rss"
      }
    ]
  },
  mutations: {
    setMenuOptions(state, data) {
      state.menuOptions = data;
    }
  },
  actions: {
    menuChoice({ commit, dispatch }, choice) {
      switch (choice) {
        case "development":
          commit("setMenuOptions", this.state.developmentOptions);
          //dispatch a function that fades the text into view
          break;
        case "design":
          commit("setMenuOptions", this.state.designOptions);
          break;
        case "photography":
          commit("setMenuOptions", this.state.photographyOptions);
          break;
      }
    },
    menuReset({ commit, dispatch }) {
      commit("setMenuOptions", this.state.standardMenuOptions);
    }
  }
});

export default store;
