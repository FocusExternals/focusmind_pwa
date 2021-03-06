import Vue from 'vue';
import inViewportDirective from 'vue-in-viewport-directive';
import VueSlickCarousel from 'vue-slick-carousel';
import VueLazyload from 'vue-lazyload';
inViewportDirective.defaults.margin = '-50% 0%';
Vue.directive('in-viewport', inViewportDirective);
Vue.use(VueLazyload);
Vue.component('VueSlickCarousel',VueSlickCarousel)