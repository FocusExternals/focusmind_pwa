<template>
  <div class="container">
    <BreadCrumbs/>
    <div id="section1" class="sections">
      <div :style="{position:'fixed',right:'142px', top:'90px',zIndex:'3'}">
        <LinkButton to="https://focusmind.net/contacto">HABLEMOS DE TU PROYECTO</LinkButton>
      </div>
      <div class="left">  
        <Logo/>
        <HeadMainText v-scroll-reveal>Desarrollando la plataforma líder de hispanoamérica en negocios y emprendimiento</HeadMainText>
        <TextSubtitleContent v-scroll-reveal cs-style="color:#e0e0e0">MVP Responsive Website</TextSubtitleContent>
        <div class="linkToBottomContainer">
          <LinkToBotton text="Explorar el proyecto" @scroll-to="scrollToContent"/>
        </div>
      </div>
      
    </div>
    <div id="section2" class="sections" ref="section2">
      <div v-scroll-reveal class="padding-block left">
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
      
      <div  class="padding-block left">
        <TextTitleContent no-margin="true">
          Scope de trabajo
        </TextTitleContent>
        <TextSubtitleContent>
         Aplicando nuestra metodología THE MIND®
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
              Benchmarking<br>
              User personas<br>
              User flow <br>
              Selección de features<br>
              Wireframings (Lo-fi, Media y Hi-fi).<br>
              Prototipado<br>
              Desarrollo y Q&A<br>
            </TetxtParagraph>
          </div>
        </div>
        <div v-scroll-reveal="{delay:1000}" class="col">
          <div class="mb">
            <TextSubtitleContent >
              <strong>Duración del proyecto</strong><br>
              2 meses<br>
            </TextSubtitleContent>
          </div>
          <div class="mb">
            <TextSubtitleContent>
              <strong>Equipo a cargo</strong>
            </TextSubtitleContent>
            <TetxtParagraph>
              1 Product manager<br>
              1 UX/UI designer<br>
              2 Developers<br>
            </TetxtParagraph>
          </div>
        </div>
      </div>
     </div>
     <div ref="wrapperObjetives" class="sticky-wrapper" v-in-viewport>
       <WolaSticky :height-wrapper="heights.wrapperObjetives">Definición de objetivos</WolaSticky>
      <div id="section4" class="sections" ref="section4">
        <div v-scroll-reveal class="padding-block align" :style="{width:'60%'}">
          <div class="mb">
            <TextTitleContent :underline="true">
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
            <TextSubtitleContent cs-style="font-size:18px">
              <IconPdf cs-style="height:46px;"/> Son entregados en una documentación en formato digital.
            </TextSubtitleContent>
          </div>

        </div>
        <div class="pr flex-center flex-column pl" >
          <ImageResponsive :style="{marginBottom:'23px'}" source="image1.jpg"/>
          <ImageResponsive source="image2.jpg"/>
          
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
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquipconsequat.
            </TextSubtitleContent>
          </div>
          <div class="columns pr">
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
        </div>
      </div>
      <div id="section6" class="sections" ref="section6" style="background-color:#B38A58">
          <div class="padding-block pr">
              <WolaCite v-scroll-reveal author="Juan Pablo Laco." role="Director de Focus Mind">
                “Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam”.
              </WolaCite>
          </div>
      </div>
      <div id="section7" class="sections" ref="section">
        <div class="padding-block left">
          <TextTitleContent :underline="true">
            Diseño y conceptualización
          </TextTitleContent>
          <TetxtParagraph v-scroll-reveal>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo velit esse molestie consequat quis nostrud exerci tation ullamcorper.
          </TetxtParagraph>

        </div>
        <div class="padding-block pr">
          <client-only placeholder="Loading...">
          <VueSlickCarousel>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <!-- <ImageResponsive source="Crehana.jpg"/>
            <ImageResponsive source="Coursera.jpg"/> -->
          </VueSlickCarousel>
          </client-only>
        </div>
        <div class="padding-block pr">
          <WolaCiteSimple  v-scroll-reveal>
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
                
                <TextTitleContent :underline="true" >
                  Digital Branding
                </TextTitleContent>
                
                <div :style="{marginBottom:'42px'}">
                <TextSubtitleContent v-scroll-reveal>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquipconsequat.
                </TextSubtitleContent>
                </div>
                <TetxtParagraph v-scroll-reveal>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo velit esse molestie consequat quis nostrud exerci tation ullamcorper.
                </TetxtParagraph>
              </div>
          </div>
          <div class="padding-block pr full-width">
            <div class="columns mb" :style="{justifyContent:'space-evenly'}">
              <div v-scroll-reveal class="col">
                  <TextSubtitleContent cs-style="color:#B38A58;">
                    <strong>Step 1</strong>
                  </TextSubtitleContent>
                  <ImageResponsive source="boceto1.jpg"/>
              </div>
              <div v-scroll-reveal="{delay:500}" class="col" style="padding-left:50px">
                  <TextSubtitleContent cs-style="color:#B38A58;">
                    <strong>Step 2</strong>
                  </TextSubtitleContent>
                  <ImageResponsive source="boceto2.jpg"/>
              </div>
            </div>
            <div v-scroll-reveal="{delay:1000}" style="display:flex; text-align:left; flex-direction:column">
                <TextSubtitleContent cs-style="color:#B38A58;">
                  <strong>Step 3</strong>
                </TextSubtitleContent>
                <ImageResponsive source="boceto3.png"/>
            </div>
          </div>
      </div>
     
      <div id="section10" class="sections " ref="section10" style="background-color:#DBDBDB">
          <div class="padding-block pr">
              <WolaCite v-scroll-reveal author="Maira Graff." role="Diseñadora" blue="true">
                “Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ut sldna ewr wisi enim ad minim veniam”.
              </WolaCite>
          </div>
      </div>
      <div class="sections mb" id="section11">
        <WolaImageFinal/>
      </div>
      <div class="sections pr" id="section12">
          <div class="padding-block" :style="{display:'flex',justifyContent:'space-around'}">
            <div class="align" :style="{width:'50%'}">
              <div class="mb">
                <WolaTextGold v-scroll-reveal :size="23" :lh="159">
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquipconsequat.
                </WolaTextGold>
              </div>
              <TetxtParagraph v-scroll-reveal="{delay:500}">
                Las ilustraciones fueron aplicadas a todo el sitio web y a sus distintos componentes, por ejemplo forman parte de los <strong>archivos de lectura y las guías de estudio de los cursos.</strong>
              </TetxtParagraph>
            </div>
            <div class="pl">
              <ImageResponsive source="DigitalBranding.jpg"/>
            </div>
          </div>
          
          
      </div>
      </div>
    <div ref="wrapperTheMind" class="sticky-wrapper" v-in-viewport>
      <WolaSticky :height-wrapper="heights.wrapperTheMind">The Mind®</WolaSticky>
      <div id="section13" class="sections wrap-on">
        <div class="padding-block left full-width">
          <WolaTextGold :size="42">
            Aplicando nuestra metodología<br> The Mind®
          </WolaTextGold>
        </div>
        <div class="left mb ">
          <TextTitleContent underline="true">
            Benchmarking
          </TextTitleContent>
          <TextSubtitleContent >
            Tomando lo mejor del mercado.
          </TextSubtitleContent>
          <TetxtParagraph>
            Comodo velit esse molestie consequat quis nostrud exercs nisl ut aliquip ex ea commodo velit esse exerci tation ullamcorper. tation ullamcorper.
          </TetxtParagraph>
        </div>
        <div class="columns full-width mb">
          <div class="flex-important">
            <ImageResponsive source="Crehana.jpg"/>
          </div>
          <div v-scroll-reveal class="flex-center flex-column pl pr">
             <WolaTextGold :size="20" :pb="31">
              Plataforma: Crehana
            </WolaTextGold>
            <TetxtParagraph>
              <strong>Features seleccionadas</strong>
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
              <strong>Features seleccionadas</strong>
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
            <ImageResponsive source="Domestika.jpg"/>
          </div>
        </div>
        <div class="columns full-width mb">
          <div class="flex-important">
            <ImageResponsive source="Coursera.jpg"/>
          </div>
          <div v-scroll-reveal class="flex-center flex-column pl pr">
             <WolaTextGold :size="20" :pb="31">
              Plataforma: Coursera
            </WolaTextGold>
            <TetxtParagraph>
              <strong>Features seleccionadas</strong>
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
              <strong>Features seleccionadas</strong>
            </TetxtParagraph> 
            <TetxtParagraph :size="20"><strong>1.</strong>Hightlights de cada curso</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>2.</strong> Módulos de estudio con información sobre clases y tiempos de cada una</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>3.</strong> Sistema de ilustraciones para darle vida a la plataforma</TetxtParagraph>
            <TetxtParagraph :size="20"><strong>4.</strong> Diseño sútil y claro</TetxtParagraph>
          </div>
           <div class="flex-important pr pl">
            <ImageResponsive source="Google.jpg"/>
          </div>
        </div>
        <div class="padding-block left">
           <TextTitleContent underline="true">
            User Personas
          </TextTitleContent>
          <TetxtParagraph>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
          </TetxtParagraph>

        </div>
      
      </div>
      <div class="sections" id="section14" style="background-color:f2f2f2;">
        <div class="padding-block pr full-width">
            <div class="columns mb">
              <div v-scroll-reveal class="col">
                <div class="mb">
                  <TextRegularContent cs-style="color:#B38A58; font-size:18px;">
                      <strong>1° perfil</strong>
                  </TextRegularContent>
                  <br>
                  <TextSubtitleContent class="mb">
                    <strong>Estudiante</strong>
                  </TextSubtitleContent>
                </div>  
                <ImageResponsive class="mb" :circle="true" source="photo1.jpg"/>
                <div>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    <strong>Franco</strong>
                  </TextSubtitleContent>
                  <br>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    20 - 26 años, hombre
                  </TextSubtitleContent>
                  <TetxtParagraph :size="20">
                    <strong>Perfil socioeconómico: </strong><br>
                    clase media - media alta
                  </TetxtParagraph>
                   <TetxtParagraph :size="20">
                    <strong>Adaptación tecnológica:</strong> alta

                  </TetxtParagraph> 
                </div>
              </div>
              <div v-scroll-reveal="{delay:500}" class="col" style="padding-left:50px">
                <div class="mb">
                  <TextRegularContent cs-style="color:#B38A58; font-size:18px;">
                    <strong>2° perfil</strong>
                  </TextRegularContent>
                  <br>
                  <TextSubtitleContent class="mb">
                    <strong>Emprendedor</strong>
                  </TextSubtitleContent>
                </div>
                <ImageResponsive class="mb" :circle="true" source="photo1.jpg"/>
                <div>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    <strong>Tomás</strong>
                  </TextSubtitleContent>
                  <br>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    20 - 26 años, hombre
                  </TextSubtitleContent>
                  <TetxtParagraph :size="20">
                    <strong>Perfil socioeconómico: </strong><br>
                    clase media - media alta
                  </TetxtParagraph>
                   <TetxtParagraph :size="20">
                    <strong>Adaptación tecnológica:</strong> alta

                  </TetxtParagraph> 
                </div>
              </div>
              <div v-scroll-reveal="{delay:1000}" class="col" style="padding-left:50px">
                <div class="mb">
                  <TextRegularContent cs-style="color:#B38A58; font-size:18px;">
                    <strong>3° perfil</strong>
                  </TextRegularContent>
                  <br>
                  <TextSubtitleContent class="mb">
                    <strong>Emprendedor</strong>
                  </TextSubtitleContent>
                </div>
                <ImageResponsive class="mb" :circle="true" source="photo2.jpg"/>
                <div>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    <strong>Manuel</strong>
                  </TextSubtitleContent>
                  <br>
                  <TextSubtitleContent cs-style="font-size:20px;">
                    27 - 36 años, hombre
                  </TextSubtitleContent>
                  <TetxtParagraph :size="20">
                    <strong>Perfil socioeconómico: </strong><br>
                    clase media 
                  </TetxtParagraph>
                   <TetxtParagraph :size="20">
                    <strong>Adaptación tecnológica:</strong> alta

                  </TetxtParagraph> 
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="sections mb" id="section15" style="background-color:#DBDBDB;">
        <div class="padding-block pr">
          <WolaTextGold :size="33">
            A través del análisis de los distintos perfiles logramos entender sus <em>puntos de dolor.</em>
          </WolaTextGold>
        </div>
      </div>
      <div class="sections wrap-on" id="section15">
        <div class="full-width pr" style="margin-bottom:2px; z-index:1">
          <WolaPainPoints :style="{maxWidth:'70%'}"/>
        </div>
        <div class="pr full-width">
            <div class="columns mb" style="justify-content:space-evenly">
              <div v-scroll-reveal class="col flex-column">
                <div class="full-width align-center mb ">
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
              <div v-scroll-reveal="{delay:500}" class="col" style="padding-left:50px">
                <div class="full-width align-center mb">
                  <TetxtParagraph :size="20" :btn="true">
                    <strong>Emprendedor</strong>
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
              <div v-scroll-reveal="{delay:1000}" class="col" style="padding-left:50px">
                <div class="full-width align-center mb">
                  <TetxtParagraph :size="20" :btn="true">
                    <strong>Emprendedor</strong>
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
            </div>
        </div>
      </div>
      <div class="sections" id="section16" :style="{backgroundColor:'#d1d1d1'}">
        <div class="flex-center">
          <ImageResponsive source="must.png"/>
        </div>
        <div class="padding-block align-center flex-center pr pl">
          <WolaTextGold :size="33">
            <em>Neutralizando esos puntos de dolor
            a través de los</em> must given <em>en la plataforma.</em>
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
            <div v-scroll-reveal="{delay:500}" class="col must-given" style="padding-left:50px">
              
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
            <div v-scroll-reveal="{delay:1000}" class="col must-given" style="padding-left:50px">
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
        </div>
      </div>
      <div class="sections" id="section18">
        <div class="padding-block left">
          <TextTitleContent underline="true">
            User Flow
          </TextTitleContent>
          <TextSubtitleContent  v-scroll-reveal>
            Selección de features.
          </TextSubtitleContent>
          <TetxtParagraph v-scroll-reveal>
            Debido a que este es un MVP se hicieron una selección de las funciones primarios o primordiales para poder desarrollarse en esta primera instancia del producto y realizar el user flow.
          </TetxtParagraph>
        </div>
      </div>
      <div class="sections" id="section20" :style="{backgroundColor:'#f2f2f2'}">
        <div class="pr flex-center columns full-width" style="padding-top:24px;padding-bottom:24px; align-items:baseline">
          <TextSubtitleContent :size="21" class="align" :style="{alignSelf:'center'}">
            <strong>Principales<br>features</strong>
          </TextSubtitleContent>
          <div v-scroll-reveal class="col-feature flex-column align-center" :style="{width:'186px'}">
            <ImageResponsive source="feature1.png" :style="{maxWidth:'134px',paddingBottom:'24px'}"/>
            <TetxtParagraph :size="21" :lh="133" class="align-center">
              Curso con funnel
              de venta e información 
              detallada del curso
            </TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:500}" class="col-feature flex-column align-center" :style="{width:'186px'}">
            
            <ImageResponsive source="feature2.png" :style="{maxWidth:'134px',paddingBottom:'24px'}"/>
            <TetxtParagraph :size="21" :lh="133" class="align-center">
              Pantalla de estudio
              con progreso 
              y módulos de estudio
            </TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:1000}" class="col-feature flex-column align-center" :style="{width:'186px'}">
            <ImageResponsive source="feature3.png" :style="{maxWidth:'134px',paddingBottom:'24px'}"/>
            <TetxtParagraph :size="21" :lh="133" class="align-center">
              Perfil con listado
              de cursos y filtros según
              su estado
            </TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:1500}" class="col-feature flex-column align-center" :style="{width:'186px'}">
            <ImageResponsive source="feature4.png" :style="{maxWidth:'134px',paddingBottom:'24px'}"/>
            <TetxtParagraph :size="21" :lh="133" class="align-center">
              Checkout con
              pocos pasos  para el user
            </TetxtParagraph>
          </div>
        </div>
      </div>
      <div class="sections pr" id="section21">
        <div class="padding-block full-width">
          <ImageResponsive source="grafico.png"/>
        </div>
      </div>
      <div class="sections" id="section22">
        
        <div v-scroll-reveal class="padding-block left">
          <TextTitleContent underline="true">
            Wireframings
          </TextTitleContent>
          <TetxtParagraph>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
          </TetxtParagraph>
        </div>
      </div>
      <div class="sections wrap-on" id="section23" ref="section23">
        
        <div class="padding-block left" :style="{marginTop:'185px'}">
          <TextSubtitleContent>
            <strong>Mobile First</strong>
          </TextSubtitleContent>
          <TetxtParagraph>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.
          </TetxtParagraph>
        </div>
        
        <div class="padding-block full-width pr wire" id="wired" v-in-viewport>
          <ImageResponsive :lazy="false" source="grafico.png"/>
        </div>
        <div class="padding-block full-width pr mid" id="midle" v-in-viewport>
          <ImageResponsive :lazy="false" source="Mediawire.png"/>
        </div>
        <div class="padding-block full-width pr hifi" id="hifi" v-in-viewport>
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
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
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
          <div class="align" :style="{width:'50%'}">
            <TextTitleContent underline="true">
              Desarrollo y Q&amp;A
  
            </TextTitleContent>
            <TetxtParagraph v-scroll-reveal class="mb">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
            </TetxtParagraph>
            <TetxtParagraph v-scroll-reveal>
              <strong>Duis autem vel eum iriure</strong> dolor in hendrerit in vulputate velit esse molestie consequat el illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dig.
            </TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:500}" class="pl">
            <ImageResponsive source="compu.jpg"/>
          </div>
          
        </div>
        <div class="padding-block flex-center" :style="{display:'flex'}">
          <TetxtParagraph>
            <strong>Tecnologías utilizadas:</strong>
          </TetxtParagraph>
          <WolaTechnologies :h="46" icon="react"/>
          <WolaTechnologies :h="54" icon="sass"/>
          <WolaTechnologies :h="64" icon="redux"/>
          <WolaTechnologies :h="48" icon="node"/>
          <WolaTechnologies :h="124" icon="mongo"/>
        </div>
      </div>
      <div class="sections pr" id="sections27" :style="{backgroundColor:'#d1d1d1'}">
        <div class="padding-block align-center">
          <TextSubtitleContent>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquipconsequat.
          </TextSubtitleContent>
        </div>
      </div>
      <div class="sections pr" id="sections28" >
        <div class="padding-block columns full-width">
          <div v-scroll-reveal class="flex-column align-center">
            <WolaTextGold :size="88">89%</WolaTextGold>
            <TetxtParagraph>Aceptación del producto</TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:500}" class="flex-column align-center">
            <WolaTextGold :size="88">1,5 seg</WolaTextGold>
            <TetxtParagraph>Carga mobile de la plataforma</TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:1000}" class="flex-column align-center">
            <WolaTextGold :size="88">2 min</WolaTextGold>
            <TetxtParagraph>Tiempo de navegación</TetxtParagraph>
          </div>
        </div>
      </div>
    </div>
    <div class="sections pr flex-center" id="sections27" :style="{backgroundColor:'#f2f2f2',paddingTop:'24px',paddingBottom:'24px'}">
      <div>
        <ImageResponsive source="ilustracionFinal.png"/>
      </div>
      <div v-scroll-reveal class="pl flex-column align">
        <TetxtParagraph>Lorem ipsum dolor sit amet, nostrud exerci tation ullamcorper suscipit lobortis nisl ut consequat.</TetxtParagraph>
        <br>
        <LinkExternal url="https://focusmind.net">Conocer el sitio <ArrowFullRight/></LinkExternal> 
      </div>
    </div>
    <div class="sections pr" id="sections27">
      
      <div class="align padding-block full-width">
        <div class="mb">
          <TextSubtitleContent ><strong>Créditos</strong></TextSubtitleContent>
        </div>
        <br>
        <div class="columns">
          <div v-scroll-reveal class="col">
            <TextSubtitleContent :size="18"><strong>Lorem ipsum</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Product Manager</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Dolor sit amet</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Product Manager</TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:500}" class="col">
            <TextSubtitleContent :size="18"><strong>Dolor sit ipsum</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Developer</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Lorem ipsum</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Designer</TetxtParagraph>
          </div>
          <div v-scroll-reveal="{delay:1000}" class="col">
            <TextSubtitleContent :size="18"><strong>Dolor sit amet</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Developer</TetxtParagraph>
            <TextSubtitleContent :size="18"><strong>Lorem ipsum</strong></TextSubtitleContent>
            <TetxtParagraph :size="18" class="mb">Designer y Q&amp;A </TetxtParagraph>
          </div>
        </div>
      </div>
    </div>
    <div class="sections pr wrap-on" >
      <div class="full-width align mb">
        <TextSubtitleContent><strong>Casos de éxito relacionados</strong></TextSubtitleContent>
      </div>
      <div class="columns">
        <div class="col flex-column">
          <div>
            <ImageResponsive source="london.png"/>
          </div>
          <div :style="{display:'flex',alignItems:'center'}">
            <TextSubtitleContent size="19">
              <strong>London Travel </strong><br>
              Estrategia Digital Global
            </TextSubtitleContent>
            <LinkButton :style="{paddingLeft:'12px'}" variant="blue-inverted" to="https://focusmind.net/proyecto-london-travel-3-2/">VER CASO DE ÉXITO</LinkButton>
          </div>

        </div>
        
        <div class="col flex-column" >
          <div class="">
            <ImageResponsive source="chubut.png"/>
          </div>
          <div :style="{display:'flex',alignItems:'center'}">
            <TextSubtitleContent size="19">
              <strong>Chubut Turismo </strong><br>
              App y sitio web interactivo 
            </TextSubtitleContent>
            <LinkButton :style="{paddingLeft:'12px'}" variant="blue-inverted" to="https://focusmind.net/proyecto-chubut/">VER CASO DE ÉXITO</LinkButton>
          </div>

        </div>
      </div>
    </div>
    <div class="sections pr" id="sections29" :style="{backgroundColor:'#03002B'}">
      <div class="padding-block full-width flex-column flex-center" :style="{alignItems:'center'}">
        <div class="mb"  :style="{width:'249px'}">
          <ImageResponsive source="logo-footer.png"/>
        </div>
        <div class="full-width">
          <TextRegularContent cs-style="font-size:15px;color:#a7a5be ">
            © 2019 | FOCUS MIND MARKETING &amp; INNOVATION<br>
            DOING THINGS THAT MATTER SINCE 2014
          </TextRegularContent>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  mounted(){  
    const instancia = this;
    setTimeout(function(){
      Object.keys(instancia.$refs).forEach(element => {
        let target = instancia.$refs[element];
        instancia.heights[element] = (target)?target.clientHeight:400;
      });
    },1000)
      
  },
  methods:{
    scrollToContent(){
      let target = this.$refs['section2'];
      let top  = target.offsetTop;
      jQuery("html, body").animate({ scrollTop: top });
      //window.scrollTo(0, top);

    },

    
    getHeightWrapper(wrapper){
      let target = this.$refs[wrapper];
      return (target)?target.clientHeight:400;
    }
  },
  data(){
    return {
      heights:{
        wrapperBranding:400,
        wrapperObjetives:400,
        section23:400,
        wrapperTheMind:400
      }
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

</style>
