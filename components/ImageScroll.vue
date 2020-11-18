<template>
    <div class="wrapper" :style="{width:containerWidth,maxHeigth:maxHeigth}">
        <div ref="container" class="imageContainer">
            <img ref="image" class="scroll-animate-image" :style="{marginLeft:(-margin)+'px'}" :src="require('~/assets/images/'+source)">
        </div>
        <div v-if="maxMargin>0" class="slide-wrapper">
            <vue-slider :style="{margin:'auto'}" :dotSize="9" :width="39" :height="7" :tooltip="'none'" :dotStyle="{backgroundColor:colorDot}" :railStyle="{backgroundColor:'#C4C4C4'}" :processStyle="{backgroundColor:'#C4C4C4'}" :max="maxMargin"  v-model="margin"></vue-slider>
        </div>
    </div>
</template>

<style scoped>
    .imageContainer{
        overflow-x: hidden;
        width: 100%;
    }

    .scroll-animate-image{
        width: auto;
        min-width: 100%;
    }
    
    .slide-wrapper{
        margin-top: 42px;
        margin-bottom:42px;
    }

    @media (max-width: 1400px) {
        .scroll-animate-image{
            max-height: 80vh;
        }
            
        .slide-wrapper{
            margin-top: 31px;
            margin-bottom:31px;
        }
    }
</style>

<script>

import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'

// import theme
import 'vue-slider-component/theme/default.css'
export default {
    components: {
    VueSlider
    },
    mounted(){
        window.addEventListener('load', () => {
            let widthContainer = this.$refs['container'].clientWidth;
            let widthImage = this.$refs['image'].clientWidth;
            this.maxMargin = widthImage - widthContainer;
        })
        
    },
    computed:{
        colorDot(){
            return this.colors.dot[this.theme]
        }
    },
    props:{
        'container-width':{
            type:String,
            default:'100%'
        },
        'max-heigth':{
            type:String,
            default:'auto'
        },
        source:{
            type:String,
            required:true
        },
        theme:{
            type:String,
            default:'wola'
        }
    },
    data(){
        return {
            margin:0,
            maxMargin:0,
            colors:{
                dot:{
                    tcdg:'#FB8137',
                    wola:'#B38A58'
                }
            },
            
        }
    },
}
</script>