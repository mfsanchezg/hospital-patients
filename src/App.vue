<template>
<header-menu :brand="brand" :title="title"></header-menu>
<main>
    <router-view></router-view>
</main>   
</template>

<script>
    export default {
        data(){
            return {
                brand: 'IQ SPACES',
                title: "Etiquetas electrónicas"
            }
        }
    }
</script>