<template>
    <p :style="{color:textColor}">
        <slot></slot>
    </p>
</template>

<style scoped>
    p{
        
        font-family: Mont;
        font-style: normal;
        font-weight: 600;
        font-size: 33px;
        line-height: 56px;
        /* or 170% */

        text-align: center;
        letter-spacing: -0.01em;

        color: #B38A58;
    }

    @media (max-width: 991.98px) { 
         p{
            
            font-size: 30px;
            line-height: 43px;
         }
    }
</style>

<script>
export default {
    props:{
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