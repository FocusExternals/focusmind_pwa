<template>
    <div :style="{height:h+'px'}"></div>
</template>
<style scoped>
    div{
        width:100%;
    }
</style>

<script>
export default {
    props:{
        h:{
            type:Number,
            default:31
        }
    }
}
</script>