<template>
    <img :class="{'circle':circle}"  :src="require('~/assets/images/'+source)"/>
</template>

<style scoped>
    img{
        width:100%;
        height: auto;
    }

    .circle{
        border-radius: 50%;
    }
</style>

<script>
export default {
    props:['source','circle']
}
</script>