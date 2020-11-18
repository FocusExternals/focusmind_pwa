<template>
    <span>
        <img :style="{height:(isMobile?hm:h)+'px'}" :src="require('~/assets/images/'+icons[icon])"/>
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
    @media (max-width: 991.98px) { 
        span{
            margin-left: 0;
        }
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
        },
        hm:{
            type:Number,
        },
        theme:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            icons:{
                react:this.theme+'react.png',
                node:this.theme+'Node-js-Logo.png',
                sass:this.theme+'sass-logo-wall.png',
                redux:this.theme+'redux-logo-landscape.png',
                mongo:this.theme+'mongodb.png',
                jquery:this.theme+'jquery.png',
                next:this.theme+'next.png',
                laravel:this.theme+'laravel.png'
            }
            
        }
    }
}
</script>