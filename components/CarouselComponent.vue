<template>
    <div class="carousel-wrapper">
        <div class="description">
            <WolaTextGold :w="1000" :size="23">{{desc.index + 1}}.</WolaTextGold>
            <TextSubtitleContent cs-style="white-space:pre;">{{desc.text}}</TextSubtitleContent>
        </div>
        <div class="carousel-container">
            <VueSlickCarousel class="full-width" v-bind="settings" ref="carousel" @afterChange="setDesc">
                    
                <div class="imageContainer" v-for="(image, index) in images" :key="index">
                    <img :src="require('~/assets/images/WolaSlide/'+image.src)"/>
                    <!-- <ImageResponsive :lazy="false" source="Coursera.jpg"/> -->
                </div>
                
          </VueSlickCarousel>
          <div class="arrows">
              <ArrowFill :class="{'disable':(curIndex==0)}" direction="left" :callback="showPrev"/>
              <ArrowFill :class="{'disable':(curIndex==(images.length-1))}"  direction="right" :callback="showNext"/>
          </div>
        </div>
    </div>
</template>

<style scoped>
    .carousel-wrapper{
        display:flex;
        width:100%;
    }
    .carousel-container .slick-list{
        padding-left: 0px !important;
    }
    .description{
        min-width:430px;
        align-items: left;
        justify-content: center;
        display: flex;
        flex-direction: column;
        text-align: left;
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
  props:{
      images:{
          type:Array,
          default:[]
      }
  },
  data(){
      return {
        settings:{
            "centerMode":true,
            "centerPadding": "150px",
            "focusOnSelect": true,
            "infinite": false,
            "slidesToShow": 1,
            "speed": 500,
            'arrows':false
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