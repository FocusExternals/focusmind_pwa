<template>
    <div class="wrapper" v-bind:style="{height:(heightWrapper-150) + 'px'}">
        <div class="stick-container">
        <slot></slot>
        </div>
    </div>
</template>

<style scoped>
    .wrapper{
        position:absolute;
        height: 100%;
        width:250px
    }
    div.stick-container{
        position: -webkit-sticky; /* Required for Safari */
        position: sticky;
        margin-top:167px;
        top:155px;
        margin-left:-75px;
        width:auto;
        height: 50px;
        font-family: Mont;
        font-style: normal;
        font-weight: 600;
        font-size: 21px;
        line-height: 39px;
        /* or 186% */

        letter-spacing: -0.01em;

        color: #03002B;

        opacity: 0.6;
        transform: rotate(-90deg);
    }
</style>

<script>
export default {
    props:['height-wrapper']
}
</script>