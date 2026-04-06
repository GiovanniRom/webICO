import graduationGuide from "./graduationGuide.es";

/** Textos en español (namespace por defecto `translation`). */
const es = {
  nav: {
    inicio: "Inicio",
    alumnos: "Alumnos",
    planEstudios: "Plan de estudios",
    profesores: "Profesores",
    egresados: "Egresados",
    ligasInteres: "Ligas de interés",
    idioma: "Idioma",
    espanol: "Español",
    ingles: "Inglés",
  },
  header: {
    facultadLargo: "Facultad de Estudios Superiores Aragón",
    facultadCorto: "FES Aragón",
  },
  layout: {
    menu: "Menú",
    abrirMenu: "Abrir menú",
    logoFesAlt: "Logo FES Aragón",
    logoIcoAlt: "Logo ICO",
  },
  footer: {
    jefaCarrera: "Jefa de Carrera",
    secretarioTecnico: "Secretario Técnico",
    aniversarioAlt: "50 aniversario",
    correoAlt: "Correo",
    whatsappAria: "WhatsApp Jefatura Ingeniería en Computación",
    facebookAria: "Facebook FES Aragón Computación",
    correoAria: "Enviar correo a computacion@aragon.unam.mx",
  },
  home: {
    planEstudiosTitulo: "PLAN DE ESTUDIOS",
    planEstudiosDesc:
      "Conoce el plan de estudios de la Carrera de Ingeniería en Computación.",
    alumnosTitulo: "ALUMNOS",
    alumnosDesc:
      "Información útil para los alumnos de la carrera de Ingeniería en Computación.",
    profesoresTitulo: "PROFESORES",
    profesoresDesc:
      "Conoce los profesores de la Carrera de Ingeniería en Computación.",
    ligasTitulo: "LIGAS DE INTERÉS",
    ligasDesc:
      "Accede a las ligas de interés de la Carrera de Ingeniería en Computación.",
    egresadosTitulo: "EGRESADOS",
    egresadosDesc:
      "Información útil para los egresados de la Carrera de Ingeniería en Computación.",
    altPlan: "Plan de estudios",
    altAlumnos: "Alumnos",
    altProfesores: "Profesores",
    altLigas: "Ligas de interés",
    altEgresados: "Egresados",
  },
  alumnos: {
    horarios: {
      titulo: "HORARIOS",
      descripcion: "Horarios de clase impartidos en el semestre actual.",
      alt: "Horarios",
    },
    calendario: {
      titulo: "CALENDARIO",
      descripcion: "Calendario de actividades escolares del semestre actual.",
      alt: "Calendario",
    },
    extraordinarios: {
      titulo: "EXTRAORDINARIOS",
      descripcion:
        "Horarios de exámenes extraordinarios del semestre actual.",
      alt: "Extraordinarios",
    },
    redes: {
      titulo: "REDES",
      descripcion: "Prácticas de redes de computadoras.",
      alt: "Redes",
    },
    tutores: {
      titulo: "TUTORES",
      descripcion:
        "Conoce el listado de los profesores que también son tutores del semestre actual.",
      alt: "Tutores",
    },
    laboratorio: {
      titulo: "HORARIOS DE LABORATORIO",
      descripcion:
        "Conoce los horarios de laboratorio impartidos para el semestre actual.",
      alt: "Horarios de laboratorio",
    },
    formacion: {
      titulo: "HORAS DE FORMACIÓN COMPLEMENTARIA",
      descripcion: "Información sobre las horas de formación complementaria.",
      alt: "Formación complementaria",
    },
    evaluacion: {
      titulo: "EVALUACIÓN A PROFESORES",
      descripcion:
        "Acceso a la página de evaluación a profesores de la Universidad.",
      alt: "Evaluación a profesores",
    },
  },
  planPage: {
    perfilEgreso: {
      titulo: "PERFIL DE EGRESO",
      descripcion: "Perfil de egreso de la carrera de Ingeniería en Computación.",
      alt: "Perfil de egreso",
    },
    perfilIngreso: {
      titulo: "PERFIL DE INGRESO",
      descripcion:
        "Perfil de ingreso a la carrera de Ingeniería en Computación.",
      alt: "Perfil de ingreso",
    },
    malla: {
      titulo: "MALLA CURRICULAR",
      descripcion: "Malla curricular de la carrera de Ingeniería en Computación.",
      alt: "Malla curricular",
    },
    planDocumento: {
      titulo: "PLAN DE ESTUDIOS",
      descripcion: "Estructura y secuencia del plan de estudios.",
      alt: "Plan de estudios",
    },
    informacion: {
      titulo: "INFORMACIÓN",
      descripcion:
        "Conoce la información de la Facultad de Estudios Superiores Aragón.",
      alt: "Información",
    },
  },
  professorsPage: {
    correo: {
      titulo: "CORREO INSTITUCIONAL",
      descripcion:
        "Conoce los correos de los profesores de la carrera de Ingeniería en Computación.",
      alt: "Correo institucional",
    },
    paginasPersonales: {
      titulo: "PÁGINAS PERSONALES",
      descripcion:
        "Visita las páginas personales de los profesores de la carrera de Ingeniería en Computación.",
      alt: "Páginas personales",
    },
  },
  graduatesPage: {
    diplomados: {
      titulo: "DIPLOMADOS",
      descripcion: "Listado de cursos o diplomados.",
      alt: "Diplomados",
    },
    ofertasTrabajo: {
      titulo: "OFERTAS DE TRABAJO",
      descripcion:
        "Visita la página de bolsa universitaria de trabajo para registrar tu perfil y encontrar ofertas de trabajo.",
      alt: "Ofertas de trabajo",
    },
    guiaTitulacion: {
      titulo: "GUÍA DE TITULACIÓN",
      descripcion:
        "Requisitos, modalidades y pasos del proceso de titulación en un solo lugar dentro del sitio de la carrera.",
      alt: "Guía de titulación",
    },
  },
  linksPage: {
    cultura: {
      titulo: "CULTURA INFORMÁTICA",
      descripcion:
        "Enlaces a boletines, artículos, videos y material de apoyo.",
      alt: "Cultura informática",
    },
    servicioSocial: {
      titulo: "SERVICIO SOCIAL",
      descripcion:
        "Información y acceso al portal de servicio social de la Universidad.",
      alt: "Servicio social",
    },
    becas: {
      titulo: "BECAS",
      descripcion: "Acceso a la página de becas de la Universidad.",
      alt: "Becas",
    },
    bibliotecas: {
      titulo: "BIBLIOTECAS",
      descripcion:
        "Acceso a las páginas de las bibliotecas de la Universidad.",
      alt: "Bibliotecas",
    },
  },
  schedulesView: {
    tituloSemestre: "HORARIOS DE SEMESTRE 2026 II",
    subtituloPlan: "PLAN 2119",
  },
  calendarView: {
    tituloPrincipal: "CALENDARIO ESCOLAR 2026 II",
    subtitulo: "PLAN SEMESTRAL",
  },
  extraordinariosView: {
    titulo: "HORARIOS EXTRAORDINARIOS",
    semestre: "SEMESTRE 2026 II",
    extraLargoHeading: "Extra largo ICO",
    extraLargoIframeTitle: "PDF Horarios extra largo ICO",
    primeraVueltaHeading: "Extras primera vuelta",
    primeraVueltaIframeTitle: "PDF Extras primera vuelta",
  },
  networksView: {
    tituloPrincipal: "PRÁCTICAS DE REDES DE COMPUTADORAS",
    subtitulo: "PRÁCTICAS DE LABORATORIO",
    panelRedes1: "PRÁCTICAS DE REDES I",
    panelRedes2: "PRÁCTICAS DE REDES II",
    practica: "PRÁCTICA {{num}}",
    practica6y7: "PRÁCTICA 6 y 7",
  },
  tutorsView: {
    titulo: "TUTORES",
    semestre: "SEMESTRE 2026 II",
  },
  formationView: {
    tituloPrincipal: "HORAS DE FORMACIÓN COMPLEMENTARIA",
    semestre: "SEMESTRE 2026 II",
    imagenEquivalenciasAlt:
      "Equivalencias de horas de formación complementaria",
    tituloEquivalencias: "EQUIVALENCIAS DE HORAS DE FORMACIÓN COMPLEMENTARIA",
  },
  egresoPage: {
    cabeceraLinea1: "PERFIL DE",
    cabeceraLinea2: "EGRESO",
    imagenAlt: "Perfil de egreso",
    queEsLabel: "¿Qué es el perfil de egreso?",
    queEsBody:
      "El perfil de egreso describe las competencias, conocimientos, habilidades y actitudes que el estudiante habrá desarrollado al concluir la carrera de Ingeniería en Computación en la FES Aragón, y que le permiten insertarse en el ámbito laboral o continuar con estudios de posgrado.",
    competenciasLabel: "Competencias profesionales",
    competenciasBody:
      "El egresado será capaz de analizar, diseñar, desarrollar e implementar sistemas de software y hardware; gestionar proyectos de TI; aplicar metodologías y estándares de la ingeniería; y comunicar resultados de forma oral y escrita en contextos profesionales y académicos.",
    ambitosLabel: "Ámbitos de desempeño",
    ambitosBody:
      "El ingeniero en computación puede desempeñarse en empresas del sector público y privado, en desarrollo de software, bases de datos, redes, inteligencia artificial, ciberseguridad, docencia e investigación, así como en el emprendimiento de proyectos tecnológicos.",
  },
  ingresoPage: {
    cabeceraLinea1: "PERFIL DE",
    cabeceraLinea2: "INGRESO",
    imagenAlt: "Perfil de ingreso",
    queEsLabel: "¿Qué es el perfil de ingreso?",
    queEsBody:
      "El perfil de ingreso describe las características que debe reunir el aspirante a la carrera de Ingeniería en Computación en la FES Aragón: conocimientos previos, habilidades, actitudes y valores que facilitan un buen desempeño en el plan de estudios.",
    conocimientosLabel: "Conocimientos recomendados",
    conocimientosBody:
      "Se recomienda que el aspirante tenga bases sólidas en matemáticas (álgebra, geometría, precálculo), capacidad de razonamiento lógico y abstracto, así como interés por la tecnología y la resolución de problemas mediante el uso de computadoras.",
    habilidadesLabel: "Habilidades y actitudes",
    habilidadesBody:
      "Es deseable contar con capacidad de análisis, trabajo en equipo, disciplina para el estudio autónomo, curiosidad científica y disposición para actualizarse de forma continua en un área en constante evolución.",
  },
  informationPage: {
    valores: {
      titulo: "VALORES",
      alt: "Valores",
      columna1: `• Identificación plena de los valores de la UNAM como los valores de la FES Aragón.
• Generosidad en todas sus aportaciones al país.
• Responsabilidad en el estudio de problemas y temas nacionales.
• Compromiso con la sociedad mexicana.
• Compromiso con la formación de egresados de calidad a nivel Licenciatura y Posgrado.
`,
      columna2: `• Lealtad a las tareas de la UNAM.
• Liderazgo institucional.
• Espíritu universitario.
• Respeto a la diversidad e ideologías.
• Respeto al medio ambiente.
• Unidad con las dependencias universitarias.
• Compañerismo entre el personal de la Facultad.`,
    },
    objetivos: {
      titulo: "OBJETIVOS",
      alt: "Objetivos",
      descripcion:
        "Formar profesionales en Ingeniería en Computación líderes, con conocimientos teóricos y prácticos útiles para la solución de problemas computacionales que la sociedad demanda, comprometidos con las necesidades y desarrollo del país.",
    },
    mision: {
      titulo: "MISIÓN",
      alt: "Misión",
      descripcion:
        "Formar profesionales con un gran espíritu universitario que estén comprometidos con el crecimiento del país, con capacidades para encontrar soluciones innovadoras y con un alto nivel de conocimientos en matemáticas, programación e ingeniería de software, procesamiento de la información, arquitectura de computadoras, redes, seguridad y control.",
    },
    vision: {
      titulo: "VISIÓN",
      alt: "Visión",
      descripcion:
        "Ser una carrera de vanguardia que asegure la actualización constante de su planta docente, infraestructura y planes de estudio, para formar Ingenieros en Computación capaces de responder a los cambios que demande el país.",
    },
  },
  graduationGuide,
} as const;

export default es;
