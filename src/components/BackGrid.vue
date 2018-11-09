<template>
        <div class="back-grid row">
            <div class="col-3 pos-1"><img src="//picsum.photos/480/600"></div>
            <div class="col-3 pos-2"><img src="//picsum.photos/500/500"></div>
            <div class="col-3 pos-3"><img src="//picsum.photos/200/300"></div>
            <div class="col-3 pos-4"><img src="//picsum.photos/200/300"></div>
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