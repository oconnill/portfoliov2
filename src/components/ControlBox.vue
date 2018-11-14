<template>
    <div v-bind:class="{ active: isActive }" class="control-box">
        <div class="control-header">
            <div class="logo-font">Daniel O'Connell</div>
            <div class="logo-icon" @click="menuReset()">DO</div>
        </div>
        <ControlBoxBody></ControlBoxBody>
        <div class="control-footer">
            <a href="https://www.linkedin.com/in/danieloconne11/"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/oconnill"><i class="fab fa-github"></i></a>
            <a href=""><i class="far fa-envelope"></i></a>
        </div>
    </div>
</template>

<script>
    import ControlBoxBody from './ControlBoxBody.vue'

    import '../../public/controlBox.scss'

    export default {
        name: 'app',
        components: {
            ControlBoxBody
        },
        methods: {
            menuReset() {
                this.$store.state.beenClicked = false;
                this.$store.state.isActive = false;
                this.$store.state.singlePageView = false;
                this.menuTitleReset();
                this.$store.dispatch('menuReset')
            },
            menuTitleReset() {
                let arr = this.$store.state.menuTitles

                for (var i = 0; i < arr.length; i++) {
                    console.log(arr[i].show)
                    arr[i].show = true;
                }
            }
        },
            computed: {
                isActive() {
                    return this.$store.state.isActive
                },
                menuTitles() {
                    return this.$store.state.menuTitles
                }
            }
        }
</script>