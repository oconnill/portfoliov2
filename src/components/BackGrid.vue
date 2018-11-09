<template>
        <div class="back-grid row">
            <div class="col-3 pos-1">Position 1</div>
            <div class="col-3 pos-2">Position 2</div>
            <div class="col-3 pos-3">Position 3</div>
            <div class="col-3 pos-4">Position 4</div>
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
            methods: {
                menuReset() {
                    this.$store.state.beenClicked = false;
                    this.$store.dispatch('menuReset')
                }
            }
        }
    </script>