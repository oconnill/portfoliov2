<template>
    <div>
        <div class="control-box-body" v-for="typeOfWork in typeOfWorks">
            <h3><a href="" @click="activeClick(typeOfWork.name)">{{ typeOfWork.name }}</a></h3>
        </div>
    </div>
</template>


<script>
    import '../../public/controlBoxBody.scss'

    export default {
        name: 'ControlBoxBody',
        data() {
            return {
                typeOfWorks: [
                    { name: 'development' },
                    { name: 'design' },
                    { name: 'photography' }
                ],
                isOpen: false,
                menuChoice: ''
            }
        },
        methods: {
            activeClick(choice) {
                console.log(name)
                debugger
            },
            open() {
                
                this.isOpen = true;
                //if this create a switch statement then create the text to populate the direct menu
        }

    }
}
</script>