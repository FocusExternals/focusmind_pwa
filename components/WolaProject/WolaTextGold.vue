<template>
    <span :style="{fontSize:size+'px',lineHeight:lh+'%',paddingBottom:pb+'px',fontWeight:w}">
        <slot></slot>
    </span>
</template>

<style scoped>
    span{
        font-family: Mont;
        font-style: normal;
        font-weight: 800;
        /* or 121% */
        letter-spacing: -0.02em;
        color: #B38A58;
    }

    em{
        font-style: normal;
        color:#03002B;
    }
</style>

<script>
export default {
    props:{
        size:{
            type:Number,
            default:20
        },
        lh:{
            type:Number,
            default:121
        },
        pb:{
            type:Number,
            default:0
        },
        w:{
            type:Number,
            default:800
        }
    }
}
</script>