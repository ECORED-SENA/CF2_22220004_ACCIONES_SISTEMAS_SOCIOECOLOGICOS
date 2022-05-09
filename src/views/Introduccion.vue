<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-black i 
         
      h1 Introducción
    .row.BG05.align-items-center.mb-5
      .col-lg-8.p-4
        p Estimado aprendiz, bienvenido a un tema bastante apasionante en la era actual. Es de saber que los ecosistemas han sufrido diferentes cambios a lo largo del tiempo, que bien sean generados por el ser humano o por el simple deterioro ambiental y requieren un tratamiento específico para que puedan recuperar y conservar sus características fundamentales; es por esto que se necesita  planes de manejo en los que se especifique las acciones a tomar para un correcto tratamiento en pro del desarrollo sostenible de los ecosistemas.<br> En el siguiente video verá un resumen del proceso educativo que tendrá:    
      .col-lg-4
        figure
          img(src='@/assets/curso/intro.png')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tjWfHto7YII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
     
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
