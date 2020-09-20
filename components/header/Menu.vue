<template>
    <div>
        <nav>
            <div class="menu-content">
                <div class="btn-container">
                    <button class="hamburger hamburger--spring" v-bind:class="{'is-active':active}" v-on:click="toogle()" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div class="brandLogo">
                    <img src="https://focusmind.net/wp-content/themes/focusmind/images/prelogo.png"/>
                </div>
                <div class="toogle-lang">
                    <nav class="cl-effect-5"> 
                        <a href="https://focusmind.net/en/">
                            <span data-hover="I PREFER ENGLISH">I PREFER ENGLISH</span>
                        </a>
                    </nav>
                </div>
            </div>
        </nav>
        <MenuShape :hide="!active"/>
    </div>
</template>


<style scoped>
    @import '~/assets/css/hamburguer-menu.css';
    .menu-content{
        width:100%;
        height: 60px;
        padding-right: 40px;
        background-color: #03002b;
        display: flex;
        align-items: center;
    }

    .btn-container{
        width: 155px;
        display: flex;
        justify-content: center;
        background-color: #080057;
    }
    .btn-container:hover{
        background-color: #ff0c62;
    }
    .hamburger-inner, .hamburger-inner::after, .hamburger-inner::before{
        background-color: #fff !important;
    }

    .brandLogo{
        padding-left: 40px;
        flex: 1;
    }
     button:active, button:focus{
        border:none;
        outline: none;
    }

    .toogle-lang{
        padding-right: 75px;
    }

    nav a {
        font-family: Mont;
        font-size:12px;
        color:#fff;
        position: relative;
        display: inline-block;
        margin: 15px 25px;
        outline: none;
        /*color: #fff;*/
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
        text-shadow: 0 0 1px rgba(255,255,255,0.3);
    }

    .cl-effect-5 a {
        height: 16px;
        overflow: hidden;
        padding: 0 4px;
    }
    .cl-effect-5 a span {
        display: inline-block;
        position: relative;
        transition: transform 0.3s ease 0s;
    }
    .cl-effect-5 a span:before {
        content: attr(data-hover);
        font-weight: 700;
        position: absolute;
        top: 100%;
        transform: translate3d(0px, 0px, 0px);
        width:180px
    }
    .cl-effect-5 a:hover span, .cl-effect-5 a:focus span {
        transform: translateY(-100%);
    }
</style>

<script>
export default {
   data (){
       return {
           active:false
       }
       
   },
   methods:{
       toogle(){
           this.active = !this.active
       }
   }
}
</script>