<template>
    <div class="carousel-wrapper">
        <div v-if="legends" class="description">
            <WolaTextGold :cs-style="{color:colorStep}" :w="1000" :size="23">{{desc.index + 1}}.</WolaTextGold>
            <TextSubtitleContent class="breakline" >{{desc.text}}</TextSubtitleContent>
        </div>
        <div class="carousel-container">
            <VueSlickCarousel class="full-width" v-bind="settings" ref="carousel" @afterChange="setDesc">
                    
                <div class="imageContainer" v-for="(image, index) in images" :key="index">
                    <img :src="require('~/assets/images/WolaSlide/'+image.src)"/>
                    <!-- <ImageResponsive :lazy="false" source="Coursera.jpg"/> -->
                </div>
                
          </VueSlickCarousel>
          <div v-if="arrows" class="arrows">
              <ArrowFill :class="{'disable':(curIndex==0 && !customSettings.infinite)}" direction="left" :callback="showPrev"/>
              <ArrowFill :class="{'disable':(curIndex==(images.length-1) && !customSettings.infinite)}"  direction="right" :callback="showNext"/>
          </div>
        </div>
    </div>
</template>

<style scoped>
    .carousel-wrapper{
        display:flex;
        width:100%;
        max-width: 1400px;
        margin: auto;

    }

    .carousel-container .slick-list{
        padding-left: 0px !important;
    }
    .description{
        min-width:430px;
        align-items: flex-start;
        justify-content: center;
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .breakline{
        white-space:pre;
    }
    .carousel-container{
        flex-grow: 2;
        justify-content: center;
        overflow: hidden;
    }
    .imageContainer{
        height: 296px;
        background-color:#ffffff;
    }

    .imageContainer img{
        max-height: 100%;
        max-width: 100%;
        height:auto;
        margin-left:12px;
        margin-right: 12px;
    }
    .arrows{
        position: absolute;
        margin-left: -70px;
        margin-top: -66px;
    }

    .disable{
        opacity:.6;
        cursor:initial;
    }

    @media (max-width: 991.98px) { 
        .description{
            min-width: auto;
            max-width: 100%;

        }
        .breakline{
            white-space:normal;
        }
         .arrows{
            display:none;
        }

        .imageContainer{
            height: auto;
        }

        .imageContainer img{
            width: calc(100vw - 82px);
            height: auto;
        }

        .carousel-wrapper{
            
        flex-wrap: wrap;
        }
    }

</style>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
    
  components: { VueSlickCarousel },
  mounted(){
      this.setDesc(0);
      $('.slick-list').css('padding-left','0')
  },
  computed:{
      colorStep(){
          return this.colors.step[this.theme]
      }
  },
  props:{
      images:{
          type:Array,
          default:[]
      },
      arrows:{
          type:Boolean,
          default:true
      },
      legends:{
          type:Boolean,
          default:true
      },
      'custom-settings':{
          type:Object,
          default(){
              return {}
          }
      },
      theme:{
          type:String,
          default:'wola'
      }
  },
  data(){
      return {
        colors:{
            step:{
                tcdg:'#FB8137',
                wola:'#B38A58'
            }
        },
        settings:{
            ...{
                "centerMode":true,
                "centerPadding": "150px",
                "focusOnSelect": false,
                "infinite": false,
                "slidesToShow": 1,
                "speed": 500,
                'arrows':false,
                responsive:[
                    {
                        breakpoint: 992,
                        settings:{
                            "centerPadding": "20px",
                            touchMove:true
                        }
                    }
                ]
            },
            ...this.customSettings
        },
        desc:{
            index:1,
            text:'Bocetado en papel'
        },
        curIndex:0,

      }
  },
  methods:{
      setDesc(index){
          if(!this.legends || this.customSettings.infinite){
              return
          }
          let cur = this.images[index];
          this.desc.index = index;
          this.desc.text = cur.text;
          this.curIndex = index;
      },
      showNext(){
          this.$refs.carousel.next()
      },
      showPrev(){
          this.$refs.carousel.prev()
      }
  }
}
</script>