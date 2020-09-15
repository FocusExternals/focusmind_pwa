<template>
    <img :src="require('~/assets/images/'+source)"/>
</template>

<style scoped>
    img{
        width:100%;
        height: auto;
    }
</style>

<script>
export default {
    props:['source']
}
</script>