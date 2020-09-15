<template>
    <a v-bind:href="url" target="_blank">
        <slot></slot>
    </a>
</template>

<style scoped>
    a{
        color:#B38A58;
        font-family: Judson;
        font-style: normal;
        font-weight: bold;
        font-size: 23px;
        line-height: 39px;
        /* or 170% */
        letter-spacing: -0.01em;
    }
</style>
<script>
export default {
    props:['url']
}
</script>