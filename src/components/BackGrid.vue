<template>
    <div>
        <div>
            <div class="back-grid row">
                <div class="col-3"></div>
                <div class="backgroundGridImage col-3" v-if="menuOptions.length > 3" v-for="menuOption in menuOptions"
                    v-bind:style="{ top: menuOption.top }">{{ menuOption.name }}</div>
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
                // this.$store.state.beenClicked = false;
                this.$store.dispatch('menuReset')
            },
        },
        computed: {
            menuOptions() {
                return this.$store.state.menuOptions
            }
        }
    }
</script>