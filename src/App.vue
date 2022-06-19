<template>
<header-menu :brand="brand" :title="title"></header-menu>
<insert-update-patient></insert-update-patient>
<!--insert-update-patient patientName="Manuel"></insert-update-patient-->
</template>

<script>
    export default {
        data(){
            return {
                brand: 'IQ SPACES',
                title: "Manejo hospitalario de camas"
            }
        }
    }
</script>