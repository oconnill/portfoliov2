<template>
    <div class="control-box">
        <div class="control-header">
            <div class="logo-font">Daniel O'Connell</div>
            <div class="logo-icon" @click="menuReset()">DO</div>
        </div>
        <ControlBoxBody></ControlBoxBody>
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
                this.$store.dispatch('menuReset')
            }
        }
    }
</script>