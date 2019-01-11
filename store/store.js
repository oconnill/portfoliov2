import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

export const store = new vuex.Store({
  state: {
    menuOptions: [],
    projectAttributes: [{
      skills:[]
    }],
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
          "Worked with a team of developers on a site redesign of RVIdaho.org. My focus was updating a brochure sign-up form that gave users different options of mailed material to receive. The form also allowed for all the data to be exported by RV Idaho as a .csv using a custom date range. The forms were built with Laravel and Javascript.",
        demoLink: "https://rvidaho.org/free-camping-guide/",
        type: "browser-mockup with-url",
        images: {
          movie1: "images/rvidahodemoreelcompressed.mp4"
        },
        skills: ["vue", "laravel", "mysql", "wordpress", "sass"],
        outlined: false
      },
      {
        name: "Brundage",
        // image: require('../assets/brundage_hover.png'),
        description:
          "Updated Brundage’s weather widget and snow report. Using Laravel, Javascript and WordPress to create mobile responsive snow depth graph that displays current weather conditions and snow report. Added additional data to display on a homepage weather widget that can be controlled by the WordPress administrator.",
        demoLink: "https://brundage.com/",
        type: "browser-mockup with-url",
        skills: ["vue", "laravel", "mysql", "wordpress", "sass"],
        outlined: false
      },
      {
        name: "KANBAN",
        // image: require('../assets/kanban-hover.png'),
        description:
          "Organize work flow with custom boards, lists, tasks, and notes. Whether it’s for work, a side project or even the next family vacation, KANBAN helps your team stay organized.",
        demoLink: "https://kanban-oconnell.herokuapp.com/",
        gitHubLink: "https://github.com/oconnill/vue-kanban",
        type: "browser-mockup with-url",
        images: {
          movie1: "images/kanbandemoreel.mp4"
        },
        skills: ["vue", "nodejs", "html5", "mongo"],
        outlined: false
      },
      {
        name: "Music Selector",
        // image: require('../assets/music-selector-hover.png'),
        description:
          "Using the frontend framework Vue Js with Mongo DB and NodeJs to access the API of Apple I Tunes",
        demoLink: "https://vue-music-oconnell.herokuapp.com/",
        gitHubLink: "https://github.com/oconnill/vue-music-checkpoint",
        type: "browser-mockup with-url",
        images: {
          movie1: "images/musicselector.mp4"
        },
        skills: ["vue", "nodejs", "html5", "mongo"],
        outlined: false
      },
      {
        name: "Univ-Rss",
        // image: require('../assets/univrss-hover.png'),
        description:
          "Univ-Rss What drives you daily? How do you want to fill up your space? Whats in your daily orbit? You need to customize your Univ-rss. Using Vue Js, Node js, Mongo Db, Eventful Api, the power of Google Oauth, and Spotify to create the ultimate custom dashboard. With drag and scale functionality.",
        demoLink: "",
        gitHubLink: "https://github.com/oconnill/Univ-Rss",
        type: "browser-mockup with-url",
        skills: ["vue", "nodejs", "html5", "mongo"],
        outlined: false
      }
    ],
    designOptions: [
      {
        name: "Chicago Beers - Illustration Identity",
        // image: require('../assets/univrss-hover.png'),
        description:
          "Identity and Branding for use on cocktail menu. Local 22 Chicago",
        demoLink: "",
        gitHubLink: "https://github.com/oconnill/Univ-Rss",
        outlined: false,
        images: {
          featured_image: "images/chicagobeersbadgehelmet.png",
          img1: "images/chicagobeerslargetitle.png",
          img2: "images/chicagobeersicons.png"
        }
      }
    ],
    photographyOptions: [
      {
        name: "Dublin Summer 1990",
        // image: require('../assets/univrss-hover.png'),
        description:
          "Identity and Branding for use on cocktail menu. Local 22 Chicago",
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
    menuChoice({ commit }) {
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
    projectChoice({ commit }, choice) {
      commit("setProjectChoice", choice);
    },
    openProject({ commit }, choice) {
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
    menuReset({ commit }) {
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
