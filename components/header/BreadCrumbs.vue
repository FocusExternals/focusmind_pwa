<template>
    <div class="bread-container">
        <nav>
            <BreadItem v-for="(route, index) in routes" :key="route.name" :url="route.url">
                {{route.name}} <span v-if="index != routes.length-1">></span>
            </BreadItem>
        </nav>
    </div>
</template>

<style scoped>
    .bread-container{
        position: absolute;
        top: 112px;
        left: 155px;
    }
</style>

<script>
export default {
    data(){
        return {
            routes: [
                {
                    name:'Proyectos',
                    url:'https://focusmind.net/casos-de-estudio'
                },
                {
                    name:'Wola education',
                    url:false
                }
            ]
        }
    }
}
</script>