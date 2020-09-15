<template>
    <span :style="csStyle">
        <slot></slot>
    </span>
</template>

<script>
export default {
    props:['cs-style']
}
</script>
<style scoped>
    span{
        
        font-family: Mont;
        font-style: normal;
        font-weight: 700;
        font-size: 23px;
        line-height: 39px;
        /* or 170% */
        margin-bottom: 20px;

        letter-spacing: -0.01em;

        color: #03002B;
    }
    span strong{
        font-weight: 800;
    }
</style>