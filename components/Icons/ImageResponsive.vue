<template>

    <!-- <img v-if="lazy" :class="{'circle':circle}"  v-lazy="require('~/assets/images/'+source)"/> -->
    <picture style="width:100%">
        <source v-if="mobile" :srcset="require('~/assets/images/'+mobile)" media="(max-width: 991.98px)">
        <img :class="{'circle':circle,'keep-original':original}" :style="{...csStyle,maxWidth:mw,verticalAlign:'bottom'}" :src="require('~/assets/images/'+source)"/>
    </picture>
    

</template>

<style scoped>
    img{
        width:100%;
        height: auto;
    }

    img.keep-original{
        max-width: 100%;
        width: auto;
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
        mobile:{
            type:String | Boolean,
            default:false
        },
        circle:{
            type:Boolean,
            defautl:false
        },
        lazy:{
            type:Boolean,
            default:true
        },
        mw:{
            type:String,
            default:'auto'
        },
        original:{
            type:Boolean,
            default:false
        },
        'cs-style':{
            type:Object,
            default:function(){
                return {}
            }
        }
    }
}
</script>