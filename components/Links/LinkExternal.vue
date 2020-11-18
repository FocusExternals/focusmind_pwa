<template>
    <a :style="{color:textColor}" v-bind:href="url" target="_blank">
        <slot></slot>
    </a>
</template>

<style scoped>
    a{
        color:#B38A58;
        font-family: Judson;
        font-style: normal;
        font-weight: bold;
        font-size: 23px;
        line-height: 39px;
        /* or 170% */
        letter-spacing: -0.01em;
    }
</style>
<script>
export default {
    props:{
        url:{
            type:String,
            required:true
        },
        theme:{
            type:String,
            default:'wola'
        }
    },
    computed:{
        textColor(){
            return this.colors[this.theme]
        }
    },
    data(){
        return {
            colors:{
                tcdg:'#2B80DA',
                wola:'#B38A58'
            },
            
        }
    },
}
</script>