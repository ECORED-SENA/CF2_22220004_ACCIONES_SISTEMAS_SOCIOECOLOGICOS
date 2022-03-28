<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-lg-5.col-md-5
        p.text-center.text-white.mb-0.BGIMG04.p-4.text-bold Síntesis 
    
    .row.justify-content-center.mb-5
      .col-lg-12.BGIMG06(data-aos="fade-right")  
        p.mb-5 El siguiente mapa detalla los elementos más relevantes estudiados durante el desarrollo del componente formativo:

        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
