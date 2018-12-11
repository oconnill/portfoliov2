<template>
    <div>
        <div>
            <div class="back-grid row"  v-show="!singlePageView">
                <div class="col-3"></div>
                <div class="backgroundGridImage col-3" v-if="menuOptions.length > 3" v-for="menuOption in menuOptions"
                    v-bind:style="{ top: menuOption.top }">{{ menuOption.name }}</div>
            </div>

            <div class="row" v-show="singlePageView">
                    <div class="col-3 red"></div>
                <div class="col-9 green" v-for="projectAttribute in projectAttributes">
                    <h2>{{ projectAttribute.name }}</h2>
                    <div class="project-text-block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </div>
            </div>
        </div>
        <ControlBox></ControlBox>
    </div>
</template>

<script>

    import ControlBox from './ControlBox.vue'
    import '../../public/backgrid.scss'

    export default {
        name: 'app',
        components: {
            ControlBox
        },
        data() {
            return {}
        },
        methods: {
            menuReset() {
                this.$store.dispatch('menuReset')
            },
        },
        computed: {
            menuOptions() {
                return this.$store.state.menuOptions
            },
            projectAttributes() {
                return this.$store.state.projectAttributes
            },
            singlePageView() {
                return this.$store.state.singlePageView
            }
        }
    }
</script>