<template>
    <div class="wrapper" v-bind:style="{height:(heightWrapper-150) + 'px'}">
        <div class="stick-container-top">
            <div class="stick-top-wrapper">
                <div class="stick-item flex-center paper-step">
                    <div>
                    <ImageResponsive class="desktop"  :source="(theme?theme+'_':'')+'papel.png'"/>
                    </div>
                    <div class="column align">
                        <WolaTextGold class="mobile">1. <em>Lo-fi</em></WolaTextGold>
                        <WolaTextGold class="desktop" :cs-style="{color:stepColor}" :size="(isMobile)?19:23">Step 1</WolaTextGold>
                        <TextSubtitleContent class="desktop"   cs-style="font-size:20px; margin-bottom:0">Lo-fi Wireframings</TextSubtitleContent>
                        <TetxtParagraph :size="(isMobile)?16:17">En papel</TetxtParagraph>
                    </div>
                    <div class="arrow">
                        <IconArrowRight :color="arrowColor"/>
                    </div>
                </div>
                <div class="stick-item flex-center mid-step">
                    <div>
                        <ImageResponsive class="desktop"  :source="(theme?theme+'_':'')+'media.png'"/>
                    </div>
                    <div class="column align">
                        <WolaTextGold class="mobile">2. <em>Media</em></WolaTextGold>
                        <WolaTextGold class="desktop" :cs-style="{color:stepColor}" :size="(isMobile)?19:23">Step 2</WolaTextGold>
                        <TextSubtitleContent class="desktop"  cs-style="font-size:20px; margin-bottom:0">Media Wireframings</TextSubtitleContent>
                        <TetxtParagraph :size="(isMobile)?16:17">Digital (estructura)</TetxtParagraph>
                    </div>
                    <div class="arrow">
                        <IconArrowRight :color="arrowColor"/>
                    </div>
                </div>
                <div class="stick-item flex-center hi-step">
                    <div>
                        <ImageResponsive class="desktop"  :source="(theme?theme+'_':'')+'alta.png'"/>
                    </div>
                    <div class="column align">
                        <WolaTextGold class="mobile">3. <em>Hi-fi</em></WolaTextGold>
                        <WolaTextGold class="desktop" :cs-style="{color:stepColor}" :size="(isMobile)?19:23">Step 3</WolaTextGold>
                        <TextSubtitleContent class="desktop"  cs-style="font-size:20px; margin-bottom:0">Hi-fi Wireframings</TextSubtitleContent>
                        <TetxtParagraph :size="(isMobile)?16:17"><template v-if="theme=='tcdg'"> Digital Branding</template> <template v-else> Digital <br>(detalles finales)</template></TetxtParagraph>
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
        top:0px;
        justify-content: space-between;
        padding-left: 155px;
        padding-right: 195px;
        background-color: #fff;
        z-index: 4;
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.06);
    }
    .stick-top-wrapper{
        
        display: flex;
        width:100%;
        background-color: #fff;
        justify-content: space-around;
        padding-top: 32px;
        padding-bottom: 55px;
    }
    .stick-item{
        max-width:363px;
        height: 98px;
        opacity:1;
        display: flex;
        flex:1
    }

    .stick-item .column{
        margin-left:20px;
        display: flex;
        flex-direction: column;

    }
    .arrow{
        margin-left:24px;
    }
    .sticky-wrapper.in-viewport div.stick-container{
        opacity: .6;
    }

    
    @media (max-width: 991.98px) { 
        ImageResponsive{
            display:none;
        }
        TextSubtitleContent{
            display:none;
        }
        .column span{
            font-size: 18px !important;
        }
        .column{
            text-align: center;
        }

        .column p{
            font-size:16px !important;
            text-align: center;
            line-height: 100% !important;
        }
        .stick-container-top{
            padding-left: 0;
            padding-right: 0;
        }
        .stick-item{
            flex:1;
            width: 0;
            align-items: baseline;
            height: auto;
        }
        .stick-top-wrapper{
            padding-top: 26px;
            padding-bottom: 26px;
        }
        .arrow{
            margin-left:12px;
        }
        
    }
</style>

<script>
export default {
    computed:{
        arrowColor(){
            return this.colors.arrow[this.theme]
        },
        stepColor(){
            return this.colors.step[this.theme]
        }
    },
    data(){
        return {
            colors:{
                arrow:{
                    'tcdg':'#FB8137',
                    'wola':'#B38A58'
                },
                step:{
                    'tcdg':'#1B71B7',
                    'wola':'#B38A58'
                }
            }
        }
    },
    props:{
        'height-wrapper':{
            type:String
        },
        'theme':{
            type:String,
            default:'wola'
        }
    }
    
}
</script>