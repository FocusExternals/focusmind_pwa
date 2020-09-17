<template>
    <a :href="to">
    <button :class="colors[variant]">
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
        cursor: pointer;
        
        background-size: 250% 150% !important;
        background-position: 100% 100% !important;
        transition: all .5s ease-out;

    }

    button:hover{
        background-position: 0 100% !important;
    }

    .theme-pink{
        background: linear-gradient(90deg,#fff 50%, #ff0c62 0);
        color: #fff;
        border:3px solid #ff0c62;
    }
    .theme-pink:hover {
        color: #ff0c62;
        
    }

    .theme-blue{
        
        background: linear-gradient(90deg,#fff 50%, #03002b 0);
        color: #fff;
        border:3px solid #03002b;
    }
    .theme-blue:hover {
        color: #03002b;
    }

    .theme-blue-inverted{
        
        background: linear-gradient(90deg,#03002b 50%, #fff 0);
        color: #03002b;
        border:3px solid #03002b;
    }
    .theme-blue-inverted:hover {
        color: #fff;
    }
    
    button:active, button:focus{
        border:none;
        outline: none;
    }
</style>

<script>
export default {
    props:{
        'to':{
            type:String,
            required:true
        },
        'variant':{
            type:String,
            default:'pink'
        }
    },
    data(){
        return {
            colors:{
                pink:"theme-pink",
                'pink-inverted':'theme-pink-inverted',
                blue:"theme-blue",
                'blue-inverted':'theme-blue-inverted'
            }
        }
    }
}
</script>