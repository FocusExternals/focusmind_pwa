<template>
    <div :class="{'blue-letters':blue}">
        <p class="cite">
            <slot></slot>
        </p>
        <p class="author">
            <span class="author-name">{{author}}</span> {{role}}
        </p>
    </div>
</template>

<style scoped>
    p.cite{
        font-family: Judson;
        font-style: italic;
        font-weight: normal;
        font-size: 31px;
        line-height: 46px;
        /* or 148% */

        text-align: center;
        letter-spacing: -0.01em;

        color: #FFFFFF;
    }
    p.author{
        margin-top:30px;
        font-size: 21px;
        font-family:Judson;
        line-height: 29px;
        /* or 138% */
        text-align: center;
        letter-spacing: -0.01em;
        color: #F2F2F2;
    }
    span.author-name{
        font-weight: bold;
    }

    .blue-letters p.author{
        color:#03002B
    }

    .blue-letters p.cite{
        color:#03002B
    }


</style>

<script>
export default {
    props:['author','role','blue']
}
</script>