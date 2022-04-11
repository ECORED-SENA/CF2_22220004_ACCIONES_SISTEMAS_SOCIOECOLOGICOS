export default {
  global: {
    componenteFormativo: 'Acciones de conservación, protección y restauración',
    descripcionCurso:
      'En este componente formativo se trabajan temáticas que le permitirán establecer cuáles son los proyectos, obras o labores que requieran adelantar un plan de manejo en donde se determinarán las acciones necesarias de conservación, protección y restauración de los ecosistemas que se vayan a intervenir.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planes de manejo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Indicadores ambientales',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      texto: 'AESA Infraestructura y Minería. (2021). Indicadores ambientales',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Z4_OUw-Vdz4',
    },
    {
      texto:
        'Olmos, A., Casallas, Y. & Castro, D. (2018). Guía para el Diseño y construcción de indicadores de impactos internalizables en el marco del Licenciamiento Ambiental en Colombia. Autoridad Nacional de Licencias Ambientales ANLA.',
      tipo: 'PDF',
      link:
        'https://www.anla.gov.co/documentos/normativa/manuales_guias/30_11_2018_indicadores_de_impactos_internalizables_enviado.pdf ',
    },
    {
      texto: 'Decreto 1076 de 2015.  Sector Ambiente y Desarrollo Sostenible',
      tipo: 'Normativa',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=78153',
    },
  ],
  glosario: [
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Se entiende como el desarrollo que provee las necesidades del presente, sin comprometer la capacidad de las generaciones futuras.',
    },
    {
      termino: 'Indicador ambiental',
      significado:
        'Es un valor derivado de parámetros que proporciona información para describir el estado de un fenómeno.',
    },
    {
      termino: 'Planes de manejo',
      significado:
        'Es un documento que sirve de guía para manejar, mantener y proteger un área.',
    },
    {
      termino: 'POT',
      significado:
        'Es el orientador de las decisiones que toman los alcaldes. La planificación del territorio sirve como soporte para gestionar los recursos adicionales de financiación.',
    },
    {
      termino: 'Resolución ambiental',
      significado:
        'Son todos los lineamientos que la autoridad requiere para la elaboración y ejecución de los estudios ambientales que deben ser presentados ante las autoridades.',
    },
  ],
  referencias: [
    {
      referencia:
        'García, D. (2016). Formulación de actividades de restauración ecológica para el proyecto de mejoramiento, rehabilitación y reconstrucción de la vía Palomas - Mambita, departamento de Cundinamarca.',
      link:
        'https://repository.unilibre.edu.co/bitstream/handle/10901/10411/Formulaci%C3%B3n%20de%20actividades%20de%20restauraci%C3%B3n%20ecol%C3%B3gica.%20Documento.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Geoinnova. (2017). La restauración ecológica es clave para la recuperación de ecosistemas degradados.',
      link: 'https://geoinnova.org/blog-territorio/restauracion-ecologica/',
    },
    {
      referencia:
        'Mola, I., Sopeña, A. y De Torre, R. (Editores). (2018). Guía práctica de restauración ecológica. Fundación Biodiversidad del Ministerio para la Transición Ecológica.',
      link:
        'https://ieeb.fundacion-biodiversidad.es/sites/default/files/guia_practica_re_0.pdf',
    },
    {
      referencia:
        'Quiroga, R. (2009). Guía metodológica para desarrollar indicadores ambientales y de desarrollo sostenible en países de América Latina y El Caribe.',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/5502/1/S0900307_es.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
