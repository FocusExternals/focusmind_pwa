<template>
    <h2 :class="{'b-margin':noMargin,'underline':underline}">
        <slot></slot>
    </h2>
    
</template>

<style scoped>
    h2{
        font-family: Mont;
        font-style: normal;
        font-weight: 1000;
        font-size: 60px;
        line-height: 1.1;
        /* or 112% */
        margin-bottom: 20px;
        letter-spacing: -2px;

        color: #03002B;
    }

    h2.underline{
        margin-bottom: 48px;
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
        margin-top: 19px;
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