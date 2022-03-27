<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Indicadores ambientales

    .row.align-items-center.justify.mb-5
      .col-lg-12
        p Actualmente, se cuenta con los indicadores de calidad ambiental, con estos se puede saber el estado ambiental del entorno y hacer una evaluación de este para mejorarlo. ¿Quiere conocer más al respecto? En el siguiente video lo podrá hacer:

        figure
        .video(data-aos="flip-right")
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
   
    .row.mb-5
      .col-lg-4.col-md-5
        p.text-white.mb-0.BGIMG04.p-2.text-bold Funciones y características de <br>los indicadores ambientales

    .row.mb-5.align-items-center.justify-content-end.me-3.mt-5  
      .col-lg-11.col-md-11.col-sm-11.BGIMG02
        p.p-5.margenParrafo Las principales funciones de los indicadores ambientales son:
        p.p-5.margenParrafo ✔	Llevar al mínimo las medidas o parámetros que se necesitan para realizar una representación de la realidad de la situación. 
        p.p-5.margenParrafo ✔	Se podrán facilitar los procesos de comunicación.
    .row.mb-5.align-items-center.justify-content-start
      .col-lg-4.col-md-1.col-sm-1
        img.subir(src='@/assets/curso/tema2/img02.png').mb-5
      .col-lg-12
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
