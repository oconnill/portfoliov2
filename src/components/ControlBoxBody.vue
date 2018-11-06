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
                isOpen: false,
                developmentTitle: ''
            }
        },
        mounted() {
            /// returns default menu options
            return this.standardMenuOptions = this.$store.state.standardMenuOptions
        },
//         computed: {
// menud
//         },
        methods: {
            activeClick(choice) {
                switch (choice) {
                    case 'development':
                        this.developmentTitle = choice
                        this.standardMenuOptions = this.$store.state.developmentOptions 
                        break
                    case 'design':
                        this.standardMenuOptions = this.$store.state.designOptions 
                    case 'photography':
                        this.standardMenuOptions = this.$store.state.photographyOptions
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