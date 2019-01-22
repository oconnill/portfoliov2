import vue from "vue";
import vuex from "vuex";

vue.use(vuex);

export const store = new vuex.Store({
  state: {
    menuOptions: [],
    projectAttributes: [
      {
        skills: []
      }
    ],
    typedCount: 0,
    isActive: false,
    menuTitleActive: false,
    beenClicked: false,
    singlePageView: false,
    designPhoto: false,
    welcome: true,
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
        name: "RvIdaho.org",
        description:
          "Worked with a team of developers on a site redesign of RVIdaho.org. My focus was updating a brochure sign-up form that gave users different options of mailed material to receive. The form also allowed for all the data to be exported by RV Idaho as a .csv using a custom date range. The forms were built with Laravel and Javascript.",
        demoLink: "https://rvidaho.org/free-camping-guide/",
        type: "browser-mockup with-url",
        thumbnail: "thumbnails/jairph-1185383-unsplash.jpg",
        images: {
          movie1: "images/rvidahodemoreelcompressed.mp4",
          placeholder: "placeholder-images/rvidaho_placeholder.jpg"
        },
        skills: ["javascript", "laravel", "mysql", "wordpress", "sass"],
        outlined: true
      },
      {
        outlined: false,
        thumbnail_movie: "thumbnails/vintagervdriving.mp4"
      },
      {
        name: "Brundage Mountain",
        description:
          "Updated Brundage’s weather widget and snow report. Using Laravel, Javascript and WordPress to create mobile responsive snow depth graph that displays current weather conditions and snow report. Added additional data to display on a homepage weather widget that can be controlled by the WordPress administrator.",
        demoLink: "https://brundage.com/",
        type: "browser-mockup with-url",
        skills: ["react", "laravel", "mysql", "wordpress", "sass"],
        thumbnail: "thumbnails/david-marcu-338675-unsplash.jpg",
        images: {
          movie1: "images/brundagemobile.mp4",
          placeholder: "placeholder-images/brundage_placeholder.jpg"
        },
        outlined: true
      },
      {
        outlined: false,
        thumbnail_movie: "thumbnails/snowboarding.mp4"
      },
      {
        name: "Kanban",
        description:
          "Organize work flow with custom boards, lists, tasks, and notes. Whether it’s for work, a side project or even the next family vacation, KANBAN helps your team stay organized.",
        demoLink: "https://kanban-oconnell.herokuapp.com/",
        gitHubLink: "https://github.com/oconnill/vue-kanban",
        type: "browser-mockup with-url",
        thumbnail: "thumbnails/alex-jones-6800-unsplash.jpg",
        images: {
          movie1: "images/kanbandemoreel.mp4",
          placeholder: "placeholder-images/kanban_placeholder.jpg"
        },
        skills: ["vue", "nodejs", "html5", "mongo"],
        outlined: true
      },
      {
        name: "Music Selector",
        description:
          "Using the frontend framework Vue Js with Mongo DB and NodeJs to access the API of Apple I Tunes. Search by artist or song through I Tunes to create a playlist of music samples",
        demoLink: "https://vue-music-oconnell.herokuapp.com/",
        gitHubLink: "https://github.com/oconnill/vue-music-checkpoint",
        type: "browser-mockup with-url",
        images: {
          movie1: "images/musicselectordemoreel.mp4",
          placeholder: "placeholder-images/musicselector.jpg"
        },
        thumbnail: "thumbnails/roman-kraft-57268-unsplash.jpg",
        skills: ["vue", "nodejs", "html5", "mongo"],
        outlined: true
      }
    ],
    designOptions: [
      {
        name: "Living Waters Records",
        description:
          "Living Waters Records is a Brooklyn-based record label. Home to the bands Absolutley Yours and H. Grimace",
        demoLink: "",
        gitHubLink: "",
        outlined: false,
        thumbnail: "images/livingwatersrecordsleeve.png",
        images: {
          featured_image: "images/livingwatersrecordsleeve.png",
          img1: "images/livingwaterscirclelogos.png"
        }
      },
      {
        name: "Chicago Beers - Illustration Identity",
        description:
          "Identity and Branding for use on cocktail menu. Local 22 Chicago",
        demoLink: "",
        gitHubLink: "",
        outlined: false,
        thumbnail: "images/chicagobeersbadgehelmet.png",
        images: {
          featured_image: "images/chicagobeersbadgehelmet.png",
          img1: "images/chicagobeerslargetitle.png",
          img2: "images/chicagobeersicons.png"
        }
      },
      {
        name: "Years - 1986-1994",
        description:
          "An experiment in design and color. Representing years with respective trends and brands. From teva sandals of the 90's to inspiration from championship soccer teams of the late 1980's",
        demoLink: "",
        gitHubLink: "",
        outlined: false,
        thumbnail: "images/1986-1987.png",
        images: {
          featured_image: "images/1986-1987.png",
          img1: "images/1988-1990.png",
          img2: "images/1991-1994.png",
          img3: "images/1992-wide.png",
          img4: "images/postergrid.png"
        }
      },
      {
        name: "Early Childhood Behavior - Learning Seed",
        description:
          "Packaging design for educational entertainment company Learning Seed. Uses a representational film reel to show the path and journey of being a new parent. Emphasizing the winding twisting road of caregiving and discipline in early childhood. Paired with imagery showing range in emotion, age, and temperment",
        demoLink: "",
        gitHubLink: "",
        outlined: false,
        thumbnail: "images/earlychildhoodfront.png",
        images: {
          featured_image: "images/earlychildhoodfront.png",
          img1: "images/earlychildhoodfront.png",
          img2: "images/earlychildhoodback.png"
        }
      },
      {
        name: "Black Line Productions",
        description:
          "A logo mark for Chicago based Black Line Productions. A small film production studio with a focus on documentaries and young filmakers.",
        demoLink: "",
        gitHubLink: "",
        outlined: false,
        thumbnail: "images/blacklineproductions_big_logo.png",
        images: {
          featured_image: "images/blacklineproductions_big_logo.png",
          img1: "images/earlychildhoodfront.png",
          img2: "images/earlychildhoodback.png"
        }
      },
      {
        name: "Magnolia Memoir - Self Titled",
        description:
          "Identity and packaging design for Jazz Alternative band Magnolia Memoir. Inspiration from 1940's jazz albums as well as World War II icongraphy",
        demoLink: "",
        gitHubLink: "",
        outlined: false,
        thumbnail: "images/2019magnoliamemoirfront.jpg",
        images: {
          featured_image: "images/2019magnoliamemoirfront.jpg",
          img1: "images/2019magnoliainnerview.jpg",
          img2: "images/2019magnoliabackfocus.jpg"
        }
      }
    ],
    photographyOptions: [
      {
        name: "Brennivín",
        description: "",
        demoLink: "",
        gitHubLink: "",
        outlined: false,
        images: {
          featured_image: "photography/036.jpg",
          img1: "photography/001.jpg",
          img2: "photography/006.jpg",
          img3: "photography/013.jpg",
          img4: "photography/023.jpg",
          img5: "photography/029.jpg"
        }
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
    },
    setWelcome(state, data) {
      state.welcome = data;
    }
  },
  actions: {
    menuChoice({ commit }) {
      let choice = this.state.menuChoice;

      switch (choice) {
        case "development":
          this.state.designPhoto = false;
          commit("setMenuOptions", this.state.developmentOptions);
          break;
        case "design":
          this.state.designPhoto = true;
          commit("setMenuOptions", this.state.designOptions);
          break;
        case "photography":
          this.state.designPhoto = true;
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
    },
    menuReset({ commit }) {
      commit("setMenuOptions", this.state.standardMenuOptions);
    },
    activeClick({ commit, dispatch }, choice) {
      commit("setBeenClicked", true);
      commit("setWelcome", false);
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
          this.state.menuOptions[i]["top"] = i * 30 + "vh";
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
  }
});

export default store;
