<template>
    <button v-if="!hide" v-on:click="scrollTop()">
        <IconArrowUpSimple/>
    </button>
</template>

<style scoped>
    button{
        position: fixed;
        right: 115px;
        bottom: 15px;
        font-family: Mont;
        font-style: normal;
        font-weight: 800;
        font-size: 15px;
        line-height: 140%;
        padding:10px;
        /* identical to box height, or 140% */
        border:none;
        letter-spacing: -0.02em;
        background-color: #03002B;
        color: #FFFFFF;
        cursor: pointer;
        transition: all .5s ease
    }
    button:active, button:focus{
        border:none;
        outline: none;
    }

    @media (max-width: 991.98px) { 
        button{
            right: 15px;
        }
    }
</style>

<script>
export default {
    mounted(){
        const component = this
        jQuery(window).on('scroll',function(e){
            if(($(window).scrollTop() + $(window).height() > $(document).height() - 100) || $(window).scrollTop() <  100) {
                
                component.hide = true
            }else{
                component.hide = false
            }
        })
    },
    methods:{
        scrollTop(){
            jQuery("html, body").animate({ scrollTop: 0 });
        }
    },
    data(){
        return {
            hide:true
        }
    }
}
</script>