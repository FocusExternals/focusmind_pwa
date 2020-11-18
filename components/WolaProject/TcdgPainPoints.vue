<template>
    <picture>
        <source :srcset="require('~/assets/images/brainmobile.png')" media="(max-width: 991.98px)">
        <img :style="csStyle" :src="require('~/assets/images/wola-pain-points.png')">
    </picture>
</template>

<style scoped>
    img{
        width:70%;
        height: auto;
    }
</style>

<script>
export default {
    props:['cs-style']
}
</script>