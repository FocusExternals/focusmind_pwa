<template>
    <h2 :class="{'b-margin':noMargin,'underline':underline}">
        <slot></slot>
    </h2>
    
</template>

<style scoped>
    h2{
        font-family: Mont;
        font-style: normal;
        font-weight: 800;
        font-size: 34px;
        line-height: 38px;
        /* or 112% */
        margin-bottom: 20px;
        letter-spacing: -0.02em;

        color: #03002B;
    }

    h2.underline{
        margin-bottom: 48px;
    }

    .b-margin{
        margin-bottom: 0px;
    }

    h2.underline::after{
        content: " ";
        display: block;
        /* position: absolute; */
        bottom: 0;
        margin-left: 2px;
        margin-top: 19px;
        width: 28px;
        height: 4px;
        background-color: #03002B;
    }

     @media (max-width: 991.98px) { 
        h2{
                
            font-size: 30px;
            line-height: 34px;
        }
    }
    
</style>

<script>
export default {
    props :['no-margin','underline']
}
</script>