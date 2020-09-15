<template>
    <nav>
        <div class="menu-content">
            <div class="btn-container">
                <button class="hamburger hamburger--collapse" v-bind:class="{'is-active':active}" v-on:click="active = !active" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div class="brandLogo">
                <img src="https://focusmind.net/wp-content/themes/focusmind/images/prelogo.png"/>
            </div>
        </div>
    </nav>
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

    .brandLogo{
        padding-left: 40px;
    }
</style>

<script>
export default {
   data (){
       return {
           active:false
       }
       
   }
}
</script>