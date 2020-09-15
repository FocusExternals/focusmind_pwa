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
        font-size: 23px;
        line-height: 21px;
        /* or 91% */

        letter-spacing: -0.01em;
    }
    span strong{
        font-weight: bold;
    }
</style>