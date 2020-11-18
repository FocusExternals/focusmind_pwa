<template>
    <a v-if="url" :href="url" :class="[hover?'hover':'no-hover',theme]" v-on:mouseover="hover=true" v-on:mouseleave="hover=false"> 
        <slot></slot>
    </a>
    <span :class="[theme]" v-else>
        <slot></slot>
    </span>
</template>

<style scoped>
    a, span{
        font-family: Mont;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 21px;
        text-decoration: none;
        /* or 162% */

        letter-spacing: -0.01em;

        color: #7A7992;
    }

    a{
        font-weight: 700;
    }
    
    a.hover::after{
        content: " ";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 67px;
        height: 1px;
        background-color: #7A7992;
        -webkit-transition: -webkit-transform .3s ease;
        transition: -webkit-transform .3s ease;
        transition: transform .3s ease;
        transition: transform .3s ease, -webkit-transform .3s ease;
        -webkit-animation: button-line-hover 1s ease forwards;
        animation: button-line-hover 1s ease forwards;
    }
    a.no-hover::after{
        content: " ";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 67px;
        height: 1px;
        background-color: #7A7992;
        -webkit-transition: -webkit-transform .3s ease;
        transition: -webkit-transform .3s ease;
        transition: transform .3s ease;
        transition: transform .3s ease, -webkit-transform .3s ease;
        -webkit-animation: button-line-blur 1s ease forwards;
        animation: button-line-blur 1s ease forwards;
        animation-fill-mode: forwards
    }

    a.tcdg,span.tcdg, .tcdg span{
        color:rgba(3, 0, 43, .62);
    }
    a.hover.tcdg::after,a.no-hover.tcdg::after{
         background-color: rgba(3, 0, 43, .62);
    }
    @keyframes button-line-hover {
    0% { transform-origin: right; }
    40% { transform: scaleX(0); transform-origin: right;}
    50% { transform-origin: left; transform: scaleX(0);}
    100% { transform-origin: left; }
}

@keyframes button-line-hover-on-hover {
    0% { transform: scaleX(0); transform-origin: left;}
    100% { transform-origin: left; transform: scaleX(1);}
}

@keyframes button-line-blur {
    0% { transform-origin: left; }
    40% { transform-origin: left; transform: scaleX(0);}
    50% { transform: scaleX(0); transform-origin: right;}
    100% { transform-origin: right; }
}

@keyframes button-line-blur-on-hover {
    0% { transform: scaleX(1); transform-origin: right;}
    100% { transform-origin: right; transform: scaleX(0);}
}
</style>

<script>
export default {
    props:['url','theme'],
    data(){
        return {
            hover:false
        }
    }
}
</script>