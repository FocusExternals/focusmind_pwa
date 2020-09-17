<template>
    <h2 :class="{'b-margin':noMargin,'underline':underline}">
        <slot></slot>
    </h2>
    
</template>

<style scoped>
    h2{
        font-family: Mont;
        font-style: normal;
        font-weight: 800;
        font-size: 34px;
        line-height: 38px;
        /* or 112% */
        margin-bottom: 20px;
        letter-spacing: -0.02em;

        color: #03002B;
    }

    .b-margin{
        margin-bottom: 0px;
    }

    h2.underline::after{
        content: " ";
        display: block;
        /* position: absolute; */
        bottom: 0;
        margin-left: 2px;
        margin-top: 8px;
        width: 28px;
        height: 4px;
        background-color: #03002B;
    }
    
</style>

<script>
export default {
    props :['no-margin','underline']
}
</script>