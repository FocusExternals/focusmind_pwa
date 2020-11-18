<template>
    <div class="bread-container">
        <nav>
            <BreadItem v-for="(route, index) in routes[page]" :key="route.name" :url="route.url" :theme="page">
                {{route.name}} <span v-if="index != routes[page].length-1">></span>
            </BreadItem>
        </nav>
    </div>
</template>

<style scoped>
    .bread-container{
        position: absolute;
        top: 95px;
        left: 155px;
    }
    @media (max-width: 991.98px) { 
        .bread-container{
            top: 88px;
            left: 31px;
        }
    }
</style>

<script>
export default {
    props:{
        page:{
            type:String,
            default:'wola'
        }
    },
    data(){
        return {
            routes: {
                wola:[
                    {
                        name:'Proyectos',
                        url:'https://focusmind.net/casos-de-estudio'
                    },
                    {
                        name:'Wola education',
                        url:false
                    }
                ],
                tcdg:[
                    {
                        name:'Proyectos',
                        url:'https://focusmind.net/casos-de-estudio'
                    },
                    {
                        name:'TCDG Plataforma Online',
                        url:false
                    }
                ],
            }
        }
    }
}
</script>