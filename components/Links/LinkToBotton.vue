<template>
    <span v-on:click="scroll()"><IconArrowUp cs-style="margin-right:20px;"/>{{text}}</span>
</template>

<style scoped>
    span{
        font-family: Judson;
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 21px;
        /* or 100% */
        cursor:pointer;
        letter-spacing: -0.01em;
        color: #FFFFFF;
    }
    span:hover svg{
        transform: translateY(5px);
    }
</style>
<script>
export default {
    props:['text','target'],
    methods:{
        scroll(){
           this.$emit('scroll-to')
        }
    }
}
</script>