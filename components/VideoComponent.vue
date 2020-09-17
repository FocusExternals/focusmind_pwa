<template>
    <video  :poster="require('~/assets/images/'+poster)" controls :style="{height:h+'px'}">
        <source v-for="(source, ext) in sources" :key="ext" :src="require('~/assets/video/'+source)" :type="'video/'+ext"/>
    </video>

</template>

<style scoped>
    video{
        height: 100%;
        width: 100%;
    }
</style>

<script>
export default {
    props:{
        poster:{
            type:String
        },
        sources:{
            type:Object,
            required:true
        },
        h:{
            type:Number,
            required:true
        }
    }
}
</script>