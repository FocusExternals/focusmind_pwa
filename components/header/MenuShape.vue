<template>
    <div id="menu-wola" class="menu-container" :style="{display:'none'}">
        <div class="menu-items-container">
            <div class="menu-items">
                <div v-for="(link, i) in links" :key="i" class="menu-item">
                    <a :href="'https://'+referrer+link.url">{{link.display}}</a>
                </div>

            </div>
        </div>
        <div class="image-menu">
            
        </div>

    </div>
    
</template>

<style scoped>
    .menu-container{
        position: absolute;
        top:64px;
        display: flex;
        height: calc(100vh - 64px);
        width:100%;
        background-color: #03002b;
        z-index: 10;
    }
     
    .menu-items-container{
        justify-content: center;
        align-self: center;
        flex-grow: 1;
    }
    .menu-items{
        display: flex;
        flex-direction: column;
    }
    .menu-item{
        display: inline-block;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .menu-item:hover{
        background-color: #db135f;
    }

    .menu-item a{
        text-decoration: none;
        color: #db135f;
        font-family: Mont, sans-serif;
        font-size: 21px;
        font-weight: 700;
    }

    .menu-item:hover a{
        color: #ffff;
        font-weight: 800;
    }

    .image-menu{
        min-width: 50%;
        background: url('~assets/images/foto.jpg');
        background-size: auto 100%;
    }
    
    @media (max-width: 991.98px) { 
        .image-menu{
            display: none;
        }
    }
  
   
</style>

<script>
export default {
    mounted(){
        
    },
    props:{
        'hide':{
            type:Boolean,
            default:true
        }
    },
    watch:{
        hide: function(n,o){
           $("#menu-wola").toggle('slow');
           if(!n){
               document.documentElement.style.overflow = 'hidden'
           }else{
               document.documentElement.style.overflow = 'auto'
           }
        }
    },
    data(){
        return {
            close:false,
            links:[
                {
                    url:'/agencia/',
                    display:'agencia'
                },
                {
                    url:'/casos-de-estudio/',
                    display:'casos de estudio'
                },
                {
                    url:'/servicios/',
                    display:'servicios'
                },
                {
                    url:'/carreras-2/',
                    display:'carreras'
                },
                {
                    url:'http://blog.focusmind.net/?ref=digital',
                    display:'blog'
                },
                {
                    url:'/contacto/',
                    display:'contacto'
                },
            ]
        }
    }
}
</script>