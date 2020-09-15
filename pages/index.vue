<template>
  <div class="container">
    <BreadCrumbs/>
    <div id="section1" class="sections">
      <div class="left">  
        <Logo/>
        <HeadMainText>Desarrollando la plataforma líder de hispanoamérica en negocios y emprendimiento</HeadMainText>
        <TextSubtitleContent cs-style="color:#e0e0e0">MVP Responsive Website</TextSubtitleContent>
        <div class="linkToBottomContainer">
          <LinkToBotton text="Explorar el proyecto" @scroll-to="scrollToContent"/>
        </div>
      </div>
      
    </div>
    <div id="section2" class="sections" ref="section2">
      <div class="padding-block left">
        <TextTitleContent>
          Lorem ipsum dolor sit amet, 
          consectetuer adipiscing elit
        </TextTitleContent>
        <TetxtParagraph>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo velit esse molestie consequat.
        </TetxtParagraph>

      </div>
     
    </div>
     <div id="section3" class="sections degrade pr" ref="section3">
      
      <div class="padding-block left">
        <TextTitleContent no-margin="true">
          Scope de trabajo
        </TextTitleContent>
        <TextSubtitleContent>
         Aplicando nuestra metodología THE MIND®
        </TextSubtitleContent>

      </div>
      <div class=" columns">
        <div class="col">
          <div class="mb">
            <TextSubtitleContent >
              <strong>1. Definición de objetivos</strong>
            </TextSubtitleContent>
          </div>
          <div class="mb">
            <TextSubtitleContent>
              <strong>2. Branding</strong><br>
              Naming<br/>
              Desarrollo de marca y <br/>
              conceptualización<br/>
              Digital branding<br>
            </TextSubtitleContent>
          </div>
        </div>
        <div class="col">
          <div class="mb">
            <TextSubtitleContent>
              <strong> The Mind®</strong><br>
              Benchmarking<br>
              User personas<br>
              User flow <br>
              Selección de features<br>
              Wireframings (Lo-fi, Media y Hi-fi).<br>
              Prototipado<br>
              Desarrollo y Q&A<br>
            </TextSubtitleContent>
          </div>
        </div>
        <div class="col">
          <div class="mb">
            <TextSubtitleContent >
              <strong>Duración del proyecto</strong><br>
              2 meses<br>
            </TextSubtitleContent>
          </div>
          <div class="mb">
            <TextSubtitleContent>
              <strong>Equipo a cargo</strong><br>
              1 Product manager<br>
              1 UX/UI designer<br>
              2 Developers<br>
            </TextSubtitleContent>
          </div>
        </div>
      </div>
     </div>
     <div ref="wrapper-objetives">
       <WolaSticky :height-wrapper="getHeightWrapper('wrapper-objetives')">Definición de objetivos</WolaSticky>
      <div id="section4" class="sections" ref="section4">
        <div class="padding-block left" >
          <div class="mb">
            <TextTitleContent>
              Lorem ipsum dolor sit amet.
            </TextTitleContent>
            <TextSubtitleContent>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquipconsequat.
            </TextSubtitleContent>
          </div>
          <div>
            <TetxtParagraph class="mb">
              <strong>- Duis autem vel eum iriure</strong> dolor in hendrerit in vulputate velit esse molestie consequat el illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dig.
            </TetxtParagraph>
            <TetxtParagraph class="mb">
              <strong>- Lorem ipsum dolor sit amet</strong> cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
            </TetxtParagraph>
            <TetxtParagraph class="mb">
              <strong>- Ut wisi enim ad minim veniam,</strong> quis nostrud exerci tation ullamcorper suscipit loaliquip comm.
            </TetxtParagraph>
          </div>

        </div>
        <div class="pr flex-center" style="margin-left:67px">
          <img src="~/assets/images/image1.jpg"/>
        </div>
      
      </div>
     </div>
     <div ref="wrapper-branding">
      <WolaSticky :height-wrapper="getHeightWrapper('wrapper-branding')">Branding</WolaSticky>
      <div id="section5" class="sections" ref="section5">
        <div class="padding-block" >
          <div class="mb left">
            <TextTitleContent>
              Naming
            </TextTitleContent>
            <TextSubtitleContent>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquipconsequat.
            </TextSubtitleContent>
          </div>
          <div class="columns pr">
            <WolaListName>
              <p>MindsOn</p>
              <p>EagerMinds</p>
              <p>DigitalNerds</p>
              <p>DigitalAcademy</p>

            </WolaListName>
            <WolaListName>
              <p>TheDigitalUni</p>
              <p>CollegeOn</p>
              <p>Brandsgetdigital</p>
              <p>Smartmarketing</p>
            </WolaListName>
            <WolaListName>
              <p>Innovativa</p>
              <p><strong>WOLA</strong></p>
              <p>TheVanguard</p>
              <p>ChesterAcademy</p>
            </WolaListName>
            <WolaListName>
            <p> Businessminds</p>
              <p>LeaderEducation</p>
              <p>DigitalMindsAcademia</p>
            <p> Eduatica </p>
            </WolaListName>
          </div>
        </div>
      </div>
      <div id="section6" class="sections" ref="section6" style="background-color:#B38A58">
          <div class="padding-block pr">
              <WolaCite author="Juan Pablo Laco." role="Director de Focus Mind">
                “Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam”.
              </WolaCite>
          </div>
      </div>
      <div id="section7" class="sections" ref="section">
        <div class="padding-block left">
          <TextTitleContent>
            Diseño y conceptualización
          </TextTitleContent>
          <TetxtParagraph>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo velit esse molestie consequat quis nostrud exerci tation ullamcorper.
          </TetxtParagraph>

        </div>
        <div class="padding-block pr">
          <WolaCiteSimple>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquipconsequat.
          </WolaCiteSimple>
        </div>
      
      </div>
      <div class="sections" id="section8">
        <WolaImageLogo/>
      </div>
      <div id="section9" class="sections" ref="section9" >
          <div class="padding-block">
              <div class="left">
                <TextTitleContent >
                  Digital Branding
                </TextTitleContent>
                <TextSubtitleContent >
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquipconsequat.
                </TextSubtitleContent>
                <TetxtParagraph>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo velit esse molestie consequat quis nostrud exerci tation ullamcorper.
                </TetxtParagraph>
              </div>
          </div>
          <div class="padding-block pr">
            <div class="columns mb">
              <div class="col">
                  <TextSubtitleContent cs-style="color:#B38A58;">
                    <strong>Step 1</strong>
                  </TextSubtitleContent>
                  <ImageResponsive source="boceto1.jpg"/>
              </div>
              <div class="col" style="padding-left:50px">
                  <TextSubtitleContent cs-style="color:#B38A58;">
                    <strong>Step 2</strong>
                  </TextSubtitleContent>
                  <ImageResponsive source="boceto2.jpg"/>
              </div>
            </div>
            <div style="display:flex; text-align:left; flex-direction:column">
                <TextSubtitleContent cs-style="color:#B38A58;">
                    <strong>Step 3</strong>
                  </TextSubtitleContent>
                  <ImageResponsive source="boceto3.png"/>
            </div>
          </div>
      </div>
     </div>
    <div id="section10" class="sections " ref="section10" style="background-color:#DBDBDB">
        <div class="padding-block pr">
            <WolaCite author="Maira Graff." role="Diseñadora" blue="true">
              “Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ut sldna ewr wisi enim ad minim veniam”.
            </WolaCite>
        </div>
    </div>
    <div class="sections mb" id="section11">
      <WolaImageFinal/>
    </div>
    <div class="sections" id="section12" style="text-align:left">
        
        <TetxtParagraph>
          Las ilustraciones fueron aplicadas a todo el sitio web y a sus distintos componentes, por ejemplo forman parte de los archivos de lectura y las guías de estudio de los cursos. <LinkExternal url="https://google.com">Ver PDFs</LinkExternal>
        </TetxtParagraph>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    scrollToContent(){
      let target = this.$refs['section2'];
      let top  = target.offsetTop;
      jQuery("html, body").animate({ scrollTop: top });
      //window.scrollTo(0, top);

    },
    getHeightWrapper(wrapper){
      let target = this.$refs[wrapper];
      return target.clientHeight
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.sections{
  min-width: 100%;
  flex-grow: 1;
  background-position-y: center;
  background-position-x: right;
  background-repeat: no-repeat;
  background-size: auto 100%;
  padding-left: 155px;
  display: flex;
}

#section1{
  min-height: 100vh;
  background-image: url('../assets/images/headerWola.png');
  background-color: #03002B;
  align-items: center;
}


#section3{
  flex-direction: column;
}

#section7, #section9{
  flex-wrap: wrap;
}

#section8, #section11{
  padding-left: 0px;
}
.degrade{
  background: linear-gradient(180deg, #CECECE 4.74%, #F2F2F2 73.6%);
  box-shadow: 0px 0px 6px rgba(13, 0, 86, 0.15);
}

.padding-block{
  margin-top: 63px;
  margin-bottom: 72px;
}

.pr{
  padding-right: 195px;
}


.left{
  max-width: 60%;
  text-align: left;
}

.columns{
  display:flex;
  text-align: left;
  justify-content: space-between;
}
.col:not(:first-child){
  padding-left: 107px;
}

.mb{
  margin-bottom: 65px;
}
.linkToBottomContainer{
  margin-top:100px
}

.flex-center{
  display: flex;
  align-items: center;
}


</style>
