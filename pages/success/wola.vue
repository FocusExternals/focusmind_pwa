<template>
  <div class="container">
    <BreadCrumbs/>
    <div v-in-viewport id="section1" class="sections">
      <div v-show="loaded" :class="{'talk-us':true,'hidden':!talk}">
        <LinkButton :to="'https://'+referrer+'/contacto/#Gocontainer'" :target="'_blank'">HABLEMOS DE TU PROYECTO</LinkButton>
      </div>
      <div v-show="loaded" class="left">
        <template v-scroll-reveal>  
        <Logo/>
        </template>
        <HeadMainText v-scroll-reveal>Creando la plataforma líder de hispanoamérica en negocios y emprendimiento. </HeadMainText>
        <TextSubtitleContent v-scroll-reveal cs-style="color:#e0e0e0">{{(isMobile)?'MVP Responsive Website':'MVP - Proceso de Branding + PWA (Progressive Web App)'}}</TextSubtitleContent>
        <div class="linkToBottomContainer">
          <LinkToBotton text="Explorar el proyecto" @scroll-to="scrollToContent"/>
        </div>
      </div>
      
    </div>
    <div id="section2" class="sections" ref="section2">
      <div class="padding-block left">
        <TextTitleContent v-scroll-reveal>
          Una visión y desarrollo integral para lograr un producto de alto impacto.
        </TextTitleContent>
        <TetxtParagraph v-scroll-reveal>
          La visión del proyecto fue convertir al producto en la plataforma de educación online líder de negocios y emprendimiento de todo habla hispana; para esto, Focus Mind estuvo a cargo del desarrollo integral.
        </TetxtParagraph>

      </div>
     
    </div>
     <div id="section3" class="sections degrade pr" ref="section3">
      
      <div  class="padding-block left">
        <TextTitleContent v-scroll-reveal no-margin="true">
          Scope de trabajo
        </TextTitleContent>
        <TextSubtitleContent v-scroll-reveal>
         Organizar el flujo del proyecto y aplicación de The Mind®
        </TextSubtitleContent>

      </div>
      <div class=" columns">
        <div v-scroll-reveal class="col">
          <div class="mb">
            <TextSubtitleContent >
              <strong>1. Definición de objetivos</strong>
            </TextSubtitleContent>
          </div>
          <div class="mb">
            <TextSubtitleContent>
              <strong>2. Branding</strong>
            </TextSubtitleContent>
            <TetxtParagraph>
               Naming<br/>
              Desarrollo de marca y <br/>
              conceptualización<br/>
              Digital branding<br>
            </TetxtParagraph>
          </div>
        </div>
        <div v-scroll-reveal="{delay:500}" class="col">
          <div class="mb">
            <TextSubtitleContent>
              <strong> The Mind®</strong>
            </TextSubtitleContent>
            <TetxtParagraph>
              Selección de features<br>
              Benchmarking<br>
              User personas<br>
              User flow<br>
              Wireframings (Lo-fi, Media y Hi-fi).<br>
              Prototipado<br>
              Desarrollo y Q&A
            </TetxtParagraph>
          </div>
        </div>
        <div v-scroll-reveal="{delay:1000}" class="col">
          <div class="mb">
            <TextSubtitleContent >
              <strong>Duración del proyecto</strong>
            </TextSubtitleContent>
            <TetxtParagraph>
              8 sprints
            </TetxtParagraph>
          </div>
          <div class="mb">
            <TextSubtitleContent>
              <strong>Equipo a cargo</strong>
            </TextSubtitleContent>
            <TetxtParagraph>
             1 Product Manager <br>
             1 Project Manager <br>
             1 Diseñador UX/UI <br>
             1 Front-End Developer <br>
             1 Back-End Developer 
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
              Negocios primero, luego diseño.
            </TextTitleContent>
            <TextSubtitleContent cs-style="font-size:20px">
              Nuestro primer acercamiento es para entender los objetivos de negocio que buscamos lograr con el producto. Una vez definido esto, sabemos lo que tenemos que hacer.
            </TextSubtitleContent>
            <Space v-if="isMobile"/>
            <ImageResponsive class="mobile" v-scroll-reveal="{origin:'top'}" :style="{marginBottom:'23px', marginTop:'23px'}" source="image1.jpg"/>
          </div>
          <div>
            <TetxtParagraph :size="20" class="mb">
              Un nombre y un impactante digital branding que separen al producto que buscamos crear del resto de las opciones que se encuentran en el mercado y se encuentre alineado con nuestros otros productos.
            </TetxtParagraph>
            <TetxtParagraph :size="20" class="mb">
              Una experiencia de usuario que resuelva en la mínima cantidad de pasos posibles la transacción.
            </TetxtParagraph>
            <TetxtParagraph :size="20" class="mb">
              Integración de todas las acciones posibles al site para maximizar el tráfico de los usuarios de la comunidad
            </TetxtParagraph>
            <ImageResponsive class="mobile margin-mobile"  v-scroll-reveal="{delay:250,origin:'top'}" :style="{marginBottom:'23px', marginTop:'23px'}"  source="image2.jpg"/>
            <Space v-if="isMobile"/>
            <TextSubtitleContent  class="margin-mobile-top" cs-style="font-size:18px">
              <IconPdf cs-style="height:46px;"/> Documentación en PDF
            </TextSubtitleContent>
          </div>

        </div>
        <div class="pr flex-center flex-column pl desktop" >
          <ImageResponsive v-scroll-reveal="{origin:'top'}" :style="{marginBottom:'23px'}" source="image1.jpg"/>
          <ImageResponsive v-scroll-reveal="{delay:250,origin:'top'}" source="image2.jpg"/>
          
        </div>
      
      </div>
     </div>
     <div ref="wrapperBranding" class="sticky-wrapper" v-in-viewport>
      <WolaSticky :height-wrapper="heights.wrapperBranding">Branding</WolaSticky>
      <div id="section5" class="sections" ref="section5">
        <div class="padding-block" >
          <div class="mb left">
            <TextTitleContent :underline="true">
              Naming
            </TextTitleContent>
            <TextSubtitleContent>
              Encontrar el nombre indicado puede no ser fácil. Buscábamos algo que sea fácil, universal y pueda permitirle al producto atravesar mercados de diferentes países.
            </TextSubtitleContent>
          </div>
          <div class="columns pr desktop">
            <WolaListName v-scroll-reveal>
              <p>MindsOn</p>
              <p>EagerMinds</p>
              <p>DigitalNerds</p>
              <p>DigitalAcademy</p>

            </WolaListName>
            <WolaListName v-scroll-reveal="{delay:500}">
              <p>TheDigitalUni</p>
              <p>CollegeOn</p>
              <p>Brandsgetdigital</p>
              <p>Smartmarketing</p>
            </WolaListName>
            <WolaListName v-scroll-reveal="{delay:1000}">
              <p>Innovativa</p>
              <p><strong>WOLA</strong></p>
              <p>TheVanguard</p>
              <p>ChesterAcademy</p>
            </WolaListName>
            <WolaListName v-scroll-reveal="{delay:1500}">
            <p> Businessminds</p>
              <p>LeaderEducation</p>
              <p>DigitalMindsAcademia</p>
            <p> Eduatica </p>
            </WolaListName>
          </div>
          <div class="columns pr mobile">
            <WolaListNameMobile v-scroll-reveal>
             MindsOn
            - EagerMinds
            - DigitalNerds - DigitalAcademy - Innovativa - <strong>WOLA</strong> - TheVanguard
            - ChesterAcademy
            - Businessminds - LeaderEducation
            - Eduatica -  DigitalMindsAcademia -  CollegeOn - TheDigitalUni - Brandsgetdigital
            - Smartmarketing.

            </WolaListNameMobile>
          </div>
        </div>
      </div>
      <div id="section6" class="sections" ref="section6" style="background-color:#B38A58">
          <div class="padding-block pr">
              <WolaCite v-scroll-reveal author="Juampi Laco" role="Director de Focus Mind">
                “Al ser un producto nuestro, teníamos muy clara cuál era la visión y lo que buscábamos lograr. Queríamos que el producto tenga el nivel para jugar en ligas de clase mundial”.
              </WolaCite>
          </div>
      </div>
      <div id="section7" class="sections" ref="section">
        <div class="padding-block left">
          <TextTitleContent :underline="true">
            Diseño y conceptualización
          </TextTitleContent>
          <TetxtParagraph v-scroll-reveal>
            Luego de más de 7 días de iteraciones, definimos el concepto marcario y la identidad que sabíamos era lo indicado para el producto que estábamos creando.
          </TetxtParagraph>

        </div>
        <div class="padding-block full-width">
          <CarouselComponent :images="imagesSlide" />
        </div>
        <div class="padding-block pr">
          <WolaCiteSimple  v-scroll-reveal>
            El código de las universidades, la aplicación del modernismo y la mirada al futuro.
          </WolaCiteSimple>
        </div>
      
      </div>
      <div class="sections mob-no-padding" id="section8">
        <WolaImageLogo/>
      </div>
      <div id="section9" class="sections mob-no-padding" ref="section9" :style="{justifyContent:'center'}">
          <div class="padding-block mob-padding">
              <div class="left full-width">
                
                <TextTitleContent :underline="true" >
                  Digital Branding
                </TextTitleContent>
                
                <div :style="{marginBottom:'42px'}">
                <TextSubtitleContent v-scroll-reveal>
                  En la búsqueda de un ecosistema que represente el estilo de la marca.
                </TextSubtitleContent>
                </div>
                <TetxtParagraph v-scroll-reveal>
                  El sistema visual dió vida con las ilustraciones que creemos que nos permitieron comunicar el aspecto dinámico, joven, moderno y al mismo tiempo educativo de la marca.
                </TetxtParagraph>
              </div>
          </div>
          <div class="padding-block pr full-width">
            <div class="columns mb" :style="{justifyContent:'space-evenly'}">
              <div v-scroll-reveal class="col steps" id="step1">
                  <TextSubtitleContent class="mob-padding" cs-style="color:#B38A58;">
                    <strong>Paso 1</strong>
                  </TextSubtitleContent>
                  <Space v-if="isMobile"/>
                  <ImageResponsive source="boceto1.jpg"/>
              </div>
              <div v-scroll-reveal="{delay:250,origin:'top'}" class="col steps" id="step2" style="">
                  <TextSubtitleContent class="mob-padding" cs-style="color:#B38A58;">
                    <strong>Paso 2</strong>
                  </TextSubtitleContent>
                  <Space v-if="isMobile"/>
                  <ImageResponsive source="boceto2.jpg"/>
              </div>
            </div>
           
          </div> 
          <div v-scroll-reveal="{delay:500}" id="step3" style="display:flex; text-align:left; flex-direction:column; width:100%; max-width:1600px;">
              <TextSubtitleContent class="mob-padding" cs-style="color:#B38A58;">
                <strong>Paso 3</strong>
              </TextSubtitleContent>
              <Space v-if="isMobile"/>
              <ImageScroll source="step3full.png"/>
               
          </div>
      </div>
     
      <div id="section10" class="sections " ref="section10" style="background-color:#DBDBDB">
          <div class="padding-block pr">
              <WolaCite v-scroll-reveal author="Maira Graff." role="Diseñadora" blue="true">
                "Se buscó que el sistema de ilustraciones sea flexible y fuerte visualmente, dónde los elementos vectoriales que lo componen puedan entrelazarse entre sí y generar una amplia variedad de composiciones".
              </WolaCite>
          </div>
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
      </div>
    </div>
    <div ref="wrapperTheMind" class="sticky-wrapper" v-in-viewport>
      <WolaSticky :height-wrapper="heights.wrapperTheMind">The Mind®</WolaSticky>
      <div class="sections wrap-on">
        <div class="padding-block left full-width">
          <WolaTextGold :size="(isMobile)?38:42">
            La hora de comenzar a diseñar el producto digital.
          </WolaTextGold>
        </div>
        <div class="left mb ">
          <TextTitleContent underline="true">
            Selección de features
          </TextTitleContent>
          <TetxtParagraph>
            Debido a que este es un MVP se hicieron una selección de las funciones primarios o primordiales para poder desarrollarse en esta primera instancia del producto y realizar el user flow.
          </TetxtParagraph>
        </div>
      </div>
      <div class="sections" id="section20" :style="{backgroundColor:'#f2f2f2'}">
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
      </div>
      <div id="section13" class="sections wrap-on">
        
        <div class="left mb padding-block">
          <TextTitleContent underline="true">
            Benchmarking
          </TextTitleContent>
          <TextSubtitleContent >
            No se trata de inventar la rueda, sino mejorarla.
          </TextSubtitleContent>
          <TetxtParagraph>
            En el proceso de benchmarking buscamos entender lo que el sector estaba haciendo bien para traerlo al producto y tener una visión global de los mejores jugadores del mercado.
          </TetxtParagraph>
        </div>
        <div class="mob-inverted columns full-width mb">
          <div class="flex-important">
            <ImageResponsive :lazy="false"  v-scroll-reveal="{origin: 'top'}" source="Crehana.jpg" mobile="Crehanamobile.jpg"/>
          </div>
          <div v-scroll-reveal class="flex-center flex-column pl pr">
             <WolaTextGold :size="20" :pb="31">
              Plataforma: Crehana
            </WolaTextGold>
            <TetxtParagraph>
              <strong>¿Qué están haciendo bien?</strong><br>(los items indicados son solamente a modo de ejemplo)
            </TetxtParagraph> 
            <TetxtParagraph><strong>1.</strong> Comentarios/veredictos de alumnos</TetxtParagraph>
            <TetxtParagraph><strong>2.</strong> Checkout con pocos pasos, sin registro</TetxtParagraph>
            <TetxtParagraph><strong>3.</strong> Estructura de modals para los cursos</TetxtParagraph>
            <TetxtParagraph><strong>4.</strong> Descuentos en cursos</TetxtParagraph>
            <TetxtParagraph><strong>5.</strong> Certificado/diploma por curso realizadoNúmeros que respaldan el alcance de la plataforma</TetxtParagraph>
            <TetxtParagraph><strong>5.</strong> Experienca de estudio (módulos de estudio con videos)</TetxtParagraph>
          </div>
        </div>
        <div class="columns full-width mb">
         
          <div v-scroll-reveal class="flex-center flex-column">
             <WolaTextGold :size="20" :pb="31">
              Plataforma: Domestika
            </WolaTextGold>
            <TetxtParagraph>
              <strong>¿Qué están haciendo bien?</strong><br>(los items indicados son solamente a modo de ejemplo)
            </TetxtParagraph> 
            <TetxtParagraph :size="20"><strong>1.</strong>Perfil de profesor dentro del funnel del curso</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>2.</strong> Cursos recomendados en carrito, a partir de la selección hecha por el usuario</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>3.</strong> Hightlights de cada curso</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>4.</strong> Beneficios de estudiar en la plataforma</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>5.</strong> Sección para postularse como profesor de la plataforma</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>5.</strong> Modal de compra fixed en la navegacion del funel de curso</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>5.</strong> Secciones inspiracionales o creativas</TetxtParagraph>

          </div>
           <div class="flex-important pr pl">
            <ImageResponsive :lazy="false"  v-scroll-reveal="{origin: 'top'}" source="Domestika.jpg" mobile="Domestikamobile.jpg"/>
          </div>
        </div>
        <div class="mob-inverted columns full-width mb">
          <div class="flex-important">
            <ImageResponsive :lazy="false"  v-scroll-reveal="{origin: 'top'}" source="Coursera.jpg"  mobile="Courseramobile.jpg"/>
          </div>
          <div v-scroll-reveal class="flex-center flex-column pl pr">
             <WolaTextGold :size="20" :pb="31">
              Plataforma: Coursera
            </WolaTextGold>
            <TetxtParagraph>
              <strong>¿Qué están haciendo bien?</strong><br>(los items indicados son solamente a modo de ejemplo)
            </TetxtParagraph> 
            <TetxtParagraph :size="20"><strong>1.</strong> Comentarios/veredictos de alumnos en home y en el curso  ampliado</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>2.</strong> Beneficios por ser parte de su comunidad</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>3.</strong> Certificado/diploma por curso realizado</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>4.</strong> Perfil del profesor a cargo del curso</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>5.</strong> Números que respaldan el alcance de la plataforma</TetxtParagraph>

          </div>
        </div>
        <div class="columns full-width mb">
         
          <div v-scroll-reveal class="flex-center flex-column">
             <WolaTextGold :size="20" :pb="31">
              Plataforma: Google Garage Digital
            </WolaTextGold>
            <TetxtParagraph>
              <strong>¿Qué están haciendo bien?</strong><br>(los items indicados son solamente a modo de ejemplo)
            </TetxtParagraph> 
            <TetxtParagraph :size="20"><strong>1.</strong>Hightlights de cada curso</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>2.</strong> Módulos de estudio con información sobre clases y tiempos de cada una</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>3.</strong> Sistema de ilustraciones para darle vida a la plataforma</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>4.</strong> Diseño sútil y claro</TetxtParagraph>
          </div>
           <div class="flex-important pr pl">
            <ImageResponsive :lazy="false"  v-scroll-reveal="{origin: 'top'}" source="Google.jpg" mobile="Googlemobile.jpg"/>
          </div>
        </div>
        <div class="padding-block left">
           <TextTitleContent underline="true">
            Entendiendo a los usuarios.
          </TextTitleContent>
          <TetxtParagraph>
            El punto de partida siempre es entender a los usuarios que son los que van a usar el producto y finalmente mueven el negocio.
          </TetxtParagraph>

        </div>
      
      </div>
      <div class="sections mob-no-padding" id="section14" style="background-color:#f2f2f2;">
        <div class="padding-block pr full-width desktop">
            <div class="columns mb">
              <div v-scroll-reveal class="col profile">
                <div class="mb">
                  <TextRegularContent cs-style="color:#B38A58; font-size:18px; line-height:27px;">
                      <strong>1° perfil</strong>
                  </TextRegularContent>
                  <br>
                  <TextSubtitleContent class="mb" cs-style="line-height:120%">
                    <strong>Emprendedor<br>Principiante</strong>
                  </TextSubtitleContent>
                </div>
                <div class="mb"  >
                  <ImageResponsive mw="235px" class="mb" :circle="true" source="betiana.jpg"/>
                </div>
                <div>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    <strong>Betiana</strong>
                  </TextSubtitleContent>
                  <br>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    24-32 años
                  </TextSubtitleContent>
                   <TetxtParagraph :size="20">
                    <strong>Integración tecnológica:</strong> Avanzada
                  </TetxtParagraph> 
                  <div :style="{maxWidth:'450px'}">
                    <TetxtParagraph :size="20">
                      <strong>Productos Digitales que usa:</strong><br>
                      Twitter, Instagram, Spotify, Pinterest.
                    </TetxtParagraph>
                    <TetxtParagraph :size="20">
                    "Quiero comenzar con un emprendimiento a vender online"
                    </TetxtParagraph>
                  </div>
                </div>
              </div>
              <div v-scroll-reveal="{delay:250}" class="col profile">
                <div class="mb">
                  <TextRegularContent cs-style="color:#B38A58; font-size:18px; line-height:27px;">
                    <strong>2° perfil</strong>
                  </TextRegularContent>
                  <br>
                  <TextSubtitleContent class="mb" cs-style="line-height:120%">
                    <strong> Emprendedor <br>Digital</strong>
                  </TextSubtitleContent>
                </div>
                <div class="mb">
                  <ImageResponsive mw="235px" class="mb" :circle="true" source="photo1.jpg"/>
                </div>
                <div>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    <strong>Augusto</strong>
                  </TextSubtitleContent>
                  <br>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    26 - 32 años
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
                      Instagram, Spotify, Whatsapp, Plataformas de gestión de tiempo, productividad y e-learning.
                    </TetxtParagraph>
                    <TetxtParagraph :size="20">
                    "Necesito dar un próximo paso para mi emprendimiento. Busco mejores resultados"
                    </TetxtParagraph>
                  </div>
                </div>
              </div>
              <div v-scroll-reveal="{delay:500}" class="col profile">
                <div class="mb">
                  <TextRegularContent cs-style="color:#B38A58; font-size:18px; line-height:27px;">
                    <strong>3° perfil</strong>
                  </TextRegularContent>
                  <br>
                  <TextSubtitleContent class="mb" cs-style="line-height:120%">
                    <strong>Joven <br>empresario.</strong>
                  </TextSubtitleContent>
                </div>
                <div class="mb">
                  <ImageResponsive mw="235px" class="mb" :circle="true" source="photo2.jpg"/>
                </div>
                <div>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    <strong>Martin</strong>
                  </TextSubtitleContent>
                  <br>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    28 - 36 años
                  </TextSubtitleContent>
                   <TetxtParagraph :size="20">
                    <strong>Integración  tecnológica:</strong>  Intermedia/Avanzada

                  </TetxtParagraph>  
                  <div :style="{maxWidth:'450px'}">
                    <TetxtParagraph :size="20">
                      <strong>Productos Digitales que usa:</strong><br>
                      Suite de Google, Microsoft Excel, Spotify, Shopify/Tienda Nube, Coursera, Whatsapp.
                    </TetxtParagraph>
                    <TetxtParagraph :size="20">
                    "Quiero dar el próximo paso. Me faltan habilidades blandas y duras"
                    </TetxtParagraph>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <WolaProfilesMob class="mobile"/>
      </div>
      <div v-scroll-reveal class="sections mb" id="section15" style="background-color:#DBDBDB; justify-content:center">
        <div class="padding-block pr">
          <WolaTextGold :size="33">
            Entender <em>sus puntos de dolor</em>, siempre es nuestro punto de partida.
          </WolaTextGold>
        </div>
      </div>
      <div class="sections wrap-on" id="section32">
        <div class="full-width pr" style="margin-bottom:2px; z-index:1">
          <WolaPainPoints v-scroll-reveal="{origin:'top'}" :cs-style="{maxWidth:(isMobile)?'200px':'70%'}"/>
        </div>
        <div class="pr full-width">
            <div class="columns mb" style="justify-content:space-evenly">
              <div v-scroll-reveal class="col flex-column">
                <div class="full-width align-center mb desktop">
                  <TetxtParagraph :size="20" :btn="true">
                    <strong>Estudiante</strong>
                  </TetxtParagraph>
                </div>
                <TetxtParagraph :size="16" item-icon="x">
                    Falta de tiempo y de recursos económicos
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                   ¿Qué tan bueno serán los cursos? 
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    ¿Es seria esta plataforma?
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    ¿Estará a cargo de gente capacitada? 
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    ¿Será un desperdicio de plata?
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    ¿Cómo sé que me va a servir?
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    ¿No será aburrido de ver?
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    Falta de disciplina para estudiar a distancia
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    Falta de feedback de un profesor
                </TetxtParagraph>
              </div>
              <div v-scroll-reveal="{delay:250}" class="col desktop" style="padding-left:50px">
                <div class="full-width align-center mb">
                  <TetxtParagraph :size="20" :btn="true">
                    <strong>Emprendedor</strong>
                  </TetxtParagraph>
                </div>
                <TetxtParagraph :size="16" item-icon="x">
                    Aplicación en mi negocio YA
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                   ¿Es confiable esta página?
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    ¿Estará a cargo de gente capacitada?
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    ¿Es sensato pagar para esto? 
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    ¿Lo podré aplicar luego a mi negocio?
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                     Falta de tiempo. Estrés y cansancio
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    Cómo se traduce ésto en resultados (ROI)
                </TetxtParagraph>
                
              </div>
              <div v-scroll-reveal="{delay:500}" class="col desktop" style="padding-left:50px">
                <div class="full-width align-center mb">
                  <TetxtParagraph :size="20" :btn="true">
                    <strong>Emprendedor</strong>
                  </TetxtParagraph>
                </div>
                <TetxtParagraph :size="16" item-icon="x">
                    Aplicación en mi negocio YA
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                   ¿Es confiable esta página?
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    ¿Estará a cargo de gente capacitada?
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    ¿Es sensato pagar para esto? 
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                   Falta de tiempo. Estrés y cansancio
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    Especificidad y practicidad en los cursos
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    Aburrirme y no poder darle seguimiento
                </TetxtParagraph>
                <TetxtParagraph :size="16" item-icon="x">
                    Cómo se traduce ésto en resultados (ROI)
                </TetxtParagraph>
              </div>
            </div>
        </div>
      </div>
      <div class="sections" id="section16" :style="{backgroundColor:'#d1d1d1'}">
        <div class="flex-center">
          <ImageResponsive source="must.png"/>
        </div>
        <div class="padding-block align-center flex-center pr pl mob-no-padding">
          <WolaTextGold :size="33">
            <em>El producto perfecto es el que neutraliza los</em> problemas y dolores del usuario.
          </WolaTextGold>
        </div>
      </div>
      <div class="sections" id="section17">
        <div class="padding-block pr full-width">
          <div class="columns mb" style="justify-content:space-evenly">
            <div v-scroll-reveal class="col flex-column must-given">
              
              <TetxtParagraph :size="16">
                <IconCheck/> Falta de tiempo y de recursos económicos
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Qué tan bueno serán los cursos? 
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Es seria esta plataforma?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Estará a cargo de gente capacitada? 
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Será un desperdicio de plata?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Cómo sé que me va a servir?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿No será aburrido de ver?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                 <IconCheck/> Falta de disciplina para estudiar a distancia
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> Falta de feedback de un profesor
              </TetxtParagraph>
            </div>
            <div v-scroll-reveal="{delay:250}" class="col must-given desktop" style="padding-left:50px">
              
              <TetxtParagraph :size="16">
                  <IconCheck/> Falta de tiempo y de recursos económicos
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Qué tan bueno serán los cursos? 
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Es seria esta plataforma?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Estará a cargo de gente capacitada? 
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Será un desperdicio de plata?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Cómo sé que me va a servir?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                 <IconCheck/> ¿No será aburrido de ver?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> Falta de disciplina para estudiar a distancia
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> Falta de feedback de un profesor
              </TetxtParagraph>
            </div>
            <div v-scroll-reveal="{delay:500}" class="col must-given desktop" style="padding-left:50px">
              <TetxtParagraph :size="16">
                  <IconCheck/> Falta de tiempo y de recursos económicos
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Qué tan bueno serán los cursos? 
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Es seria esta plataforma?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Estará a cargo de gente capacitada? 
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Será un desperdicio de plata?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿Cómo sé que me va a servir?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> ¿No será aburrido de ver?
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> Falta de disciplina para estudiar a distancia
              </TetxtParagraph>
              <TetxtParagraph :size="16">
                  <IconCheck/> Falta de feedback de un profesor
              </TetxtParagraph>
            </div>
          </div>
          <div class="left" v-scroll-reveal>
            <TextSubtitleContent cs-style="font-size:18px">
                <IconPdf cs-style="height:46px;"/> Documentación del proceso
            </TextSubtitleContent>

          </div>
        </div>
      </div>  
      <div v-scroll-reveal class="sections" id="section18">
        <div class="padding-block left">
          <TextTitleContent underline="true">
            Flujo de usuario
          </TextTitleContent>
          <TextSubtitleContent  v-scroll-reveal>
            Todos los caminos conducen al checkout?
          </TextSubtitleContent>
          <TetxtParagraph v-scroll-reveal>
            Una vez que comprendimos el flujo de usuario, lo dejamos documentado para entender qué deberíamos hacer en el diseño visual del producto.
            <!-- Debido a que este es un MVP se hicieron una selección de las funciones primarios o primordiales para poder desarrollarse en esta primera instancia del producto y realizar el user flow. -->
          </TetxtParagraph>
        </div>
      </div>
      <div class="sections pr" id="section21">
        <div v-scroll-reveal="{origin:'top'}" class="padding-block full-width">
          <ImageResponsive source="grafico.png" mobile="user-flow-mobile.png"/>
        </div>
      </div>
      <div v-scroll-reveal class="sections" id="section22">
        
        <div class="padding-block left">
          <TextTitleContent underline="true">
            Wireframings
          </TextTitleContent>
          <TetxtParagraph>
            <strong>Desde el papel al mundo real.</strong> El proceso de diseño comenzó con bocetados de la estructura del sitio en lapiz para luego convertirse en interfaces que cobren vida.
          </TetxtParagraph>
        </div>
      </div>
      <div class="sections wrap-on" id="section23" ref="section23">
        
        <div class="padding-block left" :style="{marginTop: (isMobile)?'106px':'233px'}">
          <TextSubtitleContent>
            <strong>Mobile First</strong>
          </TextSubtitleContent>
          <TetxtParagraph>
            Los usuarios consumen el producto desde dispositivos móviles y desde ahí partimos.
          </TetxtParagraph>
        </div>
        
        <div class="padding-block full-width pr wire-section" id="wired" v-in-viewport>
          <ImageResponsive :lazy="false" source="lo-fi.jpg"/>
        </div>
        <div class="padding-block full-width pr wire-section" id="midle" v-in-viewport>
          <ImageResponsive :lazy="false" source="Mediawire.png"/>
        </div>
        <div class="padding-block full-width pr wire-section" id="hifi" v-in-viewport>
          <ImageResponsive :lazy="false" source="Hi-fi.png"/>
        </div>
        <WolaStickyTop :height-wrapper="heights.section23"/>
      </div>
      <div class="sections" id="section24">
        
        <div class="padding-block left">
          <TextTitleContent underline="true">
            Prototipado 
          </TextTitleContent>
          <TetxtParagraph>
            Desarrollamos prototipos en baja y alta calidad para tener una visión general de cómo funcionaría el producto digital.
          </TetxtParagraph>
        </div>
      </div>
      <div class="sections pr flex-center" id="section25" :style="{backgroundColor:'#03002B',justifyContent:'center'}">
        
        <div class="padding-block">
          <VideoComponent poster="videoCover.jpg" :h="600" :sources="{mp4:'prototipado-2.mp4'}"/>
        </div>
      </div>
      <div class="sections pr wrap-on" id="section26">
        
        <div class="padding-block full-width" :style="{display:'flex'}">
          <div id="develop" v-scroll-reveal class="align ">
            <TextTitleContent underline="true">
              Desarrollo y Q&amp;A
  
            </TextTitleContent>
            <TetxtParagraph :size="20" v-scroll-reveal class="mb">
              <strong>Una visión a largo plazo.</strong>
            </TetxtParagraph>
            <ImageResponsive class="mobile" :lazy="false" v-scroll-reveal="{origin:'top'}"  source="compu.jpg"/>
            <TetxtParagraph :size="20" v-scroll-reveal>
              Nuestro equipo de desarrollo seleccionó las tecnologías que consideramos que nos ayudarían a lograr una performance óptima del producto y al mismo tiempo nos permitirían escalibilidad a lo largo del tiempo y medida que la plataforma vaya creciendo.
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
          <WolaTechnologies :h="46" icon="react"/>
          <WolaTechnologies :hm="45" :h="54" icon="sass"/>
          <WolaTechnologies :hm="45" :h="64" icon="redux"/>
          <WolaTechnologies :hm="25" :h="48" icon="node"/>
          <WolaTechnologies :hm="81" :h="124" icon="mongo"/>
        </div>
      </div>
      <div class="sections pr" id="sections27" :style="{backgroundColor:'#d1d1d1'}">
        <div v-scroll-reveal class="padding-block align-center">
          <TextSubtitleContent>
            Los números hablan por sí solos. Estos son algunos alcances que logramos con el diseño del producto.
          </TextSubtitleContent>
        </div>
      </div>
      <div class="sections pr" id="sections28" >
        <div class="padding-block columns full-width">
          <div v-scroll-reveal class="flex-column align-center">
            <WolaTextGold :size="75">90%</WolaTextGold>
            <div :style="{maxWidth:'350px'}">
              <TetxtParagraph :size="20">Aceptación del producto:<br>9 de cada 10 usuarios dicen que disfrutan estudiar en la plataforma.</TetxtParagraph>
            </div>
          </div>
          <Space v-if="isMobile"/>
          <div v-scroll-reveal="{delay:250}" class="flex-column align-center">
            <WolaTextGold :size="75">1,5 seg</WolaTextGold>
            <div :style="{maxWidth:'350px'}">
              <TetxtParagraph :size="20">Tiempo de performance del sitio en dispositivos moviles. </TetxtParagraph>
            </div>
          </div>
          <Space v-if="isMobile"/>
          <div v-scroll-reveal="{delay:500}" class="flex-column align-center">
            <WolaTextGold :size="75">2:10 min</WolaTextGold>
            <div :style="{maxWidth:'350px'}">
              <TetxtParagraph :size="20">Tiempo de permanencia de navegación de los usuarios en el sitio.</TetxtParagraph>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sections pr flex-center" id="sections27" :style="{backgroundColor:'#f2f2f2',paddingTop:'24px',paddingBottom:'24px'}">
      <div v-scroll-reveal="{origin:'top'}">
        <ImageResponsive mw="80%" source="ilustracionFinal.png"/>
      </div>
      <div v-scroll-reveal class="pl flex-column align">
        <TetxtParagraph>Hicimos que las cosas sucedan. En el siguiente enlace podés navegar el sitio con solamente hacer click.</TetxtParagraph>
        <br>
        <LinkExternal url="javascript:void();">Coming soon <ArrowFullRight/></LinkExternal> 
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
            <TetxtParagraph :size="18" class="mb">Product Manager</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Maira Graff</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Diseñadora UI/UX</TetxtParagraph>
            
          </div>
          <div v-scroll-reveal="{delay:250}" class="col" :style="{paddingLeft:'140px'}">
            <TextSubtitleContent :size="18"><strong>Jose Cabrera</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Front-end Developer</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Luis Garcés</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Full Stack Developer</TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:500}" class="col desktop" :style="{paddingLeft:'140px'}">
            <TextSubtitleContent :size="18"><strong>Roger Fuentes</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Tech Leader</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Jacsiel Rodriguez</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Developer Assistant </TetxtParagraph>
          </div>
        </div>
         <div class="columns mobile full-width" :style="{justifyContent:'left'}">
            <TextSubtitleContent :size="18"><strong>Juan Pablo Laco</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Product Manager</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Maira Graff</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Diseñadora UI/UX</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Jose Cabrera</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Front-end Developer</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Luis Garcés</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Full Stack Developer</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Roger Fuentes</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Tech Leader</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Jacsiel Rodriguez</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Developer Assistant </TetxtParagraph>
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
            <a v-if="isMobile" :href="'https://'+referrer+'/proyecto-london-travel-3-2/'">
              <ImageResponsive source="london.jpg"/>
            </a>
            <ImageResponsive v-else source="london.jpg"/>
          </div>
          <div class="project-detail">
            <TextSubtitleContent cs-style="font-size:17px; margin-bottom:0; line-height:120%">
              <strong>London Travel </strong><br>
              Estrategia Digital Global
            </TextSubtitleContent>
            <LinkButton class="desktop"  :with-arrow="true" :style="{paddingLeft:'12px'}" variant="blue-inverted" :to="'https://'+referrer+'/proyecto-london-travel-3-2/'">VER CASO DE ÉXITO</LinkButton>
          </div>

        </div>
        
        <div v-scroll-reveal="{origin:'top',delay:250}" class="col flex-column" >
          <div class="">
            <n-link v-if="isMobile" to="/success/tcdg" >
              <ImageResponsive source="tcdg-thumb.jpg"/>
            </n-link>
            <ImageResponsive v-else source="tcdg-thumb.jpg"/>
          </div>
          <div class="project-detail">
            <TextSubtitleContent cs-style="font-size:17px; margin-bottom:0; line-height:120%">
              <strong>TCDG </strong><br>
              Plataforma Online. 
            </TextSubtitleContent>
            <LinkButton class="desktop" :with-arrow="true" :style="{paddingLeft:'12px'}" variant="blue-inverted" to="/success/tcdg" :internal="true">VER CASO DE ÉXITO</LinkButton>
          </div>

        </div>
        <div id="all-stude-cases" v-scroll-reveal="{origin:'top',delay:250}" class="col flex-column mobile full-width" >
         
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
         this.loaded = true;
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
          src:'slide1.jpg',
          text:'Bocetado\nen papel'
        },
        {
          src:'slide2.jpg',
          text:'Exploración'
        },
        {
          src:'slide3.jpg',
          text:'Preselección'
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
  background-size: auto 100%;
  padding-left: 155px;
  display: flex;
}

.wrap-on{
  flex-wrap: wrap;

}

#section1{
  min-height: 100vh;
  background-image: url('~assets/images/headerWola.png');
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
#section12>div{
  display:flex;
  align-items:center;
  margin-top:0
}
#step2{
  padding-left:50px
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
.pl{
  padding-left:67px;
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
  margin-top:100px
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
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI0OSIgdmlld0JveD0iMCAwIDYgNDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zIDQ1LjVWMCIgc3Ryb2tlPSIjQjM4QTU4Ii8+CjxjaXJjbGUgY3g9IjMiIGN5PSI0NS41IiByPSIyLjUiIGZpbGw9IiNCMzhBNTgiIHN0cm9rZT0iIzAzMDAyQiIvPgo8L3N2Zz4K);
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
    background-image: url('~assets/images/headerWola-mobile.png');
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
    margin-bottom:46px;
  }
    #all-stude-cases{
        
        margin-top:34px;
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
