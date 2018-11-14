<template>
    <div class="control-box-cont">
        <div v-show="!beenClicked" class="control-box-body">
            <ul>
                <li v-for="menuOption in menuOptions" @click="activeClick(menuOption.name)"><h3>{{ menuOption.name }}</h3></li>
            </ul>
        </div>
        <div v-show="beenClicked" class="control-box-body">
            <h3 v-for="menuOption in menuOptions" @click="openProject(menuOption.name)">{{ menuOption.name }}</h3>
            <h3 v-for="menuOption in menuOptions" @click="menuTitleReset()">{{ menuOption.title }}</h3>
        </div>
    </div>
</template>

<script>
    import '../../public/controlBoxBody.scss'

    export default {
        name: 'ControlBoxBody',
        data() {
            return {
                isOpen: false,
                developmentTitle: '',
            }
        },
        mounted() {
            this.$store.state.menuOptions = this.$store.state.standardMenuOptions
        },
        computed: {
            menuOptions() {
                return this.$store.state.menuOptions
            },
            beenClicked() {
                return this.$store.state.beenClicked
            }
        },
        methods: {
            activeClick(choice) {
                this.$store.state.beenClicked = true;
                this.$store.dispatch('menuChoice', choice);
                this.vhCreator(this.menuOptions);
                this.$store.state.isActive = true;
            },
            vhCreator(projects) {
                for (var i = 1; i < projects.length; i++) {
                    var project = {};
                    if (i <= 0) {
                        this.$store.state.menuOptions[i]["top"] = 10 + "vh";
                    } else {
                        this.$store.state.menuOptions[i]["top"] = i * 40 + "vh";
                    }
                }
            },
            openProject(choice) {
                let results = this.menuOptions.filter(function (project) {
                    return project.name == choice
                })
                this.$store.dispatch('projectChoice', results);
                this.$store.state.singlePageView = true;
            },
            menuTitleReset() {
                this.$store.state.singlePageView = false;
            }
        }
    }
</script>