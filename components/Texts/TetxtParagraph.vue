<template>
    <p :class="theme" :style="{'fontSize':size+'px',lineHeight:lh+'%',color:color}" >
        <span class="dot" v-if="itemIcon">{{itemIcon}}</span>  
        <span :class="{'with-padding':btn}">
            <slot>
            </slot>
        </span>
    </p>
</template>

<style scoped>
 p{
    font-family: Judson;
    font-style: normal;
    font-size: 23px;
    line-height: 140%;
    /* or 170% */
    letter-spacing: -0.01em;
    color: #03002B;
 }
 p strong{
     font-weight: bold;
 }

 span.with-padding{
    padding:15px 16px 15px 21px;
    background-color: #f2f2f2;
 }
 span.dot{
     color: #B38A58;
     font-family: Mont;
     font-weight: 800;
 }

 .tcdg .dot{
     color:#FB8137
 }

 @media (max-width: 991.98px) { 
     p{
         font-size: 19px;
     }
 }
</style>

<script>
export default {
    props:{
        'size':{
            type:Number,
            defautl:23
        },
        'btn':{
            type: Boolean,
            default:false
        },
        'item-icon':{
            default:false
        },
        'lh':{
            type:Number,
            default:170
        },
        theme:{
            type:String,
            default:''
        },
        color:{
            type:String,
            default:'#03002B'
        }
    }
}
</script>