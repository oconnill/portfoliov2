<template>
    <div class="control-box-body">
        <h3 v-for="menuOption in menuOptions" @click="activeClick(menuOption.name)">{{ menuOption.name }}</h3>
        
        <h3 v-for="menuOption in menuOptions">{{ menuOption.title }}</h3>
       
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
        },
        methods: {
            activeClick(choice) {
                this.$store.dispatch('menuChoice', choice)
            },
        }
    }
</script>