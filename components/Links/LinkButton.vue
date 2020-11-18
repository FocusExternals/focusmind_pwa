<template>
    <span>
        <n-link v-if="internal" :to="to" >
            <button v-on:mouseover="over=true" v-on:mouseleave="over=false" :class="colors[variant]">
                <slot></slot>
                <IconArrowUpSimple  v-if="withArrow" cs-style="transform:rotate(90deg); height:.6em" :color="(over)?arrow_color[variant][1]:arrow_color[variant][0]"/>
            </button>
        </n-link>
        <a v-else :href="to" >
        <button v-on:mouseover="over=true" v-on:mouseleave="over=false" :class="colors[variant]">
            <slot></slot>
            <IconArrowUpSimple  v-if="withArrow" cs-style="transform:rotate(90deg); height:.6em" :color="(over)?arrow_color[variant][1]:arrow_color[variant][0]"/>
        </button>
        </a>
    </span>
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

    .theme-pink-inverted-transparent,.theme-pink-inverted-transparent-white{
        background: linear-gradient(90deg,#ff0c62 50%, transparent 0);
        color: #ff0c62;
        border:3px solid #ff0c62;
    }
    .theme-pink-inverted-transparent-white{
        color:#fff;
    }
    .theme-pink-inverted-transparent:hover {
        color: #fff;
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
        },
        'with-arrow':{
            type:Boolean,
            default:false
        },
        internal:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            over:false,
            colors:{
                pink:"theme-pink",
                'pink-inverted':'theme-pink-inverted',
                blue:"theme-blue",
                'blue-inverted':'theme-blue-inverted',
                'pink-transparent':'theme-pink-inverted-transparent',
                'pink-transparent-white':'theme-pink-inverted-transparent-white'
            },
            arrow_color:{
                pink:['#fff','#ff0c62'],
                'pink-inverted':['#ff0c62','#fff'],
                blue:['#fff','#03002b'],
                'blue-inverted':['#03002b','#fff'],
                'pink-transparent':['#ff0c62','#fff'],
            }
        }
    }
}
</script>