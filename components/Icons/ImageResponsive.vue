<template>

    <img v-if="lazy" :class="{'circle':circle}"  v-lazy="require('~/assets/images/'+source)"/>
    <img v-else :class="{'circle':circle}"  :src="require('~/assets/images/'+source)"/>

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
    props:{
        source:{
            type:String,
            require:true
        },
        circle:{
            type:Boolean,
            defautl:false
        },
        lazy:{
            type:Boolean,
            default:true
        }
    }
}
</script>