<template>
    <div>
        <div>
            <div class="back-grid row">
                <div class="backgroundGridImage" v-if="menuOptions.length > 3" v-for="menuOption in menuOptions" v-bind:style="verticalHeight">{{
                    menuOption.name }}</div>
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
            return {
                verticalHeight: {
                    top: '95vh'
                },
            }
        },
        methods: {
            menuReset() {
                // this.$store.state.beenClicked = false;
                this.$store.dispatch('menuReset')
            }
        },
        computed: {
            menuOptions() {
                return this.$store.state.menuOptions
            },
            imageHeight() {
                return {
                    'top': '20px'
                }
            }
        }
    }
</script>