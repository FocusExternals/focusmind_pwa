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
        font-weight: 700;
        font-size: 23px;
        line-height: 170%;
        /* or 170% */
        margin-bottom: 20px;

        letter-spacing: -0.01em;

        color: #03002B;
    }
    span strong{
        font-weight: 800;
    }
    pre{
        font-family: Mont;
        font-weight: 700;
        font-style: normal;
    }

    @media (max-width: 991.98px) { 
        span{
            font-size: 20px;
            
            z-index:2;
        }
    }
</style>