<template>
    <video  :poster="require('~/assets/images/'+poster)" autoplay loop muted :style="{height:h+'px'}">
        <source v-for="(source, ext) in sources" :key="ext" :src="require('~/assets/video/'+source)" :type="'video/'+ext"/>
    </video>

</template>

<style scoped>
    video{
        height: 100%;
        width: 100%;
    }

    @media (max-width: 991.98px) { 
         video{
            height:auto !important;
         }
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
        },
        
    }
}
</script>