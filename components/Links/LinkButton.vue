<template>
    <a :href="to">
    <button>
        <slot></slot>
    </button>
    </a>
</template>

<style scoped>
    a{
        text-decoration:none;
    }
    button{
        font-family: Mont;
        font-style: normal;
        font-weight: 800;
        font-size: 15px;
        line-height: 140%;
        padding:8px 12px 8px 12px;
        /* identical to box height, or 140% */
        border:none;
        letter-spacing: -0.02em;
        background-color: #FF0C62;
        color: #FFFFFF;
        cursor: pointer;
    }
    button:active, button:focus{
        border:none;
        outline: none;
    }
</style>

<script>
export default {
    props:['to'],
    data(){
        return {
            colors:{
                pink:{
                    main:'#FF0C62',
                    secondary:'#FFFFF'
                }
            }
        }
    }
}
</script>