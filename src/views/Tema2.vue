<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Indicadores ambientales

    .row.align-items-center.justify.mb-4
      .col-lg-12
        p Actualmente, se cuenta con los indicadores de calidad ambiental, con estos se puede saber el estado ambiental del entorno y hacer una evaluación de este para mejorarlo. ¿Quiere conocer más al respecto? En el siguiente video lo podrá hacer:

        figure
        .video(data-aos="flip-right")
          iframe(width="560" height="315" src="https://www.youtube.com/embed/YnI3J9G8FiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   
    .row.mb-5
      .col-lg-4.col-md-4.mb-4
        p.text-white.mb-0.BGIMG04.p-2.text-bold Funciones y características de <br>los indicadores ambientales

    .row.mb-5.align-items-center.justify-content-end.me-3.mt-5  
      .col-lg-10.col-md-11.col-sm-11.BGIMG02
        p.p-3.margenParrafo Las principales funciones de los indicadores ambientales son:
        p.p-2.margenParrafo ✔ Llevar al mínimo las medidas o parámetros que se necesitan para realizar una representación de la realidad de la situación. 
        p.p-2.margenParrafo ✔	Se podrán facilitar los procesos de comunicación.
    .row.mb-5.align-items-center.justify-content-start
      .col-lg-4.col-md-1.col-sm-1
        img.subir(src='@/assets/curso/tema2/img02.png')
    .row.mb-5.BGIMG01
      .col-lg-12
      .col-lg-12.mb-5
        p Los indicadores ambientales se utilizan a diferentes escalas: internacional, nacional, regional y estatal, cada una para diferentes fines, la mayoría de ellos los usan para determinar el estado del medio ambiente, evaluar el desempeño de políticas ambientales y también para comunicar los progresos que se han adelantado en cuestión de desarrollo sustentable. 
        p Además, los indicadores deben de tener ciertas características que se describen en la siguiente tabla: 
  
      .col-lg-1
      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          br
          span Características indicadores ambientales
        .tabla-a.color-acento-botones.mb-5 
          table
            caption Nota. SENA (2021).
            thead
              tr
                th
                  h4.text-center Características
                th
                  h4.text-center Necesidad
            tbody.BG10
              tr
                td Ofrecer el enfoque de las condiciones ambientales con respecto a las respuestas de la comunidad. 
                td Es necesario que proporcionen información para entender con claridad el fenómeno que se va a tratar, para que así se puedan tomar decisiones que estén sustentadas. 
              tr
                td Ser sencillos, fáciles de interpretar y capaces de mostrar las variaciones en el tiempo.
                td El indicador deberá comunicar el objetivo de una forma clara y concisa. 
              tr
                td Responder a cambios en el ambiente y las actividades humanas relacionadas.
                td Es necesario proporcionar información de contexto para facilitar una comprensión clara de lo que el indicador está dando a entender.   
              tr
                td Proporcionar una base para las comparaciones internacionales.
                td Es importante que los procedimientos que están siendo documentados estén sujetos a bases científicas de información para tener puntos de comparación confiables.  
              tr
                td Ser aplicables a escala nacional o regional.
                td Se debe considerar la escala en la confiabilidad o pertinencia de los indicadores para que puedan ser aplicados a diferentes escalas organizacionales. 
              tr
                td Tener un valor con el cual puedan ser comparados.
                td Se debe tener un valor de comparación del indicador para medir el avance en programas concretos y así poder evaluar más fácilmente su desempeño.  
              tr
                td Estar teórica y científicamente bien fundamentados.
                td Es necesario que exista información aprovechable y que sea actualizado periódicamente.

    
      .col-lg-5.col-md-5.mb-5
        p.text-white.mb-0.BGIMG04.p-4.text-bold Tipos de indicadores ambientales 

      .col-lg-12.mb-5
       p Los indicadores ambientales se pueden clasificar según los datos disponibles. Estos son los tres tipos de indicadores ambientales que hay: 
    
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img03.svg' alt='AvatarTop')
          .tarjeta.color.BG01
            .text-black.p-4
              h2.text-center Tipo 1:
              p Este tipo de indicador tiene datos que siempre se encuentran disponibles, ya que se obtienen en monitoreos que se realizan permanentemente. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img04.svg' alt='AvatarTop')
          
          .tarjeta.color.BG01
            .p-4
              h2.text-center Tipo 2: 
              p Están basados en los datos que provienen del monitoreo permanente, pero a su vez necesitan información adicional, dado que los datos pueden o no pueden estar totalmente disponibles. 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img05.svg' alt='AvatarTop')
          .tarjeta.color.BG01
            .p-4
              h2.text-center Tipo 3:
              p Este tipo de indicadores no tienen una base estadística, ya que son principalmente indicadores conceptuales. 

      .col-lg-12.mb-5
      p A continuación, se presentan algunos ejemplos de indicadores ambientales:
                
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BGIMG05")
      .row(titulo="Índice de bienestar económico sostenible")
        .col-md-6.mb-4.mb-md-0.p-5
          p Está netamente relacionado con la economía y remplaza el Producto Interno Bruto (PIB) como indicador de bienestar social, añadiendo variables como el consumo ajustado y una medida de discrepancia socioeconómica.
        .col-md-5.px-4
          figure
            img(src='@/assets/curso/tema2/img06.png', alt='Texto que describa la imagen')
      .row(titulo="Índice de desarrollo humano")
        .col-md-6.mb-4.mb-md-0.p-5
          p Tiene como finalidad determinar el estado de salud, de educación y de bienes económicos. 
        .col-md-5.px-4
          figure
            img(src='@/assets/curso/tema2/img08.png', alt='Texto que describa la imagen')
      .row(titulo="Índice de sostenibilidad ambiental")
        .col-md-6.mb-4.mb-md-0.p-5
          p Instrumento utilizado para evaluar las formas de actividad humana que trae repercusiones directas al planeta como emisiones de agentes contaminantes, uso de agroquímicos, crecimiento de la población,  consumo de energía, consumo de agua.
        .col-md-6.px-4
          figure
            img(src='@/assets/curso/tema2/img09.png', alt='Texto que describa la imagen')
      .row(titulo="Índice de desempeño ambiental")
        .col-md-6.mb-4.mb-md-0.p-5
          p Este indicador se usa para evaluar el rendimiento ambiental de las políticas que algún país haya implementado en un periodo de tiempo determinado.
        .col-md-6.px-4
          figure
            img(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
      .row(titulo="Índice global de economía verde")
        .col-md-6.mb-4.mb-md-0.p-5
          p Este indicador analiza las inversiones que están realizando los países para tener una economía que sea sostenible con el medio ambiente. 
        .col-md-6.px-4
          figure
            img(src='@/assets/curso/tema2/img11.png', alt='Texto que describa la imagen')
      .row(titulo="Huella ecológica")
        .col-md-6.mb-4.mb-md-0.p-5
          p Este indicador evalúa el impacto ambiental que trae consigo la demanda de recursos naturales por parte del ser humano para satisfacer sus necesidades. 
        .col-md-6.px-4
          figure
            img(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
      .row(titulo="Huella de carbono")
        .col-md-6.mb-4.mb-md-0.p-5
          p Este indicador provee la información sobre la cantidad de gases de efecto invernadero que se produce de forma directa o indirecta.
        .col-md-6.px-4
          figure
            img(src='@/assets/curso/tema2/img13.png', alt='Texto que describa la imagen')
      .row(titulo="Huella hídrica")
        .col-md-6.mb-4.mb-md-0.p-5
          p Este indicador es utilizado para cuantificar el uso del agua.
        .col-md-6.px-4
          figure
            img(src='@/assets/curso/tema2/img14.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema2',
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
