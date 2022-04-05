<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5(data-aos="flip-right")
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Planes de manejo

    .row.align-items-center.justify.mb-5
      .col-lg-12
        p Los Planes de Manejo Ambiental (PMA) son un instrumento base para la formulación de estrategias y la implementación de mejores prácticas de producción, de igual forma, constituyen un elemento clave para la construcción de una cultura de gestión y aprovechamiento de los residuos. A continuación, conocerá un poco sobre este concepto:
        <br>
        figure
        .video(data-aos="flip-right")
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Ths1z77PHoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.align-items-center.justify.mb-5  
      .col-lg-12
        p Un plan de manejo está estructurado por tres componentes o fases, los cuales se detallan en el siguiente recurso:

    .row.justify-content-center.BGIMG01.mb-4
      .col-lg-12(data-aos="fade-right")         
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo=" Diagnóstico")
            h4 Diagnóstico
            p Se hace una descripción detallada del agua de influencia del proyecto teniendo en cuenta: ecosistemas asociados, especies involucradas y las aguas, sumado a las posibles amenazas. Luego se describen los aspectos biológicos, físicos y socio culturales que se observen haciendo énfasis en los servicios ambientales que presta; para finalizar, identificando entidades y demás actores que están en interacción con el área a estudiar.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ordenamiento")
            h4 Ordenamiento
            p Se identifica la reglamentación aplicable al área de estudio, la zonificación va de la mano con la etapa de diagnóstico, ya que se deberá delimitar el alcance para poder lograr los objetivos de conservación a tiempo. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Plan estratégico")
            h4 Plan estratégico
            p Finalmente, se establecen las estrategias y acciones con las que se pretenden alcanzar los objetivos de conservación que estarán establecidos en períodos de tiempo determinados. Sin perder de vista los objetivos estratégicos de dicha área, pretenden resolver las problemáticas que se presenten y aprovechar las diferentes oportunidades para que el presupuesto establecido esté conforme al plan del proyecto, obra o actividad.

      .col-lg-12.mb-5
        p Cuando se hace referencia a áreas protegidas se tiene la responsabilidad de formular un plan de manejo ambiental, donde serán aprobados por el alcalde de cada ciudad en donde se encuentren.

      .col-lg-8.mb-5
        .cajon.color-acento-contenido.p-4
          p Además, por medio del Decreto 190 de 2004 se establece que cada una de las áreas protegidas que sean declaradas por el <span style="color: #048C66 !important; font-weigth: bold;"><b>Distrito Capital</b></span> deberán contar con un plan de manejo que a su vez tendrá que cumplir con unos requerimientos mínimos.
        
      .col-lg-12.mb-3
        p Requerimientos a tener en cuenta:
      .col-lg-12.mb-5 
        .tarjeta--container.row.align-items-center
          .col-md.tarjeta.BGIMG07.p-4  
            <br><br><br><br><br><br>                                
            h2.text-center Alinderamiento
            p.text-center Demarca los límites del área protegida  y son definidos dentro del POT (Plan de Ordenamiento Territorial).
                
          .col-md.tarjeta.BGIMG08.p-4
            <br><br><br><br><br><br>                       
            h2.text-center Zonificación
            p Diferencia los sectores al interior de cada área protegida, estableciendo sectores de preservación y restauración ecológica.
                
          .col-md.tarjeta.BGIMG09.p-4 
            <br><br><br><br><br><br>                      
            h2.text-center Lineamientos técnicos
            p Necesarios para establecer las acciones de preservación, restauración y aprovechamiento sostenible.

          .col-md.tarjeta.BGIMG10.p-4
            <br><br><br><br><br><br>                      
            h2.text-center Equipos
            p Requeridos para el cumplimiento de las acciones previamente mencionadas.
            <br> 
                
      .col-lg-12.mb-3
        p Luego de lo anterior, para la formulación de las acciones de mejora es necesario seguir los siguientes pasos: 
        img(src='@/assets/curso/tema1/img06.svg')

    .row.justify-content-center.mb-3
      .col-lg-12
        p Existen diferentes maneras de conservar, proteger y restaurar el medio ambiente, bien sea desde una empresa, una persona natural o desde una entidad gubernamental, para cada uno de ellos es un trato diferente. Por tal motivo, conocerá un poco acerca de las acciones que pueden implementar las empresas para aportar a estos cambios en los ecosistemas. Pero, ¿cómo se hará? Sencillo, a través de la siguiente gráfica interactiva:

    .container.tarjeta.tarjeta--blanca
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure(data-aos="fade-right")
            img(src='@/assets/curso/tema1/img07.svg') 

        .tarjeta.BG02.p-3(x="51.2%" y="22.2%")
          h3 La participación activa en iniciativas que estén a favor de la biodiversidad: 
          p Un ejemplo es WBCSD por sus siglas en inglés The World Business Council for Sustainable Development, hace referencia a nuevas estrategias de innovación y desarrollo sostenible, en las cuales se cuenta con más de 200 compañías de 35 países y 20 diferentes sectores industriales.
      
        .tarjeta.BG02.p-3(x="70%" y="32%")
          h3 Velar por la protección del recurso hídrico:
          p Implementando tecnologías de aprovechamiento de aguas lluvias o un reproceso de las aguas que se disponen, así mismo, adelantar sistemas de gestión del recurso hídrico para el control de consumo.

        .tarjeta.BG02.p-3(x="70.8%" y="61%")
          h3 Ahorro de energía: 
          p Haciendo uso de energías renovables junto con el aumento de la eficiencia energética, la cual hace referencia a que solo sea utilizada la energía cuando sea totalmente necesaria, sea para iluminación o para procesos industriales.

        .tarjeta.BG02.p-3(x="51%" y="71.5%")
          h3 Generación de energías alternativas: 
          p Existen diferentes maneras de generar energía, actualmente se está optando por energías de biomasa, las cuales aprovechan los residuos de la organización haciendo un reproceso.

        .tarjeta.BG02.p-3(x="32%" y="61%")
          h3 Diseño de nuevos productos: 
          p La innovación en la creación de nuevos productos amigables con el medio ambiente cada día avanza más apresuradamente y se puede encontrar que muchos de los objetos que anteriormente eran netamente de plástico ahora se están realizando con materiales biodegradables.

        .tarjeta.BG02.p-3(x="32%" y="32%")
          h3 Capacitaciones ambientales: 
          p En temas de clasificación de residuos, ahorro y uso eficiente del agua y energía, entre otros temas. 

      .row.mb-5.align-items-center.justify-content-end.me-3.mt-5  
          .col-lg-11.col-md-11.col-sm-11.BGIMG02
            p.p-5.margenParrafo Asimismo, los planes de manejo están regulados por el Decreto 1076 de mayo 26 de 2015, en el cual se establecen las medidas y las actividades que están orientadas a la prevención, conservación y restauración o compensación de los impactos ambientales que se desarrollen por cada proyecto en específico. En el Artículo 2.2.2.3.2.3 del mencionado decreto, se encuentra un listado de los proyectos, obras o actividades que deben presentar planes de manejo ambiental. 
      .row.mb-5.align-items-center.justify-content-start
          .col-lg-4.col-md-1.col-sm-1
            img.subir(src='@/assets/curso/tema1/img09.png').mb-5
          .col-lg-12
            p A continuación, se describen los sectores de los cuales hace referencia el Decreto 1076:
  
    .row.BGIMG01.mb-5              
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .row.align-items-center.tarjeta.BG03.p-5.mx-2        
          p.text-center Sector hidrocarburos.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2
          p.text-center Sector minero.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2
          p.text-center La construcción de presas, represas o embalses, cualquiera sea su destinación con capacidad mayor de doscientos millones (200.000.000) de metros cúbicos de agua.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2   
          p.text-center Sector eléctrico. 
        .tarjeta.BG03.p-5.row.align-items-center.mx-2  
          p.text-center Los proyectos para la generación de energía nuclear.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2    
          p.text-center Sector marítimo y portuario.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2    
          p.text-center La construcción y operación de aeropuertos internacionales.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2   
          p.text-center Ejecución de obras públicas. 
        .tarjeta.BG03.p-5.row.align-items-center.mx-2    
          p.text-center La construcción y operación de distritos de riego y/o de drenaje con coberturas superiores a 20.000 hectáreas.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2                 
          p.text-center Pesticidas.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2    
          p.text-center La importación y/o producción de aquellas sustancias, materiales o productos sujetos a controles por virtud de tratados, convenios y protocolos internacionales de carácter ambiental.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2    
          p.text-center Los proyectos que afecten las áreas del sistema de parques nacionales naturales.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2    
          p.text-center Los proyectos, obras o actividades de construcción de infraestructura o agroindustria que se pretendan realizar en las áreas protegidas públicas nacionales.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2    
          p.text-center Los proyectos que adelanten las Corporaciones Autónomas Regionales a que hace referencia el inciso segundo del numeral 19 del Artículo 31 de la Ley 99 de 1993.
        .tarjeta.BG03.p-5.row.align-items-center.mx-2    
          p.text-center Los proyectos que requieran trasvase de una cuenca a otra, cuando al menos una de las dos presente un valor igual o superior a 2 metros cúbicos/segundo durante los períodos de mínimo caudal.
        .tarjeta.BG03.p-3.row.align-items-center.mx-2    
          p.text-center La introducción al país de parentales, especies, subespecies, razas, híbridos o variedades foráneas con fines de cultivo, levante, control biológico, reproducción y/o comercialización, para establecerse o implantarse en medios naturales o artificiales, que puedan afectar la estabilidad de los ecosistemas o de la vida silvestre.

    
      .col-lg-12.col-md-11.col-sm-11.BGIMG03.p-5 
        .col-lg-8.col-md-10.col-sm-10
          p.text-white Los Los planes de manejo son utilizados no solo como metodologías para la conservación de áreas ecológicas, sino también, para su restauración, ya que este es el proceso de asistencia a la recuperación ecológica de algún ecosistema, el cual se ha visto degradado, dañado o destruido, sea por acciones del hombre o por desastres naturales. 
          p.text-white Es necesario tener en cuenta que la restauración ecológica tiene como finalidad recuperar los componentes básicos en tanto a la estructura como a la función y composición, pero no pretende dejar el ecosistema como se encontraba previamente a que se produjeran estos cambios negativos.

      .col-lg-12.mb-5
        .mb-5
        p Dentro de las metodologías de restauración se encuentra una amplia discusión sobre dos conceptos claves, los cuales son:

    
      .col-lg-6.mb-5
        .tarjeta.tarjeta-flip.color.BG03(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img11.png')})`}")
            .tarjeta-flip__contenido.py-5.p-xl-5
              h3.text-center.mb-5 Restauración ecológica
              p.text-center Hace referencia al proceso que se adelanta para ayudar a cierto ecosistema a que se recupere luego de su degradación.
      .col-lg-6.mb-5
        .tarjeta.tarjeta-flip.color.BG03(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img12.png')})`}")
            .tarjeta-flip__contenido.py-5.p-xl-5
              h3.text-center.mb-4 Restauración del capital natural
              p.text-center Refiere a diferentes aportes que van desde la ecología y la economía para la conservación de la naturaleza, así como la adaptación a los cambios climáticos. 

    
      .col-lg-6.mb-5
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0  Según la Sociedad de Restauración Ecológica, la restauración ecológica es “el proceso de alterar intencionalmente un sitio para establecer un ecosistema”<br>
            p.text-center (Jackson, 1993, citado por Geoinnova, 2017). 
            i.fas.fa-quote-right
          
      .col-lg-6.p-5
        p Estas prácticas son totalmente extrapolables, ya que lo que puede funcionar en un ecosistema específico, en otro puede que no; por esto, cada proyecto de restauración debe realizar un estudio previo junto con el diagnóstico del área a tratar. 
  </template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
