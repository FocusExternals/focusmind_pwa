<template>
    <button :class="direction"  v-on:click="callback()">
        <IconArrowUpSimple/>
    </button>
</template>

<style scoped>
    button{
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

    .right{
        transform:rotate(90deg);
    }
    .left{
        transform: rotate(-90deg);
    }
    button:active, button:focus{
        border:none;
        outline: none;
    }
</style>

<script>
export default {
    props:['direction','callback']
}
</script>