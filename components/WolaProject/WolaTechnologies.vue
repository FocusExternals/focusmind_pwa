<template>
    <span>
        <img :style="{height:h+'px'}" :src="require('~/assets/images/'+icons[icon])"/>
    </span>
    
</template>

<style scoped>
    img{
        height: 1em;
        vertical-align: bottom;
    }
    span{
        margin-left: 16px;
        line-height: 120%;
    }
</style>
<script>
export default {
    props:{
        icon:{
            type:String,
            required:true
        },
        h:{
            type:Number,
            default:23
        }
    },
    data(){
        return {
            icons:{
                react:'react.png',
                node:'Node-js-Logo.png',
                sass:'sass-logo-wall.png',
                redux:'redux-logo-landscape.png',
                mongo:'mongodb.png'
            }
            
        }
    }
}
</script>