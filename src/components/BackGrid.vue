<template>
    <div>
        <div>
            <div class="back-grid row"  v-show="!singlePageView">
                <div class="col-3"></div>
                <div class="backgroundGridImage col-3" v-if="menuOptions.length > 3" v-for="menuOption in menuOptions"
                    v-bind:style="{ top: menuOption.top }">{{ menuOption.name }}</div>
            </div>

            <div v-show="singlePageView">
                <div v-for="projectAttribute in projectAttributes">
                    {{ projectAttribute.name }}
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