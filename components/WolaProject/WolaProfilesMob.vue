<template>
    <div class="profile-container">
        <div class="profile-tabs">
            <div v-for="(prof, k) in profiles" :key="k" :class="{'tab':true,'active':k==currentProfile}" v-on:click="chageProfile(k)">
                {{k+1}}° perfil 
            </div>
        </div>
        <div class="profile-wrapper" :style="{width:(profiles.length*100)+'%',marginLeft:(-(currentProfile*100))+'%'}">
            <div v-for="(prof, k) in profiles" :key="k" class="profile">
                <div class="profile-header">
                    <div class="profile-desc">
                        <TextSubtitleContent :size="23" :style="{color:'#B38A58',paddingBottom:'31px'}">
                            <strong>{{prof.type}}</strong>
                        </TextSubtitleContent>
                        <br><br>
                        <TextSubtitleContent>
                            <strong>{{prof.name}}</strong>
                        </TextSubtitleContent>
                        <br>
                        <TextSubtitleContent>
                            {{prof.age}} años
                        </TextSubtitleContent>
                    </div>
                    <div class="profile-image">
                        <ImageResponsive :cs-style="{maxWidth:'150px'}" :circle="true" :source="prof.image"/>
                    </div>
                </div>
                <div class="profile-footer">
                    <TetxtParagraph :size="20">
                        <strong>Integración tecnológica:</strong> {{prof.tecnology}}
                    </TetxtParagraph> 
                     <TetxtParagraph :size="20">
                        <strong>Productos Digitales que usa:</strong><br>
                        {{prof.products}}
                    </TetxtParagraph>
                    <TetxtParagraph :size="20" :style="{marginTop:'31px',textAlign:'center'}">
                        {{prof.comment}}
                    </TetxtParagraph>
                </div>
                    
            </div>
        </div>
    </div>
</template>

<style scoped>
    .profile-container{
        width:100%;
        overflow-x: hidden;
        text-align: left;
    }

    .profile-tabs{
        background-color: #fff;
        display:flex;
        justify-content: space-around;

    }

    .profile-tabs .tab{
        width: 125.71px;
        height: 31px;
        font-family: Mont;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 31px;
        text-align: center;
        letter-spacing: -0.01em;    
        color: #B38A58;
    }

    .profile-tabs .tab.active{
        color:#03002B;
    }

    .profile-wrapper{

        display:flex;
        transition: all .4s ease-in-out;
    }

    .profile{
        flex:1;
        padding: 34px 31px 48px 31px;
    }

    .profile-header{
        display: flex;
        padding-bottom: 48px;
        align-items: center;
    }

    .profile-header>div{
        flex:1;
        width:0;
    }
    .profile-image{
        max-width: 250px;
        margin-left:31px;
    }
</style>

<script>
export default {
    data(){
        return {
            profiles:[
                {
                    image:'betiana.jpg',
                    type:'Emprendedor\nPrincipiante',
                    name:'Betiana',
                    age:'24 - 32',
                    tecnology:'Avanzada',
                    products:'Twitter, Instagram, Spotify, Pinterest.',
                    comment:'"Quiero comenzar con un emprendimiento a vender online"'
                },
                {
                    image:'photo1.jpg',
                    type:'Emprendedor\nDigital',
                    name:'Augusto',
                    age:'26 - 32',
                    tecnology:'Avanzada',
                    products:'Instagram, Spotify, Whatsapp, Plataformas de gestión de tiempo, productividad y e-learning.',
                    comment:'"Necesito dar un próximo paso para mi emprendimiento. Busco mejores resultados"'
                },
                {
                    image:'photo2.jpg',
                    type:'Joven\nEmpresario',
                    name:'Martin',
                    age:'28 - 36',
                    tecnology:'Intermedia/Avanzada',
                    products:'Suite de Google, Microsoft Excel, Spotify, Shopify/Tienda Nube, Coursera, Whatsapp.',
                    comment:'"Quiero dar el próximo paso. Me faltan habilidades blandas y duras"'
                }
            ],
            currentProfile:0
        }
    },
    methods:{
        chageProfile(k){
            this.currentProfile = k
        }
    }
}
</script>