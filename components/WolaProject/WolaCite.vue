<template>
    <div class="cite-wrapper">
        <div v-if="image" class="cite-image">
            <ImageResponsive  :source="image"/>
        </div>
        <div :class="{'blue-letters':blue,'with-image':image}">
            <p class="cite">
                <slot></slot>
            </p>
            <p class="author">
                <span class="author-name">{{author}}</span> {{role}}
            </p>
        </div>
    </div>
</template>

<style scoped>
    .cite-wrapper{
        padding-top: 40px;
        padding-bottom: 40px;
        display:flex;
        align-items: center;
    }

    .cite-image{
        min-width: 120px;
    }
    
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

    .with-image{
        padding-left: 75px;
    }
    .with-image .cite, .with-image .author{
        text-align: left;
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

    @media (max-width: 991.98px) { 
        p.cite{
            font-size: 28px;
            line-height: 43px;
            
        }
    }


</style>

<script>
export default {
    props:['author','role','blue','image']
}
</script>