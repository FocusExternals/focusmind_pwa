<template>
    <h1>
        <slot></slot>
    </h1>
</template>

<style scoped>
    h1{
        font-family: Mont;
        font-style: normal;
        font-weight: 800;
        font-size: 49px;
        line-height: 118.3%;
        /* or 58px */

        letter-spacing: -0.02em;

        color: #FFFFFF;
        margin-top: auto;
        margin-bottom: 20px;
    }
    @media (max-width: 991.98px) { 
        h1{
            font-size: 25px;
        }
    }

</style>