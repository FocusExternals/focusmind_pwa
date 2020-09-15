<template>
    <div class="stick-container">
        <slot></slot>
    </div>
</template>

<style scoped>
    div.stick-container{
        position: -webkit-sticky; /* Required for Safari */
        position: sticky;
        top:155px;
        left:75px;
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