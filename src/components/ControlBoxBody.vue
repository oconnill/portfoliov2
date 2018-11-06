<template>
    <div>

        <div class="control-box-body" v-for="standardMenuOption in standardMenuOptions">
            <h3 @click="activeClick(standardMenuOption.name)">{{ standardMenuOption.name }}</h3>
        </div>

    </div>
</template>


<script>
    import '../../public/controlBoxBody.scss'

    export default {
        name: 'ControlBoxBody',
        data() {
            return {
                standardMenuOptions: [],
                developmentOptions: [
                    {
                        name: 'RV Idaho',
                        // image: require('../assets/rvidaho_hover.png'),
                        description: 'Built with a development team, a form for brochure sign-up.  All entries could be exported by admin to a .csv file type. Laravel, Javascript, and WordPress were used in the development.',
                        demoLink: 'https://rvidaho.org/free-camping-guide/',
                    },
                    {
                        name: 'Brundage',
                        // image: require('../assets/brundage_hover.png'),
                        description: 'Updated homepage weather widget and worked to bring in a graph displaying snow data for base and summit depth',
                        demoLink: 'https://brundage.com/',
                    },
                    {
                        name: 'Kanban',
                        // image: require('../assets/kanban-hover.png'),
                        description: 'Organize work flow with custom boards, lists, tasks, and notes',
                        demoLink: "https://kanban-oconnell.herokuapp.com/",
                        gitHubLink: 'https://github.com/oconnill/vue-kanban'
                    },
                    {
                        name: 'Music Selector',
                        // image: require('../assets/music-selector-hover.png'),
                        description: 'Build a playlist of songs from the I Tunes API',
                        demoLink: 'https://vue-music-oconnell.herokuapp.com/',
                        gitHubLink: 'https://github.com/oconnill/vue-music-checkpoint'
                    },
                    {
                        name: 'Univ-Rss',
                        // image: require('../assets/univrss-hover.png'),
                        description: 'Personal dashboard for weather, rss feeds, local events, todo lists, photos, and spotify',
                        demoLink: '',
                        gitHubLink: 'https://github.com/oconnill/Univ-Rss'
                    }
                ],
                designOptions: [
                    {
                        name: 'Yearly Poster Project 1986 - 1994',
                        // image: require('../assets/univrss-hover.png'),
                        description: 'Personal dashboard for weather, rss feeds, local events, todo lists, photos, and spotify',
                        demoLink: '',
                        gitHubLink: 'https://github.com/oconnill/Univ-Rss'
                    }
                ],
                photographyOptions: [
                    {
                        name: 'Dublin Summer 1990',
                        // image: require('../assets/univrss-hover.png'),
                        description: 'Personal dashboard for weather, rss feeds, local events, todo lists, photos, and spotify',
                        demoLink: '',
                        gitHubLink: 'https://github.com/oconnill/Univ-Rss'
                    }
                ]
                ,
                isOpen: false,
                developmentTitle: ''
            }
        },
        mounted() {
            /// returns default menu options
            return this.standardMenuOptions = this.$store.state.standardMenuOptions
        },
        methods: {
            activeClick(choice) {

                switch (choice) {
                    case 'development':
                        this.developmentTitle = choice
                        this.standardMenuOptions = this.developmentOptions
                        break
                    case 'design':
                        this.standardMenuOptions = this.designOptions
                        break
                    case 'photography':
                        this.standardMenuOptions = this.photographyOptions
                        break
                }

            },
            open() {

                this.isOpen = true;
                //if this create a switch statement then create the text to populate the direct menu
            }

        }
    }
</script>