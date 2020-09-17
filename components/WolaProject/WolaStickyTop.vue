<template>
    <div class="wrapper" v-bind:style="{height:(heightWrapper-150) + 'px'}">
        <div class="stick-container-top">
            <div class="stick-top-wrapper">
                <div class="stick-item flex-center paper-step">
                    <div>
                    <ImageResponsive source="papel.png"/>
                    </div>
                    <div class="column align">
                        <WolaTextGold :size="23">Step 1</WolaTextGold>
                        <TextSubtitleContent  cs-style="font-size:20px; margin-bottom:0">Lo-fi Wireframings</TextSubtitleContent>
                        <TetxtParagraph :size="17">En papel</TetxtParagraph>
                    </div>
                    <div class="arrow">
                        <IconArrowRight/>
                    </div>
                </div>
                <div class="stick-item flex-center mid-step">
                    <div>
                        <ImageResponsive source="media.png"/>
                    </div>
                    <div class="column align">
                        <WolaTextGold :size="23">Step 2</WolaTextGold>
                        <TextSubtitleContent cs-style="font-size:20px; margin-bottom:0">Media Wireframings</TextSubtitleContent>
                        <TetxtParagraph :size="17">Digital (estructura)</TetxtParagraph>
                    </div>
                    <div class="arrow">
                        <IconArrowRight/>
                    </div>
                </div>
                <div class="stick-item flex-center hi-step">
                    <div>
                        <ImageResponsive source="alta.png"/>
                    </div>
                    <div class="column align">
                        <WolaTextGold :size="23">Step 3</WolaTextGold>
                        <TextSubtitleContent  cs-style="font-size:20px; margin-bottom:0">Hi-fi Wireframings</TextSubtitleContent>
                        <TetxtParagraph :size="17">Digital (con detalles finales)</TetxtParagraph>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper{
        position:absolute;
        height: 100%;
        width:100%;
        left:0;
    }

    .stick-container-top{
        position: -webkit-sticky; /* Required for Safari */
        position: sticky;
        width:100%;
        height: 185px;
        top:0px;
        justify-content: space-between;
        padding-left: 155px;
        padding-right: 195px;
    }
    .stick-top-wrapper{
        
        display: flex;
        width:100%;
        background-color: #fff;
        justify-content: space-around;

    }
    .stick-item{
        max-width:363px;
        opacity:1;
        display: flex;
    }

    .stick-item .column{
        margin-left:20px;
        display: flex;
        flex-direction: column;

    }

    :not( .wire.in-viewport) .paper-step{
        opacity: .6;
    }

    .arrow{
        margin-left:24px;
    }
    .sticky-wrapper.in-viewport div.stick-container{
        opacity: 1;
    }
</style>

<script>
export default {
    props:['height-wrapper']
}
</script>