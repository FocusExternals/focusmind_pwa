<template>
    <div id="menu-wola" class="menu-container" :style="{display:'none'}">
        <div class="menu-items-container">
            <div class="menu-items">
                <div v-for="(link, i) in links" :key="i" class="menu-item">
                    <a :href="link.url">{{link.display}}</a>
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
        top:60px;
        display: flex;
        height: calc(100vh - 60px);
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
    }

    .image-menu{
        min-width: 50%;
        background: url('~assets/images/foto.jpg');
        background-size: auto 100%;
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
        }
    },
    data(){
        return {
            close:false,
            links:[
                {
                    url:'https://focusmind.net/agencia/',
                    display:'agencia'
                },
                {
                    url:'https://focusmind.net/casos-de-estudio/',
                    display:'casos de estudio'
                },
                {
                    url:'https://focusmind.net/servicios/',
                    display:'servicios'
                },
                {
                    url:'https://focusmind.net/carreras-2/',
                    display:'carreras'
                },
                {
                    url:'http://blog.focusmind.net/?ref=digital',
                    display:'blog'
                },
                {
                    url:'https://focusmind.net/contacto/',
                    display:'contacto'
                },
            ]
        }
    }
}
</script>