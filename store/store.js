import vue from "vue";
import vuex from "vuex";
import { debug } from "util";

vue.use(vuex);

export const store = new vuex.Store({
  state: {
    menuOptions: [],
    projectAttributes: [],
    isActive: false,
    menuTitleActive: false,
    beenClicked: false,
    singlePageView: false,
    menuTitles: [
      {
          title: 'development',
          show: true
      },
      {
          title: 'design',
          show: true
      },
      {
          title: 'photography',
          show: true
      }
  ],
    developmentOptions: [
      { title: "development" },
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
      { title: "design" },
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
      { title: "photography" },
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
    },
    setProjectChoice(state, data) {
      state.projectAttributes = data;
    },
    setMenuTitles(state,data) {
      state.menuOptions = data
    }
  },
  actions: {
    menuChoice({ commit, dispatch }, choice) {
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
    // getMenuTitles({commit, dispatch}) {
    // let menuTitles = []

    //   commit("setMenuTitles", menuTitles)
    // },
    projectChoice({commit, dispatch}, choice) {
      commit("setProjectChoice", choice);
    },
    menuReset({ commit, dispatch }) {
      commit("setMenuOptions", this.state.standardMenuOptions);
    }
  },
  methods: {}
});

export default store;
