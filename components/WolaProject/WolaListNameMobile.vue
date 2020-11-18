<template>
    <div class="column-name">
        <slot></slot>
    </div>
</template>

<style scoped>
    .column-name{
        font-family: Mont;
        font-style: normal;
        font-weight: 700;
        font-size: 19px;
        line-height: 51px;
        text-align: left;
        /* or 268% */

        letter-spacing: -0.01em;

        /* Gray 3 */

        color: #828282;
    }

    strong{
        color:#B38A58;
        font-weight: 800;
        font-size: 1.5;
        text-transform: uppercase;
    }
</style>