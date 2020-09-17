<template>
    <button v-on:click="scrollTop()">
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
    }
    button:active, button:focus{
        border:none;
        outline: none;
    }
</style>

<script>
export default {
    methods:{
        scrollTop(){
            jQuery("html, body").animate({ scrollTop: 0 });
        }
    }
}
</script>