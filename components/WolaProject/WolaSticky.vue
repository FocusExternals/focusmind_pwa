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
        width:250px;
        left:0;
    }
    div.stick-container{
        position: -webkit-sticky; /* Required for Safari */
        position: sticky;
        margin-top:167px;
        z-index: -1;
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

    .sticky-wrapper:hover div.stick-container{
        opacity: 1;
    }
</style>

<script>
export default {
    props:['height-wrapper']
}
</script>