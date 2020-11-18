<template>
  <div class="container">
    <BreadCrumbs page="tcdg"/>
    <div v-in-viewport id="section1" class="sections">
      <div v-show="loaded" :class="{'talk-us':true,'hidden':!talk}">
        <LinkButton :to="'https://'+referrer+'/contacto/#Gocontainer'" :target="'_blank'">HABLEMOS DE TU PROYECTO</LinkButton>
      </div>
      <div v-show="loaded" class="left">
        <template v-scroll-reveal>  
        <LogoTcdg v-if="!isMobile"/>
        </template>
        <HeadMainText v-scroll-reveal>
            Desarrollando la 
            plataforma de clases
            de guitarra líder en
            toda Iberoamérica
        </HeadMainText>
        <TextSubtitleContent v-scroll-reveal cs-style="color:#e0e0e0">{{(isMobile)?'Upgrade - Plataforma de Educación Online':'Upgrade - Plataforma de Educación Online'}}</TextSubtitleContent>
        <div class="linkToBottomContainer">
          <LinkToBotton text="Explorar el proyecto" @scroll-to="scrollToContent"/>
        </div>
      </div>
      
    </div>
    <div id="section2" class="sections" ref="section2">
      <div class="padding-block left">
        <TextTitleContent v-scroll-reveal>
          Nuestro aporte para lograr una experiencia educativa distinta en el sector.
        </TextTitleContent>
        <TetxtParagraph v-scroll-reveal>
          Focus Mind fue convocado para rediseñar completamente la experiencia educativa de tusclasesdeguitarra.com, una de las plataformas para aprender guitarra online más grande de habla hispana. 
        </TetxtParagraph>

      </div>
     
    </div>
     <div id="section3" class="sections blue-bg pr" ref="section3">
      
      <div  class="padding-block left">
        <TextTitleContent :style="{color:'#fff'}" v-scroll-reveal no-margin="true">
          Scope de trabajo
        </TextTitleContent>
        <TextSubtitleContent :cs-style="{color:'#fff'}" v-scroll-reveal>
          Cómo organizamos el flujo del proyecto y aplicamos The Mind®
        </TextSubtitleContent>

      </div>
      <div class=" columns">
        <div v-scroll-reveal class="col">
          <div class="mb">
            <TextSubtitleContent :cs-style="{color:'#fff'}" >
              <strong>1. Consultoría y visión estratégica digital.</strong>
            </TextSubtitleContent>
          </div>
          <div class="mb">
            <TextSubtitleContent :cs-style="{color:'#fff'}" >
              <strong>2. Definición de Objetivos de negocios.</strong>
            </TextSubtitleContent>
          </div>
          <div class="mb">
            <TextSubtitleContent :cs-style="{color:'#fff'}">
              <strong>3. Proceso de branding</strong>
            </TextSubtitleContent>
            <TetxtParagraph>
              Re-diseño de identidad visual.<br/>
              Re-definición de imagen de marca. <br/>
              Creación de mascota corporativa.<br/>
            </TetxtParagraph>
          </div>
        </div>
        <div v-scroll-reveal="{delay:500}" class="col">
          <div class="mb">
            <TextSubtitleContent :cs-style="{color:'#fff'}">
              <strong> The Mind®</strong>
            </TextSubtitleContent>
            <TetxtParagraph>
              Selección de funcionalidades principales.<br>
              Flujo de Usuario.<br>
              Ilustraciones + Gamificación <br>
              Prototipado - Iteraciones.<br>
              Digital Branding + Gamificación<br>
              Prototipado<br>
              Desarrollo y Q&amp;A
            </TetxtParagraph>
          </div>
        </div>
        <div v-scroll-reveal="{delay:1000}" class="col">
          <div class="mb">
            <TextSubtitleContent :cs-style="{color:'#fff'}" >
              <strong>Duración del proyecto</strong>
            </TextSubtitleContent>
            <TetxtParagraph>
              16 sprints
            </TetxtParagraph>
          </div>
          <div class="mb">
            <TextSubtitleContent :cs-style="{color:'#fff'}">
              <strong>Equipo a cargo</strong>
            </TextSubtitleContent>
            <TetxtParagraph>
             Product Manager <br>
             Project Manager <br>
             Diseñador UX/UI <br>
             Front-End Developer <br>
             Back-End Developer <br>
             UX Copywriter.
            </TetxtParagraph>
          </div>
        </div>
      </div>
     </div>
     <div ref="wrapperObjetives" class="sticky-wrapper" v-in-viewport>
       <WolaSticky :height-wrapper="heights.wrapperObjetives">Definición de objetivos</WolaSticky>
      <div id="section4" class="sections" ref="section4">
        <div v-scroll-reveal class="padding-block align left">
          <div class="mb">
            <TextTitleContent :underline="true">
              El diseño como vehículo para desarrollar negocios.
            </TextTitleContent>
            <TextSubtitleContent cs-style="font-size:20px">
              Nuestro primer acercamiento es para entender los objetivos de negocio que buscamos lograr con el producto. Una vez definido esto, sabemos lo que tenemos que hacer.
            </TextSubtitleContent>
            <Space v-if="isMobile"/>
            <ImageResponsive class="mobile" v-scroll-reveal="{origin:'top'}" :style="{marginBottom:'23px', marginTop:'23px'}" source="tcdg-def1.jpg"/>
          </div>
          <div>
            <TetxtParagraph :size="20" class="mb">
               Uno de los objetivos de negocios que planteamos, fue incrementar la eficacia del producto para lograr visitantes en suscriptores efectivos.
            </TetxtParagraph>
            <TetxtParagraph :size="20" class="mb">
              Al mismo tiempo, buscamos una experiencia de usuario en dispositivos móviles con mayor performance que la actual y con la misma o mejor velocidad de respuesta que le brindaría una App a los usuarios;  para esto seleccionamos hicimos una selección tecnologica acorde.
            </TetxtParagraph>
            <TetxtParagraph :size="20" class="mb">
              Incrementar el tiempo que los estudiantes permanecen en la plataforma y el porcentaje que terminan los cursos.
            </TetxtParagraph>
            <ImageResponsive class="mobile margin-mobile"  v-scroll-reveal="{delay:250,origin:'top'}" :style="{marginBottom:'23px', marginTop:'23px'}"  source="tcdg-def2.jpg"/>
            <Space v-if="isMobile"/>
            <TextSubtitleContent  class="margin-mobile-top" cs-style="font-size:18px">
              <IconPdf  color="#FB8137" cs-style="height:46px;"/> Documentación en PDF
            </TextSubtitleContent>
          </div>

        </div>
        <div class="pr flex-center flex-column pl desktop" >
          <ImageResponsive v-scroll-reveal="{origin:'top'}" :style="{marginBottom:'23px'}" source="tcdg-def1.jpg"/>
          <ImageResponsive v-scroll-reveal="{delay:250,origin:'top'}" source="tcdg-def2.jpg"/>
          
        </div>
      
      </div>
     </div>
     <div ref="wrapperBranding" class="sticky-wrapper" v-in-viewport>
      <WolaSticky :height-wrapper="heights.wrapperBranding">Branding</WolaSticky>
      <div id="section5" class="sections" ref="section5">
        <div class="padding-block" >
          <div class="mb left">
            <TextTitleContent :underline="true">
              Proceso de Branding.
            </TextTitleContent>
            <TetxtParagraph>
              Cómo los usuarios perciban a la marca en el producto es algo escencial.  (destacar algo bold ahí) Para esto, recomendamos al cliente realizar un proceso de re-diseño de marca, donde buscamos mantener la esencia que la misma había transmitido en las diferentes comunidades pero con un estilo más actual, fresco, dinámico y que técnicamente nos permita realizar aplicaciones digitales.
            </TetxtParagraph>
          </div>
        </div>
      </div>
      <div id="section6" class="sections blue-bg" ref="section6">
          <div class="padding-block pr">
              <WolaCite v-scroll-reveal author="Victor Zamora." role="Cliente" image="victor-cite.png">
                "Veníamos de hacer rebranding con otro estudio pero cuando comenzamos con el producto, no nos servía. Focus Mind encontró la manera de lograr lo que imaginabamos;  y lo hicieron en una semana"
              </WolaCite>
          </div>
      </div>
      <div class="sections wrap-on" :style="{justifyContent:'center'}" >
          <div class="padding-block pr columns full-width" :style="{MarginBottom:'31px',maxWidth:'1400px'}">
              <div v-scroll-reveal>
                <TextSubtitleContent cs-style="color:#FB8137">
                  <strong>Logo inicial</strong>
                </TextSubtitleContent>
              </div>
              <div v-scroll-reveal class="arrow">
                  <IconArrowRight color="#FB8137"/>
              </div>
              <div v-scroll-reveal="{delay:250}">
                <TextSubtitleContent cs-style="color:#FB8137">
                  <strong>Conceptualización y semiótica</strong>
                </TextSubtitleContent>
              </div>
              <div v-scroll-reveal="{delay:250}" class="arrow">
                  <IconArrowRight color="#FB8137"/>
              </div>
              <div v-scroll-reveal="{delay:500}">
                <TextSubtitleContent cs-style="color:#FB8137">
                  <strong>Resultado final</strong>
                </TextSubtitleContent>
              </div>
              
          </div>
          <div class="mb pr columns full-width"  :style="{paddingRight:'98px',maxWidth:'1400px',alignItems:'baseline'}">
              <div v-scroll-reveal>
                <ImageResponsive :original="true" source="tcdg_old.png"/>
              </div>
              <div v-scroll-reveal="{delay:250}">
                <ImageResponsive :original="true" source="tcdg_prototype.png"/>
              </div>
              <div v-scroll-reveal="{delay:500}">
                <ImageResponsive :original="true" source="tcdg_final.png"/>
              </div>
              
          </div>
      </div>
      <!-- 
      <div class="sections mob-no-padding" id="section8">
        <WolaImageLogo/>
      </div>
     
      <div class="sections mob-no-padding" id="section11">
        <ImageScroll source="ilustracionFinal.jpg"/>
        
      </div>
      <div class="sections" id="section12">
          <div class="padding-block">
            <div id="text1201" class="align" >
              <div class="mb">
                <WolaTextGold v-scroll-reveal :size="20" :lh="159">
                  Buscábamos que el ecosistema marcario tome vida y transmita lo mismo en todos los soportes donde los usuarios consumieran el contenido.
                </WolaTextGold>
              </div>
              <TetxtParagraph :size="20" v-scroll-reveal="{delay:500}">
                <strong>Las ilustraciones</strong> se utilizaron en las presentaciones de los profesores, las diferentes secciones de la plataforma, los archivos de lectura y en las guías de estudio para los alumnos.
              </TetxtParagraph>
            </div>
            <Space v-if="isMobile"/>
            <div id="image1201">
              <ImageResponsive :lazy="false"  v-scroll-reveal="{origin: 'top'}" source="DigitalBranding.jpg"/>
            </div>
            <div class="desktop" style="margin-left:14px">
              <ImageResponsive :lazy="false"  v-scroll-reveal="{origin: 'top'}" source="mockup.jpg"/>
            </div>

          </div>
      </div> -->
    </div>
    <div ref="wrapperTheMind" class="sticky-wrapper" v-in-viewport>
      <WolaSticky :height-wrapper="heights.wrapperTheMind">The Mind®</WolaSticky>
      <div class="sections wrap-on">
        <div class="padding-block left full-width">
          <WolaTextGold :cs-style="{color:'#0080DA'}" :size="(isMobile)?38:42">
            Cada producto digital nace a través de The Mind®
          </WolaTextGold>
        </div>
        <!-- <div class="left mb ">
          <TextTitleContent underline="true">
            Selección de features
          </TextTitleContent>
          <TetxtParagraph>
            Debido a que este es un MVP se hicieron una selección de las funciones primarios o primordiales para poder desarrollarse en esta primera instancia del producto y realizar el user flow.
          </TetxtParagraph>
        </div> -->
      </div>
      <!-- <div class="sections" id="section20" :style="{backgroundColor:'#f2f2f2'}">
        <div class="pr flex-center columns full-width" style="padding-top:24px;padding-bottom:24px; align-items:baseline">
          <TextSubtitleContent :size="21" class="align" :style="{alignSelf:'center'}">
            <strong>Principales<br>features</strong>
          </TextSubtitleContent>
          <div v-scroll-reveal class="col-feature flex-column align-center">
            <ImageResponsive source="feature1.png" :style="{maxWidth:'134px',paddingBottom:'24px'}"/>
            <TetxtParagraph :size="21" :lh="133" class="align-center">
              Curso con funnel
              de venta e información 
              detallada del curso
            </TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:250}" class="col-feature flex-column align-center" >
            
            <ImageResponsive source="feature2.png" :style="{maxWidth:'134px',paddingBottom:'24px'}"/>
            <TetxtParagraph :size="21" :lh="133" class="align-center">
              Pantalla de estudio
              con progreso 
              y módulos de estudio
            </TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:500}" class="col-feature flex-column align-center">
            <ImageResponsive source="feature3.png" :style="{maxWidth:'134px',paddingBottom:'24px'}"/>
            <TetxtParagraph :size="21" :lh="133" class="align-center">
              Perfil con listado
              de cursos y filtros según
              su estado
            </TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:750}" class="col-feature flex-column align-center">
            <ImageResponsive source="feature4.png" :style="{maxWidth:'134px',paddingBottom:'24px'}"/>
            <TetxtParagraph :size="21" :lh="133" class="align-center">
              Checkout con
              pocos pasos  para el user
            </TetxtParagraph>
          </div>
        </div>
      </div> -->
      <div id="section13" class="sections wrap-on">
        
        <div class="left mb padding-block">
          <TextTitleContent underline="true">
            Benchmarking
          </TextTitleContent>
          <TextSubtitleContent >
             "Los buenos artistas copian, los mejores roban"<br>
             Pablo Picasso.
          </TextSubtitleContent>
          <TetxtParagraph>
            En el proceso de investigación de mercado nos interesaba entender lo que los mejores jugadores de la industria a escala global estaban haciendo, por qué lo estaban haciendo y luego comparar en base a diferentes parámetros lo mejor que podíamos tomar de éstos para crear el mejor producto digital.
          </TetxtParagraph>
        </div>
        <div class="mob-inverted columns full-width mb">
          <div class="">
            <ImageResponsive :lazy="false" :original="true"  v-scroll-reveal="{origin: 'top'}" source="Guitar.jpg" mobile="Crehanamobile.jpg"/>
          </div>
          <div v-scroll-reveal class="flex-center flex-column pl pr">
             <WolaTextGold :cs-style="{color:'#FB8137'}" :size="20" :pb="31">
              Plataforma: Guitar Tricks
            </WolaTextGold>
            <TetxtParagraph>
              <strong>Features destacadas</strong>
            </TetxtParagraph> 
            <TetxtParagraph><strong>1.</strong> Comentarios de alumnos que dan respaldo</TetxtParagraph>
            <TetxtParagraph><strong>2.</strong> Progreso de los cursos que se estan haciendo</TetxtParagraph>
            <TetxtParagraph><strong>3.</strong> Afinador para la guitarra interactivo</TetxtParagraph>
            <TetxtParagraph><strong>4.</strong> Registro simple, pocos pasos</TetxtParagraph>
            <TetxtParagraph><strong>5.</strong> Preferencias para el alumno, una vez logueado</TetxtParagraph>
          </div>
        </div>
        <div class="columns full-width mb">
         
          <div v-scroll-reveal class="flex-center flex-column">
             <WolaTextGold :cs-style="{color:'#FB8137'}" :size="20" :pb="31">
              Plataforma: Fender Play
            </WolaTextGold>
            <TetxtParagraph>
              <strong>Features destacadas</strong>
            </TetxtParagraph> 
            <TetxtParagraph :size="20"><strong>1.</strong>Selector del tipo de lecciones en el home</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>2.</strong> Video explicativo de la plataforma</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>3.</strong> Hightlights del producto</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>4.</strong> Diseño limpio y minimalista</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>5.</strong> Listado de canciones en forma de thumbs</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>6.</strong> LLamados de acción claros para un Free Trial</TetxtParagraph>

          </div>
           <div class="pr pl">
            <ImageResponsive :lazy="false" :original="true"  v-scroll-reveal="{origin: 'top'}" source="fender.jpg" mobile="Domestikamobile.jpg"/>
          </div>
        </div>
        <div class="mob-inverted columns full-width mb">
          <div class="">
            <ImageResponsive :lazy="false" :original="true"  v-scroll-reveal="{origin: 'top'}" source="Crehana-tcdg.jpg"  mobile="Courseramobile.jpg"/>
          </div>
          <div v-scroll-reveal class="flex-center flex-column pl pr">
             <WolaTextGold :cs-style="{color:'#FB8137'}" :size="20" :pb="31">
              Plataforma: Crehana
            </WolaTextGold>
            <TetxtParagraph>
              <strong>Features destacadas</strong>
            </TetxtParagraph> 
            <TetxtParagraph :size="20"><strong>1.</strong> Experiencia de estudio clara, con progreso y material para cada clase</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>2.</strong> Highlights del producto en el desarrollo del curso</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>3.</strong> Checkout con pocos pasos, compras sin registro</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>4.</strong> Membresías con detalles de que ofrece cada plan</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>5.</strong> Hover con video introductorio</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>5.</strong> Thumbs con detalles sobre el curso</TetxtParagraph>

          </div>
        </div>
        <div class="columns full-width mb">
         
          <div v-scroll-reveal class="flex-center flex-column">
             <WolaTextGold :cs-style="{color:'#FB8137'}" :size="20" :pb="31">
              Plataforma: Domestika
            </WolaTextGold>
            <TetxtParagraph>
              <strong>Features destacadas</strong>
            </TetxtParagraph> 
            <TetxtParagraph :size="20"><strong>1.</strong> Thumb del curso con imagen y datos sobre el mismo</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>2.</strong> Filtros para buscar por categorías los cursos</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>3.</strong> Video de presentación del curso, dentro del curso ampliado</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>4.</strong> División de contenido por módulos en forma de dropdowns</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>4.</strong> Checkout claro e intuitivo, con pocos pasos para la compra </TetxtParagraph>

          </div>
           <div class=" pr pl">
            <ImageResponsive :lazy="false" :original="true"  v-scroll-reveal="{origin: 'top'}" source="Domestika-tcdg.jpg" mobile="Googlemobile.jpg"/>
          </div>
        </div>
        <div class="padding-block left">
           <TextTitleContent underline="true">
            Los usuarios como centro del producto, siempre.
          </TextTitleContent>
          <TetxtParagraph>
            La plataforma educativa contaba con más de 17000 alumnos, por lo tanto el objetivo era entender junto a nuestro cliente los distintos tipos de usuarios, sus patrones de comportamiento, intereses y puntos de dolor. 
          </TetxtParagraph>

        </div>
      
      </div>
      <div class="sections mob-no-padding" id="section14" style="background-color:#f2f2f2;">
        <div class="padding-block pr full-width desktop">
            <div class="columns mb">
              <div v-scroll-reveal class="col profile">
                <div class="mb">
                  <TextRegularContent cs-style="color:#1B71B9; font-size:18px; line-height:27px;">
                      <strong>1° perfil</strong>
                  </TextRegularContent>
                  <br>
                  <TextSubtitleContent class="mb" cs-style="line-height:120%">
                    <strong>Intermedio/avanzado</strong>
                  </TextSubtitleContent>
                </div>  
                
                <div class="mb">
                <ImageResponsive mw="235px" class="mb" source="user_tcdg_1.png"/>
                </div>
                <div>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    <strong>Federico</strong>
                  </TextSubtitleContent>
                  <br>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    + 30 años, hombre
                  </TextSubtitleContent>
                   <TetxtParagraph :size="20">
                    <strong>Integración tecnológica:</strong> Intermedia/avanzada
                  </TetxtParagraph> 
                  <div :style="{maxWidth:'450px'}">
                    <TetxtParagraph :size="20">
                      <strong>Productos Digitales que usa:</strong><br>
                      Twitter, Spotify, Itunes, Youtube, Instagram, Sibelius.
                    </TetxtParagraph>
                    <TetxtParagraph :size="20">
                    "Quiero aprender técnicas copadas/avanzadas de guitarra por alguien que la tenga clara."
                    </TetxtParagraph>
                  </div>
                </div>
              </div>
              <div v-scroll-reveal="{delay:250}" class="col profile">
                <div class="mb">
                  <TextRegularContent cs-style="color:#1B71B9; font-size:18px; line-height:27px;">
                    <strong>2° perfil</strong>
                  </TextRegularContent>
                  <br>
                  <TextSubtitleContent class="mb" cs-style="line-height:120%">
                    <strong> Principiante</strong>
                  </TextSubtitleContent>
                </div>
                
                <div class="mb">
                <ImageResponsive mw="235px" class="mb" source="user_tcdg_2.png"/>
                </div>
                <div>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    <strong>María</strong>
                  </TextSubtitleContent>
                  <br>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    + 20 años, mujer
                  </TextSubtitleContent>
                  <!-- <TetxtParagraph :size="20">
                    <strong>Perfil socioeconómico: </strong><br>
                    clase media - media alta
                  </TetxtParagraph> -->
                   <TetxtParagraph :size="20">
                    <strong>Integración tecnológica:</strong> Avanzada

                  </TetxtParagraph> 
                  <div :style="{maxWidth:'450px'}">
                    <TetxtParagraph :size="20">
                      <strong>Productos Digitales que usa:</strong><br>
                      Instagram, Tik Tok, Spotify, Youtube y Vimeo.
                    </TetxtParagraph>
                    <TetxtParagraph :size="20">
                    "Quiero aprender  a tocar la guitarra y poder manejar mis horarios, de forma práctica y cómoda desde mi casa."
                    </TetxtParagraph>
                  </div>
                </div>
              </div>
              <div v-scroll-reveal="{delay:500}" class="col profile">
                <div class="mb">
                  <TextRegularContent cs-style="color:#0080DA; font-size:18px; line-height:27px;">
                    <strong>3° perfil</strong>
                  </TextRegularContent>
                  <br>
                  <TextSubtitleContent class="mb" cs-style="line-height:120%">
                    <strong>Suscriptor</strong>
                  </TextSubtitleContent>
                </div>
                <div class="mb">
                <ImageResponsive mw="235px" class="mb"  source="user_tcdg_3.png"/>
                </div>
                <div>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    <strong>Marcos</strong>
                  </TextSubtitleContent>
                  <br>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    + 25 años, hombre
                  </TextSubtitleContent>
                   <TetxtParagraph :size="20">
                    <strong>Integración  tecnológica:</strong>  Intermedia/Avanzada

                  </TetxtParagraph>  
                  <div :style="{maxWidth:'450px'}">
                    <TetxtParagraph :size="20">
                      <strong>Productos Digitales que usa:</strong><br>
                      Youtube, Spotify, TCDG vieja plataforma, Twitter, Instagram.
                    </TetxtParagraph>
                    <TetxtParagraph :size="20">
                    "Quiero terminar el curso de guitarra que comencé y cumplir con las expectativas de aprendizaje."
                    </TetxtParagraph>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <WolaProfilesMob class="mobile"/>
      </div>
      <div v-scroll-reveal class="sections mb blue-bg" id="section15" style="justify-content:center">
        <div class="padding-block pr">
          <WolaTextGold theme="tcdg" :size="33">
            La clave es entender siempre los <em>puntos de dolor</em> de los usuarios.
          </WolaTextGold>
        </div>
      </div>
      <div class="sections wrap-on" id="section32" :style="{justifyContent:'center'}">
        <div class="full-width pr" style="margin-bottom:2px; z-index:1; max-width:1400px">
          <TcdgPainPoints v-scroll-reveal="{origin:'top'}" :cs-style="{maxWidth:(isMobile)?'200px':'1400px'}"/>
        </div>
        <div class="pr full-width" :style="{maxWidth:'1400px'}">
            <div class="columns mb" style="justify-content:space-evenly">
              <div v-scroll-reveal class="col flex-column" :style="{flex:'1'}">
                <div class="full-width align-center mb desktop">
                  <TetxtParagraph color="#2B80DA" :size="20" :btn="true">
                    <strong>Intermedio</strong>
                  </TetxtParagraph>
                </div>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    ¿Valdrá la pena pagar por esto?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                   ¿No será esto un curro?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    ¿Sabe de verdad o solo enseña cuatro acordes?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    ¿No es la mismo que youtube?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    ¿Para qué voy a pagar?
                </TetxtParagraph>
                <!-- <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    ¿Cómo sé que me va a servir?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    ¿No será aburrido de ver?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    Falta de disciplina para estudiar a distancia
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    Falta de feedback de un profesor
                </TetxtParagraph> -->
              </div>
              <div v-scroll-reveal="{delay:250}" class="col desktop" style="padding-left:50px; flex:1">
                <div class="full-width align-center mb">
                  <TetxtParagraph color="#2B80DA" :size="20" :btn="true">
                    <strong>Principiante</strong>
                  </TetxtParagraph>
                </div>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    ¿No estaré desperdiciando la plata?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                   ¿Esta persona es un profesional serio?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    ¿No será una truchada para sacarme plata?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    ¿Podré aprender bien simplemente con videos por internet?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    ¿Me queda una garantía de que hice el curso?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                  ¿No es lo mismo que hacerlo en youtube?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                  ¿Para qué voy a pagar?
                </TetxtParagraph>
                
              </div>
              <div v-scroll-reveal="{delay:500}" class="col desktop" style="padding-left:50px;flex:1">
                <div class="full-width align-center mb">
                  <TetxtParagraph color="#2B80DA" :size="20" :btn="true">
                    <strong>Suscriptor</strong>
                  </TetxtParagraph>
                </div>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                  ¿Vale la pena seguir pagando el curso?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                  ¿Qué constancia me queda de que aprendí?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                  ¿Me será útil lo que estoy aprendiendo?
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                  No sé si quiero seguir pagando, pero tampoco quiero quedarme a mitad de camino.
                </TetxtParagraph>
                <!-- <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                   Falta de tiempo. Estrés y cansancio
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    Especificidad y practicidad en los cursos
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    Aburrirme y no poder darle seguimiento
                </TetxtParagraph>
                <TetxtParagraph :size="16" theme="tcdg" item-icon="x">
                    Cómo se traduce ésto en resultados (ROI)
                </TetxtParagraph> -->
              </div>
            </div>
        </div>
      </div>
      <div class="sections blue-bg" id="section16" :style="{paddingTop:'40px',paddingBottom:'40px'}">
        <div class="flex-center">
          <ImageResponsive  :original="true" source="must_tcdg.png"/>
        </div>
        <div class="padding-block align-center flex-center pr pl mob-no-padding">
          <WolaTextGold theme="tcdg" :size="33">
            Una vez definidos, entendemos cómo el producto puede hacerle la vida más simple a nuestro usuario.
          </WolaTextGold>
        </div>
      </div>
      <div class="sections" id="section17">
        <div class="padding-block pr full-width">
          <div class="columns mb" style="justify-content:space-evenly">
            <div v-scroll-reveal class="col flex-column must-given">
              
              <TetxtParagraph :size="16">
                <IconCheck color="#0080DA"/> Calidad del producto y respaldo
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Conocimientos/técnicas de perfeccionamiento que no encontras en otros canales
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Enseñanza de calidad a cargo de un profesional reconocido.
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Flexibilidad/libertad en la plataforma opciones de pago
              </TetxtParagraph>
            </div>
            <div v-scroll-reveal="{delay:250}" class="col must-given desktop" style="padding-left:50px">
              
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Calidad del producto y respaldo
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Flexibilidad/libertad en la plataforma opciones de pago
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Meta a la cuál llegar.
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> No vas a encontrar este contenido en Youtube
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Flexibilidad para dejar y retomar las clases a gusto.
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Seguimiento/motivación durante el aprendizaje
              </TetxtParagraph>
            </div>
            <div v-scroll-reveal="{delay:500}" class="col must-given desktop" style="padding-left:50px">
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Innovación y practicidad a nivel UX
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Opciones de pago descuentos
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> No vas a encontrar este contenido en Youtube
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Motivación/Recompensas a medida que se avanza
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck color="#0080DA"/> Meta a la cuál llegar, demostración clara de avances.
              </TetxtParagraph>
            </div>
          </div>
          <div class="left" v-scroll-reveal>
            <TextSubtitleContent cs-style="font-size:18px">
                <IconPdf color="#FB8137" cs-style="height:46px;"/> Documentación del proceso
            </TextSubtitleContent>

          </div>
        </div>
      </div>  
      <div v-scroll-reveal class="sections" id="section18">
        <div class="padding-block left">
          <TextTitleContent underline="true">
            Flujo de usuario
          </TextTitleContent>
          <TextSubtitleContent :cs-style="{color:'#0080DA'}"  v-scroll-reveal>
            Todos los caminos conducen al checkout?
          </TextSubtitleContent>
          <TetxtParagraph v-scroll-reveal>
            Una vez que comprendimos el flujo de usuario, lo dejamos documentado para entender qué deberíamos hacer en el diseño visual del producto.
            <!-- Debido a que este es un MVP se hicieron una selección de las funciones primarios o primordiales para poder desarrollarse en esta primera instancia del producto y realizar el user flow. -->
          </TetxtParagraph>
        </div>
      </div>
       <div v-scroll-reveal class="sections blue-bg" >
        <div class="padding-block columns pr">
          <div class="col" :style="{display:'flex',alignItems:'center'}">
            <div>
              <ImageResponsive  source="tick.png"/>
            </div>
            <TextSubtitleContent :cs-style="{color:'#fff',marginLeft:'31px'}">
              Features
              seleccionadas
            </TextSubtitleContent>
          </div>
          <div class="col">
            <TetxtParagraph :size="21" color="#fff">
              - Selección de cursos<br>
              - Ganar y acumular premios<br>
              - Elegir preferencias o gustos musicales<br>
              - Ver los progresos de cada curso<br>
              - Elegir el orden de aprendizaje de las clases
            </TetxtParagraph>
          </div>
          <div class="col">
            <TetxtParagraph :size="21" color="#fff">
              - Descargar material de cada clase<br>
              - Poder dar por finalizada una clase<br>
              - Pagar y luego registrarse<br>
              - Registro con sólo un mail
            </TetxtParagraph>
          </div>
        </div>
      </div>
      <div class="sections pr" id="section21">
        <div v-scroll-reveal="{origin:'top'}" class="padding-block full-width">
          <ImageResponsive source="tcdg_userflow.jpg" mobile="user-flow-mobile.png"/>
        </div>
      </div>
      <div v-scroll-reveal class="sections" id="section22">
        
        <div class="padding-block left">
          <TextTitleContent underline="true">
            Wireframings
          </TextTitleContent>
          <TetxtParagraph>
            Visualizar las ideas en papel para volverlas reales con un teclado y mouse. El proceso de diseño comenzó con bocetados de la estructura del sitio en lapiz para, una vez aprobadas, convertirlas reales a través de un monitor.
          </TetxtParagraph>
        </div>
      </div>
      <div class="sections wrap-on" id="section23" ref="section23">
        
        <div class="padding-block left" :style="{marginTop: (isMobile)?'106px':'233px'}">
          <TextSubtitleContent>
            <strong>Mobile First</strong>
          </TextSubtitleContent>
          <TetxtParagraph>
            El 67% del uso de la plataforma era desde dispositivos móviles, por eso nuestro acercamiento de de diseño fue a través de "mobile first"
          </TetxtParagraph>
        </div>
        
        <div class="full-width pr wire-section" id="wired" v-in-viewport>
          <ImageResponsive :lazy="false" source="tcdg-wires_1.jpg"/>
        </div>
        <div class="full-width pr wire-section" id="midle" v-in-viewport>
          <ImageResponsive :lazy="false" source="tcdg-wires_2.jpg"/>
        </div>
        <div class="full-width pr wire-section" id="hifi" v-in-viewport>
          <ImageResponsive :lazy="false" source="tcdg-wires_3.jpg"/>
        </div>
        <WolaStickyTop theme="tcdg" :height-wrapper="heights.section23"/>
      </div>
      <div id="section7" class="sections" ref="section">
        <div class="padding-block left">
          <TextTitleContent :underline="true">
            Conectando las comunidades digitales con el producto.
          </TextTitleContent>
          <TextSubtitleContent :cs-style="{color:'#FB8137'}">
            Creación de una mascota corporativa.
          </TextSubtitleContent>
          <TetxtParagraph v-scroll-reveal>
            El fundador de tusclasesdeguitarra.com es un influencer digital que cuenta con millones de seguidores en Youtube, Instagram y Facebook. Una de los pilares en el diseño del producto, era no perder la relación cercana que él mantenía con sus comunidades a través de las distintas redes sociales.
          </TetxtParagraph>

        </div>
        <div class="padding-block full-width">
          <CarouselComponent theme="tcdg" :images="imagesSlide" />
        </div>      
      </div>
      <div class="sections blue-bg">
        <div class="padding-block pr">
          <WolaCite v-scroll-reveal author="Mario Freiria." role="Cliente" image="mario-cite.png">
            “Tusclasesdeguitarra es para mi una escuela donde mis alumnos aprenden mi pasión y lo que se. En las redes tengo una relación muy cercana con ellos y temía que se vuelva muy fría. Lo que hizo Focus Mind fue algo de otra dimensión”.
          </WolaCite>
        </div>
      </div>
       <div id="section9" class="sections mob-no-padding" ref="section9" :style="{justifyContent:'center'}">
          <div class="padding-block mob-padding">
              <div class="left full-width">
                <div :style="{marginBottom:'42px'}">
                <TextSubtitleContent :cs-style="{color:'#FB8137'}" v-scroll-reveal>
                  Gamificación
                </TextSubtitleContent>
                </div>
                <TetxtParagraph v-scroll-reveal>
                  Para resolver el problema de abandono de los cursos por parte de los alumnos y el aburrimiento cuando estudiaban en la plataforma, creamos una experiencia de estudio interactiva, dinámica y que premie el avance de los alumnos a través de un proceso de gamificación.
                </TetxtParagraph>
              </div>
          </div>
          <div class="padding-block pr full-width">
            <div class="columns mb" :style="{justifyContent:'space-evenly'}">
              <div v-scroll-reveal class="col steps" id="step1">
                  <TextSubtitleContent class="mob-padding" cs-style="color:#FB8137;">
                    <strong>1. Bosquejo a mano <br>de los instrumentos.</strong>
                  </TextSubtitleContent>
                  <Space v-if="isMobile"/>
                  <ImageResponsive source="tcdg_boceto1.jpg"/>
              </div>
              <div v-scroll-reveal="{delay:250,origin:'top'}" class="col steps" id="step2" style="">
                  <TextSubtitleContent class="mob-padding" cs-style="color:#FB8137;">
                    <strong>2. Vectorización <br>y coloreado digital.</strong>
                  </TextSubtitleContent>
                  <Space v-if="isMobile"/>
                  <ImageResponsive source="tcdg_boceto2.jpg"/>
              </div>
            </div>
           
          </div> 
          <div v-scroll-reveal="{delay:500}" id="step3" style="display:flex; text-align:left; flex-direction:column; width:100%; max-width:1600px;">
              <TextSubtitleContent class="mob-padding" cs-style="color:#FB8137;">
                <strong>3. Conjunto de premios para aplicar en la plataforma.</strong>
              </TextSubtitleContent>
              <Space v-if="isMobile"/>
              <ImageScroll theme="tcdg" source="tcdg_boceto3.png"/>
               
          </div>
      </div>
     
      <div id="section10" class="sections" ref="section10" :style="{justifyContent:'center'}">
          <div class="padding-block align-center">
              <WolaCiteSimple theme="tcdg">
                Conceptualizamos e ilustramos cada premio y luego determinamos dónde aparecerían en el flujo del usuario.
              </WolaCiteSimple>
          </div>
      </div>

      <div class="sections pr" :style="{backgroundColor:'#ECECEC'}">
          <ImageResponsive source="tcdg_recursos.png"/>
      </div>
      <div class="sections" id="section24">
        
        <div class="padding-block">
          <div class="left mb">
            <TextTitleContent underline="true">
              Prototipos en alta calidad 
            </TextTitleContent>
            <TetxtParagraph>
              Los prototipos fueron útiles para obtener feedback por parte del cliente, iterar internamente y contar con una simulación de lo que sería la experiencia del usuario, y que de esta manera tengamos una aproximación de cómo funcionaría el producto.
            </TetxtParagraph>
          </div>
          <div class="pr">
            <ImageResponsive source="tcdg_prototipo.png"/>
          </div>
        </div>
      </div>
      <!-- <div class="sections pr flex-center" id="section25" :style="{backgroundColor:'#03002B',justifyContent:'center'}">
        
        <div class="padding-block">
          <VideoComponent poster="videoCover.jpg" :h="600" :sources="{mp4:'prototipado-2.mp4'}"/>
        </div>
      </div> -->
      <div class="sections pr wrap-on" id="section26">
        
        <div class="padding-block full-width" :style="{display:'flex'}">
          <div id="develop" v-scroll-reveal class="align ">
            <TextTitleContent underline="true">
              Decisiones en cuanto a tecnología.
  
            </TextTitleContent>
            <TetxtParagraph :size="20" v-scroll-reveal class="mb">
              <strong>Cómo logramos los mismos objetivos sin desarrollar una app.</strong>
            </TetxtParagraph>
            <ImageResponsive class="mobile" :lazy="false" v-scroll-reveal="{origin:'top'}"  source="compu.jpg"/>
            <TetxtParagraph :size="20" v-scroll-reveal>
              Nuestro cliente tenía en mente posterior a este producto la creación de una app, principalmente por motivos de experiencia de usuario y performance en dispositivos moviles.
            </TetxtParagraph>
            
            <TetxtParagraph :size="20" v-scroll-reveal>
              Las tecnologías que elegimos para el producto y la manera en que creamos el mismo, nos permitió lograr los mismos objetivos a través del diseño de una SPA (single page application) que brinda la experiencia de usuario de una App nativa sin salir de la comodidad del navegador.
            </TetxtParagraph>
          </div>
          <div v-scroll-reveal="{origin:'top'}" class="pl desktop">
            <ImageResponsive :lazy="false" v-scroll-reveal="{origin:'top'}"  source="compu.jpg"/>
          </div>
          
        </div>
        <div v-scroll-reveal class="padding-block flex-center wrap-on">
          <TetxtParagraph>
            <strong>Tecnologías utilizadas:</strong>
          </TetxtParagraph>
          <WolaTechnologies :h="46" theme="tcdg" icon="react"/>
          <WolaTechnologies :hm="45" theme="tcdg" :h="64" icon="jquery"/>
          <WolaTechnologies :hm="45" theme="tcdg" :h="53" icon="next"/>
          <WolaTechnologies :hm="25" theme="tcdg" :h="40" icon="laravel"/>
        </div>
      </div>
      <div class="sections pr blue-bg" id="sections27" >
        <div v-scroll-reveal class="padding-block align-center">
          <TextSubtitleContent :cs-style="{color:'#fff'}">
            <strong>"Dreams without goals, are just dreams".</strong> Esto es lo que logramos con el producto, <strong>en números</strong>.
          </TextSubtitleContent>
        </div>
      </div>
      <div class="sections pr" id="sections28" >
        <div class="padding-block columns full-width">
          <div v-scroll-reveal class="flex-column align-center">
            <WolaTextGold theme="tcdg" :size="75"><em>97%</em></WolaTextGold>
            <div :style="{maxWidth:'350px'}">
              <TetxtParagraph :size="20">Aceptación del nuevo producto;<br>De acuerdo al feedback de los alumnos activos que tenía la plataforma.</TetxtParagraph>
            </div>
          </div>
          <Space v-if="isMobile"/>
          <div v-scroll-reveal="{delay:250}" class="flex-column align-center">
            <WolaTextGold theme="tcdg" :size="75"><em>42%</em></WolaTextGold>
            <div :style="{maxWidth:'350px'}">
              <TetxtParagraph :size="20">Incremento en ventas.<br>El nuevo producto es un 42% más efectivo que el anterior en convertir visitantes en suscriptores. </TetxtParagraph>
            </div>
          </div>
          <Space v-if="isMobile"/>
          <div v-scroll-reveal="{delay:500}" class="flex-column align-center">
            <WolaTextGold theme="tcdg" :size="75"><em>45%</em></WolaTextGold>
            <div :style="{maxWidth:'350px'}">
              <TetxtParagraph :size="20">Incremento de velocidad de carga, comparado con el sitio anterior.</TetxtParagraph>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sections pr flex-center" id="sections27" :style="{backgroundColor:'#f2f2f2',paddingTop:'24px',paddingBottom:'24px'}">
      <div v-scroll-reveal="{origin:'top'}">
        <ImageResponsive source="recurso2_tcdg.png"/>
      </div>
      <div v-scroll-reveal class="pl flex-column align">
        <TetxtParagraph>Hora de aprender. Te dejamos el enlace para que navegues el producto y aprendas a tocar con el mejor (y el diseño de los mejores)</TetxtParagraph>
        <br>
        <LinkExternal theme="tcdg" url="https://premium.tusclasesdeguitarra.com">Conocer el sitio <ArrowFullRight color="#2B80DA"/></LinkExternal> 
      </div>
    </div>
    <div class="sections pr" id="sections34" :style="{justifyContent:'center'}">
      
      <div class="align padding-block full-width" :style="{maxWidth:'1489px'}">
        <div class="mb">
          <TextSubtitleContent ><strong>Créditos</strong></TextSubtitleContent>
        </div>
        <br>
        <div class="columns desktop" :style="{justifyContent:'left'}">
          <div v-scroll-reveal class="col">
            <TextSubtitleContent :size="18"><strong>Juan Pablo Laco</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Ejecutivo de cuentas, <br>consultor UX, PM.</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Victor Zamora</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Product Manager</TetxtParagraph>
            
          </div>
          <div v-scroll-reveal="{delay:250}" class="col" :style="{paddingLeft:'140px'}">
            <TextSubtitleContent :size="18"><strong>Maira Graff</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Diseñadora UX/UI</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Juan Alfieri</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Front-end Developer</TetxtParagraph>
            
          </div>
         <div v-scroll-reveal="{delay:500}" class="col desktop" :style="{paddingLeft:'140px'}">
            <TextSubtitleContent :size="18"><strong>Jacsiel Rodriguez</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Back-end Developer</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Martina Lobato</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Copywriter</TetxtParagraph>
          </div>
        </div>
        <div class="columns mobile full-width" :style="{justifyContent:'left'}">
            <TextSubtitleContent :size="18"><strong>Juan Pablo Laco</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Ejecutivo de cuentas, <br>consultor UX, PM.</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Victor Zamora</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Product Manager</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Maira Graff</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Diseñadora UX/UI</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Juan Alfieri</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Front-end Developer</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Jacsiel Rodriguez</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Back-end Developer</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Martina Lobato</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Copywriter</TetxtParagraph>
        </div>
      </div>
    </div>
    <div class="sections mobile" :style="{backgroundColor:'#03002B'}" id="sections37">
      
      <div class="align padding-block full-width">
        <TextSubtitleContent cs-style="color:#fff;"><strong>¿Interesado en hacer algo similar para tu producto o servicio?</strong></TextSubtitleContent>
        <br>
        <br>
        <LinkButton variant="pink-transparent-white" :with-arrow="false" :to="'https://'+referrer+'/contacto/#Gocontainer'" :target="'_blank'">HABLEMOS DE TU PROYECTO</LinkButton>
      </div>
    </div>
    <Space/>
    <div id="section30" ref="section30" class="sections pr wrap-on" :style="{marginBottom:'90px', justifyContent:'center'}">
      <div class="full-width align mb" :style="{maxWidth:'1489px'}">
        <TextSubtitleContent><strong>Casos de éxito relacionados</strong></TextSubtitleContent>
      </div>
      <div id="stude-cases" class="columns full-width" :style="{justifyContent:'space-evenly'}">
        <div v-scroll-reveal="{origin:'top'}" class="col flex-column">
          <div>
            <a v-if="isMobile" href="http://app.focusmind.net/success/tcdg/">
              <ImageResponsive source="wola-thumb.jpg"/>
            </a>
            <ImageResponsive v-else source="wola-thumb.jpg"/>
          </div>
          
          <div class="project-detail">
            <TextSubtitleContent cs-style="font-size:17px; margin-bottom:0; line-height:120%">
              <strong>WOLA</strong><br>
              Plataforma educativa.
            </TextSubtitleContent>
            <LinkButton class="desktop"  :with-arrow="true" :style="{paddingLeft:'12px'}" variant="blue-inverted"  to="http://app.focusmind.net/success/tcdg/">VER CASO DE ÉXITO</LinkButton>
          </div>

        </div>
        
        <div v-scroll-reveal="{origin:'top',delay:250}" class="col flex-column" >
          <div class="">
            <a v-if="isMobile" :href="'https://'+referrer+'/proyecto-chubut/'">
              <ImageResponsive source="chubut.jpg"/> 
            </a> 
            <ImageResponsive v-else source="chubut.jpg"/> 
          </div>
          <div class="project-detail">
            <TextSubtitleContent cs-style="font-size:17px; margin-bottom:0; line-height:120%">
              <strong>Chubut Turismo </strong><br>
              App y sitio web interactivo 
            </TextSubtitleContent>
            <LinkButton class="desktop" :with-arrow="true" :style="{paddingLeft:'12px'}" variant="blue-inverted" :to="'https://'+referrer+'/proyecto-chubut/'">VER CASO DE ÉXITO</LinkButton>
          </div>

        </div>
        <div v-scroll-reveal="{origin:'top',delay:250}" class="col flex-column mobile full-width" >
         
          <LinkButton :with-arrow="false" variant="blue-inverted" :to="'https://'+referrer+'/casos-de-estudio/'">VER TODOS LOS CASOS DE ÉXITO</LinkButton>

        </div>
      </div>
    </div>
    <div ref="section31" class="know-more full-width desktop"  v-on:mouseover="toogleBehance(true)" v-on:mouseleave="toogleBehance(false)">
      <div class="align behance-flex">
        <div :class="{'behance-on':showedBehance,'behance-icon':true}">
          <a :href="'https://'+referrer+'/casos-de-estudio/'">
          <ImageResponsive :lazy="false" source="mind-hover.png"/>
          </a>
        </div>
        <div>
          <TextHeavyContent style="white-space:pre">{{(showedBehance)?prefooter.on:prefooter.off}}</TextHeavyContent>
        </div>
      </div>
      <div class="align link">
        <LinkButton variant="pink-transparent" :with-arrow="true" :to="'https://'+referrer+'/casos-de-estudio/'">VER MAS</LinkButton>
      </div>

    </div>
    <div class="sections footer mob-no-padding" id="sections29" >
      <div class="full-width flex-column flex-center" :style="{alignItems:'center',marginBottom:'0'}">
        <div id="footer-logo" class="logo-footer"  :style="{width:'249px'}">
          <ImageResponsive source="logo-footer.png"/>
        </div>
        <div id="copyright" class="full-width padding-footer" :style="{marginBottom:'10px'}">
          <TextRegularContent cs-style="font-size:15px;color:#a7a5be ">
            © 2019 | FOCUS MIND MARKETING &amp; INNOVATION<br>
            DOING THINGS THAT MATTER SINCE 2014
          </TextRegularContent>
        </div>
        <div id="footer-social" class="full-width padding-footer" :style="{display:'flex',flexDirection:'row-reverse', backgroundColor:'#080057',paddingBottom:'14px',paddingTop:'14px'}">
          <IconsSocial data-hover="Escucha nuestra música" to="https://open.spotify.com/user/21eoh7kmmqsoe3dp4gda2lcsi?si=yXXMs8YnQSKHU84e9D7piQ" icon="spotify"/>
          <IconsSocial data-hover="Lo que hacemos en video" to="https://vimeo.com/focusmindmkt" icon="vimeo"/>
          <IconsSocial data-hover="La vida en la agencia" to="https://www.instagram.com/focusmindmkt/" icon="instagram"/>
          <IconsSocial data-hover="Seguinos en Facebook" to="https://www.facebook.com/focusmindco/" icon="facebook"/>
          <IconsSocial data-hover="Nuestro Portfolio" to="https://www.behance.net/focusmind" icon="behance"/>
          <IconsSocial data-hover="Conversá con Nosotros" to="https://twitter.com/focusmindmkt" icon="twitter"/>
        </div>
      </div>
    </div>
    <div  v-on:click="scrollTop()" class="sections mob-no-padding" :style="{paddingLeft:0}" id="sectionsArrowTop">
      <div id="arrow-up" class="full-width">

        <IconArrowUpSimple cs-style="width:36px;height:36px;"/>
      </div>
    </div>
    
   
  </div>
</template>

<script>
export default {
  mounted(){  
    
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = (document.documentElement.clientHeight-64) * 0.01;
    let vw = document.documentElement.clientWidth;
    //console.log(document.documentElement.clientHeight,window.innerHeight);
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
     window.addEventListener('load', () => {
         this.loaded = true;
    })
    if (document.readyState === 'complete'){
        setTimeout(function(){
          this.loaded = true;
        },1000)
         
    }
    const instancia = this;
    setTimeout(function(){
      Object.keys(instancia.$refs).forEach(element => {
        let target = instancia.$refs[element];
        instancia.heights[element] = (target)?target.clientHeight:400;
      });
    },1000);
    
    jQuery(window).on('scroll',function(e){
      let target = instancia.$refs['section30'];
      let top  = target.offsetTop;
        if(($(window).scrollTop() + $(window).height()) > top) {
            
            instancia.talk = false
        }else{
            instancia.talk = true
        }
    })
      
  },
  methods:{
    scrollToContent(){
      let target = this.$refs['section2'];
      let top  = target.offsetTop;
      jQuery("html, body").animate({ scrollTop: top },800);
      //window.scrollTo(0, top);
    },
    scrollTop(){
      jQuery("html, body").animate({ scrollTop: 0 });
    },
    
    getHeightWrapper(wrapper){
      let target = this.$refs[wrapper];
      return (target)?target.clientHeight:400;
    },
    toogleBehance(active){
      this.showedBehance = active
    }
  },
  data(){
    return {
      loaded:false,
      showedBehance:false,
      talk:true,
      heights:{
        wrapperBranding:400,
        wrapperObjetives:400,
        section23:400,
        wrapperTheMind:400
      },
      prefooter:{
        on:'DESCUBRIR\nCASOS\nDE ESTUDIO.',
        off:'CONOCÉ\nMÁS DE NUESTRO\nTRABAJO.'
      },
      imagesSlide:[
        {
          src:'tcdg_1.jpg',
          text:'Exploración y proceso \nde digitalización.'
        },
        {
          src:'tcdg_2.jpg',
          text:'Definición de valores \ndel personaje.'
        },
        {
          src:'tcdg_3.jpg',
          text:'Aplicación en las \ninteracciones del producto.'
        }
      ]
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
  background-size: auto;
  padding-left: 155px;
  display: flex;
}

.wrap-on{
  flex-wrap: wrap;

}

#section1{
  min-height: 100vh;
  background-image: url('~assets/images/headerTCDG.png');
  background-color: #1B71B7;
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
#section12>div{
  display:flex;
  align-items:center;
  margin-top:0
}
#step2{
  padding-left:50px
}

.blue-bg{
  background: #0080DA;
}
.padding-block{
  margin-top: 63px;
  margin-bottom: 72px;
}

.pr{
  padding-right: 195px;
}
.pl{
  padding-left:67px;
}


.left{
  max-width: 50%;
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

.col.profile{
    flex: 1;
    padding-left: 0px !important;
    margin-left: 50px;
}
.col.profile:first-child{
  margin-left:0;
}

.mb{
  margin-bottom: 65px;
}
.linkToBottomContainer{
  margin-top:70px
}

.flex-center{
  display: flex;
  align-items: center;
}

.flex-column.flex-center{
  align-items: left;
  justify-content:center;
}

.flex-column{
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
  align-items: flex-start;
}

.full-width{
  width: 100%;
}

.flex-important{
  flex-grow: 2;
}

.align{
  text-align: left;
}
.align-center{
  text-align:center;
}

.col-feature{
  margin-left:52px;
  width:186px;
}

.wire-section.in-viewport ~ .wrapper .stick-item {
  opacity: .6;
}

#wired.in-viewport ~ .wrapper .paper-step{
  opacity: 1;
}
#midle.in-viewport ~ .wrapper .mid-step{
  opacity: 1;
}
#hifi.in-viewport ~ .wrapper .hi-step{
  opacity: 1;
}
.sticky-wrapper{
  max-width: 100% ;
}
.must-given::before{
    content: '';
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAxCAMAAADObShvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABCUExURQAAACCA3zCA3yiA1zCA3yuA2jCA2iyB2vuBOHeAnyuA2iuA2SuA2jmAzyuA2nmAnYaAk7qAarqBaseBX8eBYPuBN63STXgAAAAOdFJOUwAQECAgMDBvgK+/z8/vQsahkwAAADpJREFUGNPtxdERgDAIBcF7gDH9V5s4AazADtyfBeYEA/j7zqRA4/auFeNyOs0cFHYKTjqqyi08ePoFc3oPeYckJvsAAAAASUVORK5CYII=');
    height: 49px;
    width: 70%;
    position: absolute;
    top: -64px;
    background-repeat: no-repeat;
    background-position-x: center;
}
.talk-us{
  position:fixed;
  right:142px;
  top:25px;
  z-index:3;
  transition:all .5s ease
}

#section1.in-viewport .talk-us{
  top:90px
}

.footer{
  background-image: url('data:image/webp;base64,UklGRpoNAABXRUJQVlA4WAoAAAAIAAAA/wQA1AEAVlA4IEoKAACwmwCdASoABdUBPlEokkcjoqGhIAgAcAoJaW7hbOfvoE0O0Fz///8/2/71/aMf/5n2h1YJ//0l4B/+baaXnT7AFBjpyGdDYzych77ZORHe99snIe+2TkPfbFX/Rch77Zu5OQ99snIesVhXvocILtKgWS7Xi5OQ99snIetURcxlp7ZORHgBQe54uTopkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPtvL/Qe+2TkPfbJyHvtk5KTD32ych77ZOQ39p/YEpdpu57Vv/zgymWIgu0qBZLteLk5D32ych77ZOQ9dvRSEREREVyEMzQKT4EREQyMciIiIhkRERUERODAPfbJyHvtk58SZSIiGRbYRERcMTuiIZERERDIiIiK5CGRERE0waVEXJyHvtkxitGVERERFchDIiJ6nERCIiIiGREREQyIsqIiJ2lEQyIorJdrxIlcIEiNgSI1vlh6/kRERERJCIiIiK5CGXWIRRWgiIhkREREw+ZJwikIiIiKgiIhkRQNGiIZERERDIiIuGIiGRET0UmiGREREQyIiImmDQiIiIhkZCSEUgiUKIhkRhERERDIiIiIZERQTIiGREREQyIiIiGRRXYMm8RW9d9TunZTuIoEiKIyv9D2n7qd04EREQyIiImmD1qyepxEQxxf1nOfY6CGRERFnBEIiyoiIiIhkUUlGiIZERERDIiIiIZSfAiIiHURaye28RERDIiIiIZERERDIiIiaSeiIiIiGREREQyIiepxEQiKL30OPU4iIREREQyIiKuiIiGRERE32hkREREMiIiIhkRQJTKIZEUDYHwJERETunE9fU4iJQ9pRN96SeiIiIiGREREQyIieik0QyIorJcshtGIopKNPEcZDZEKBm2Iyk7ERERDIiIiIZERE4lEIREUGVZ+pVtpETgUCRERETfmSnQ8IJ6KTRDIiIiIZERERDIorQRFoKUjf9mkiIhkUUlGw/+hERE/T1mV/oU4EREQyIiIiGRERE0k9ERETyiA+BIjGIopKNF7ARERE4L/5FE8noiIiIrkIZERERDKTTSRV0UGtg3ykUCwRRSUaIhkRETyZpCRRGWHpERDIiIiIZERE4kT+Rjm6mlNKQTKRES2UF4REREQyntOlE1Ff+oWj0KcIpCmUQ6dlJohkUpu6F4kRcMTgUCRERERDKe09YlCvgTJAUUymmDSc6kRO0oijoiYU1vlJ2IiJyLIkRDIiInkzSEiiMsRBYJrfKREQyk0Q5zqRgWpzFGlQREWcEylEWGRERETDycKiXBK6ZEdczWQRCIiIiGRSeIiImHk4XwvEiImor0RDIiIicFEUhFJCzjWa3QiIiIhkREREMp66nCUu1nOJtIiJqDlUQyIiIiYU1uhSvGT0niifAkREREQyIoGjREMiKT2lCsdRClU0kREMiIieUaGZSfCUpdATK/kREREMiIowGoiIZEUCUz4nDETUaLREMiIiJwUSeKBNxt+CYlFWkIiIiIhkUVogSIiInCKQiIiJ3RNJERDIiIniPEIluOOltxJlInAiIiHOdSkoCIRERE0k9GaBERERDnERCIiJ5RoZlJ8JS7WZSaaSIi3iIiJxkEQiIiIhznUiIiIZERERDKdxERETCiERQJEUjSIiaSIiGREREQyKKQiIiIiHOIiERZUXKGRbYRFAkQAA/v7vDf+pX+bP82eAPlMNwwUoGorhzUAAEwJAAAJWw18Ib6EyYeQ1Q5DNRsB2U+nHa5GjPHP/agAMccAAAbDO9dX+IZRDvulWEgERJ35PTgHfoAAAKEQAAX8Kx86xduAVTe6Hsuq6GZm0azjLmcgHpuIlCITAkAACkl8cZ3d8Q97GmndMsCj6UiJhFgJnm0Bf74iCIiAACknPhG3cMdK40Cb0ask36a+16KKVkVhiUPhLqg9UCAAIsn8UwAdupKJjkkt9asfY8wwJSRwVkVhtMYHL4AApOb55tYvnqnErd5ycMVcGUsJuEUBsi137CSkc1RUxz0lkMBss2Q6MrIf+EVo8suyPCLDowlxgkZXCKNlcNfuCC7FC/eDbMInLfSJLWW0KYIwcc0oMN1+afrJhWoP+L6KO6j54NitWl+7aLNDjAHdFMjHAtlpNQ4qghxSFYVhikttq1oWswv3bRygcFa6Bf3vo16BRlR1w6PfSJeefDhbvpFZQBAhojAqoUGu9AAFa589LL5MHt7gZQslVHp6ozZRA1eIoJlwkUju2vVyJjMxlA89VCCvLYLz/2/FWvTn5Qhkq8altYOKTBEseFZEyEaBEnJToGFjRiYWQ79X/73HuUUBq+ENZTAFI8vyvEVWg/4/3MiT+cHE1kUWRGDxnCZnpOg5hnQc4+JMyFFe31QRWyunSjoWY2RxiACuUr94NsuBH7yuSKNc4rRO7psR2JgKtITSYOyboR62wpwV21hcJYwmMl56rhH+dgtXvW/yB6nQwEj7d3oCu5syvHgICi5d1WB8dyPN6qjPc3lIdYhSh3CSxhSCBpqkKQAf8BiQwpvs9OdG8OI26/ygO9zOSz7vVeIOBuAY6/TYwXY/0ygaWtpVEIsGyF56dywaFX8xPCxYSfFRyGXCVbRDWS3c/rfyb4DBKdSIeHRNwpGVw3XyBydLWjsdKZQlp2TJ2WPi14Tw1Gp+MivQJfgrbvjVIhNYCV6aL1RYkC9kCidkSvhpqbgFGL/PKpaAA/Hj5QwWkPUH5JU2K4iNC+VPbB3oRAaHlN3Ir3kIB3kJrPHRRujYeoXKSDWDSKFSy2BKumkolT7GbSgpn9046MKm3VAnUbahAlEEh6jo1j7IhrRBglOr+7cjsdtsU+vQG2+XjC6FYjZXgGJsHCJ1c97jRlcQceZH6fG7WS7JA5FEQXJncwxS7NwD1+L010UURo/MWE75x1zOdBB6oRk/PBgplqIftXlzqQ4A/K490SsRaRKOsZNzdddoeU3civeQgPaJfO3ZYugx3cB5+9b0RkthYJy8c70yJh7MxSbgypR8l4ipzf1R/fd30HN/NH34kqbMpR61WTZ/evGEDi+L01z/JupSaqmDENyY/8CVPS9U5Wmj9zjm5mK/VDlyUEHNtguEoW7QXBa73CTxBcmdzDFLs3AO29j4jKhqDVfdW7qufTAqtSZ0dV8Po4j4xYoQcG5InGDpcdgGvPRgeVSba0i3il+e6Ekdv0vuLLtrCuAXIrcqZ5RqYAB3ZtB7P14p/3tuOXO+ZSXQ3BwrzinmTXBieEtkiOEd7Ufwr3ClIQyrmZmgEvZAtmo87qg3Xd5w5NWJm7W04pSdRCQNsamKmB7NkfgThpkCkcPQAPbdr2LCy1cEbjtGABA3seqLEgXsxZDWS/E83iZX3qxRfoKq2AeNhGEmQ+EkTm86/Qa992c+RmeyuHFk0WCn547NCu0BNbAf3JnYT16EgHOIbBe3OGdIZrbzgx+TzWBjqgx2/ZBlUP7CKTJkLWekaTsmGkC1DErHXQJuKysFGIIqbXZ84DxQMoNtZLfwuko7ckc1iopwEpK+gAABFWElGFgAAAEV4aWYAAElJKgAIAAAAAAAAAAAAAABYTVAADAMAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njk1OEQ5RDgzQUUzMTFFOTgzNUNDQTc1RDY1M0I4MDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njk1OEQ5RDkzQUUzMTFFOTgzNUNDQTc1RDY1M0I4MDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OTU4RDlENjNBRTMxMUU5ODM1Q0NBNzVENjUzQjgwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OTU4RDlENzNBRTMxMUU5ODM1Q0NBNzVENjUzQjgwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg==');
  background-color:#03002B;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 4px solid #ff0564;
  padding-left: 0;
  padding-right: 0;
}

.padding-footer{
  padding-right: 60px;
  padding-left: 60px;
}

.logo-footer{
  margin:100px;
}

#arrow-up{
  background-color:#03002B;
  padding-top:15px;
  padding-bottom:15px;
  cursor:pointer;
}

#arrow-up:hover{
  background-color: #ff0564;
}

.know-more{
  width:100%;
  padding:80px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
}

.know-more .link{
  width:200px;
  justify-content: center;
  display: flex;
  flex-direction: column;

}

.behance-flex{
  display: flex;
  align-items: center;
  flex:1;
}
.behance-icon{
  width: 0;
  transition: all .4s ease-in-out;
  
}
.behance-on{
  width:281px;
  padding: 0 90px;
}

.hidden{
  top:-50px;
}

.mobile{
  display:none;
}


#text1201{
  width:50%;
}
#image1201{
  max-width:346px; 
  margin-left:45px;
}

#develop{
  width: 50%;
}

.project-detail{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-top:31px;
}


@media (max-width: 991.98px) { 
  
  .mobile{
    display: initial;
  }

  .desktop{
    display:none;
  }

  .talk-us{
    display: none;
  }

  #section1{
    min-height: calc(100vh - 64px);
    /* min-height: calc(var(--vh, 1vh) * 100); */
    background-image: url('~assets/images/headerTCDG.png');
    background-color: #03002B;
    background-position-y: bottom;
    background-position-x: right;
    background-repeat: no-repeat;
    background-size: auto 50vh;
  }

  

  #section1::before{
    content:'';
    height: 50%;
    width:100%;
    background: linear-gradient(180deg, rgba(3, 0, 43, 0) -14.87%, #03002B 92.19%);
    transform: rotate(-180deg);
    position: absolute;
    z-index: 0;
    bottom: 0;
    left:0;
  }

  #section1 .left{
    margin-top:48px;
  }

  #step1{
    margin-bottom:24px;
  }

  #step2{
    padding-left:0;
  }

  #step3{
    padding-left:31px;
  }

  #section12>div{
    flex-wrap: wrap;
  }
    
  #text1201{
    width:100%;
  }
  #image1201{
    max-width:100%; 
    margin-left:0;
  }

  #section16{
    justify-content: center;
  }

  #sections28>.columns{
    justify-content: center;
  }

  #develop{
    width:100%
  }


  .pr{
    padding-right: 0;
  }
  .sections{
    padding-left:31px;
    padding-right: 31px;
    flex-wrap:wrap;

  }

  

  .mob-no-padding{
    padding:0
  }

  .mob-padding{
    padding: 0 31px;
  }

  .margin-mobile-top{
    margin-top: 35px;
  }
   .margin-mobile-bottom{
    margin-bottom: 35px;
  }

  .padding-block{
    margin:0;
    padding-top:45px;
    padding-bottom:45px;
  } 

  .left{
    max-width:none;
    z-index:2
  }


  .sticky-wrapper > .wrapper{
    display:none;
  }
  .columns{
    flex-wrap: wrap;
  }
  .columns .col{
    padding: 0;
  }

  #sections34 .columns{
    flex-wrap: nowrap;
  }
   #sections34 .columns .col{
    padding-left:0 !important;
  }


  
  .col-feature{
    margin-left:0;
    width:100%;
    display:flex;
    flex-direction:row;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    margin-bottom:31px;
  }

  .col-feature p{
    padding-left:31px;
    text-align: left;
  }

  #section13 .columns div{
    padding:0px;
    margin-bottom:31px;
  }

  #stude-cases{
    justify-content: left;
  }
  .mob-inverted{
    flex-wrap: wrap-reverse;
  }

  #copyright{
    display: none;

  }

  .mb{
    margin-bottom: 35px;
  }

  .padding-footer{
    padding-left:0;
    padding-right: 0;
  }

  .project-detail{
    margin-top:25px;
    margin-bottom:31px;
  }

  #footer-social{
    order:1;
    justify-content: space-around;
    padding:0 21px !important;

  }

  #footer-logo{
    order: 2;
    margin: 40px auto;
    width: 200px !important;
  }
  #arrow-up {
    background-color: #080057;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }

  .footer{ 
    background-image: none;
    border-bottom:none;
  }
}

</style>
