/** English UI strings (default namespace `translation`). */
const en = {
  nav: {
    inicio: "Home",
    alumnos: "Students",
    planEstudios: "Study plan",
    profesores: "Faculty",
    egresados: "Graduates",
    ligasInteres: "Useful links",
    idioma: "Language",
    espanol: "Spanish",
    ingles: "English",
  },
  header: {
    facultadLargo: "School of Higher Studies Aragón",
    facultadCorto: "FES Aragón",
  },
  layout: {
    menu: "Menu",
    abrirMenu: "Open menu",
    logoFesAlt: "FES Aragón logo",
    logoIcoAlt: "Computer Engineering programme logo",
  },
  footer: {
    jefaCarrera: "Programme chair",
    secretarioTecnico: "Technical secretary",
    aniversarioAlt: "50th anniversary",
    correoAlt: "Email",
    whatsappAria: "WhatsApp — Computing programme office",
    facebookAria: "Facebook FES Aragón Computing",
    correoAria: "Send email to computacion@aragon.unam.mx",
  },
  home: {
    planEstudiosTitulo: "STUDY PLAN",
    planEstudiosDesc:
      "Explore the study plan for the B.Sc. in Computer Engineering.",
    alumnosTitulo: "STUDENTS",
    alumnosDesc:
      "Useful information for students of the Computer Engineering programme.",
    profesoresTitulo: "FACULTY",
    profesoresDesc:
      "Meet the faculty of the Computer Engineering programme.",
    ligasTitulo: "USEFUL LINKS",
    ligasDesc:
      "Access useful links for the Computer Engineering programme.",
    egresadosTitulo: "GRADUATES",
    egresadosDesc:
      "Useful information for graduates of the Computer Engineering programme.",
    altPlan: "Study plan",
    altAlumnos: "Students",
    altProfesores: "Faculty",
    altLigas: "Useful links",
    altEgresados: "Graduates",
  },
  alumnos: {
    horarios: {
      titulo: "CLASS SCHEDULES",
      descripcion: "Class schedules for the current term.",
      alt: "Class schedules",
    },
    calendario: {
      titulo: "CALENDAR",
      descripcion: "Academic activity calendar for the current term.",
      alt: "Calendar",
    },
    extraordinarios: {
      titulo: "MAKE-UP EXAMS",
      descripcion: "Schedule of make-up exams for the current term.",
      alt: "Make-up exams",
    },
    redes: {
      titulo: "NETWORKS",
      descripcion: "Computer network laboratory practices.",
      alt: "Networks",
    },
    tutores: {
      titulo: "TUTORS",
      descripcion:
        "List of faculty members who also serve as tutors this term.",
      alt: "Tutors",
    },
    laboratorio: {
      titulo: "LAB SCHEDULES",
      descripcion: "Laboratory schedules offered during the current term.",
      alt: "Lab schedules",
    },
    formacion: {
      titulo: "COMPLEMENTARY TRAINING HOURS",
      descripcion: "Information on complementary training hours.",
      alt: "Complementary training",
    },
    evaluacion: {
      titulo: "FACULTY EVALUATION",
      descripcion: "Access the university faculty evaluation portal.",
      alt: "Faculty evaluation",
    },
  },
  planPage: {
    perfilEgreso: {
      titulo: "GRADUATE PROFILE",
      descripcion: "Graduate profile for the Computer Engineering programme.",
      alt: "Graduate profile",
    },
    perfilIngreso: {
      titulo: "ADMISSION PROFILE",
      descripcion: "Admission profile for the Computer Engineering programme.",
      alt: "Admission profile",
    },
    malla: {
      titulo: "CURRICULUM MAP",
      descripcion: "Curriculum map for the Computer Engineering programme.",
      alt: "Curriculum map",
    },
    planDocumento: {
      titulo: "STUDY PLAN",
      descripcion: "Structure and sequence of the study plan.",
      alt: "Study plan",
    },
    informacion: {
      titulo: "INFORMATION",
      descripcion:
        "Learn about the School of Higher Studies Aragón (FES Aragón).",
      alt: "Information",
    },
  },
  professorsPage: {
    correo: {
      titulo: "INSTITUTIONAL EMAIL",
      descripcion:
        "Find email addresses for faculty in the Computer Engineering programme.",
      alt: "Institutional email",
    },
    paginasPersonales: {
      titulo: "PERSONAL WEB PAGES",
      descripcion:
        "Visit faculty personal pages for the Computer Engineering programme.",
      alt: "Personal web pages",
    },
  },
  graduatesPage: {
    diplomados: {
      titulo: "DIPLOMA PROGRAMMES",
      descripcion: "List of courses or diploma programmes.",
      alt: "Diploma programmes",
    },
    ofertasTrabajo: {
      titulo: "JOB OPPORTUNITIES",
      descripcion:
        "Visit the UNAM job board to register your profile and find job postings.",
      alt: "Job opportunities",
    },
    guiaTitulacion: {
      titulo: "GRADUATION GUIDE",
      descripcion:
        "Requirements, modalities, and steps of the graduation process in one place on the programme website.",
      alt: "Graduation guide",
    },
  },
  linksPage: {
    cultura: {
      titulo: "COMPUTING CULTURE",
      descripcion:
        "Links to newsletters, articles, videos, and supporting materials.",
      alt: "Computing culture",
    },
    servicioSocial: {
      titulo: "SOCIAL SERVICE",
      descripcion:
        "Information and access to the university social service portal.",
      alt: "Social service",
    },
    becas: {
      titulo: "SCHOLARSHIPS",
      descripcion: "Access the university scholarships website.",
      alt: "Scholarships",
    },
    bibliotecas: {
      titulo: "LIBRARIES",
      descripcion: "Access the university library websites.",
      alt: "Libraries",
    },
  },
  schedulesView: {
    tituloSemestre: "CLASS SCHEDULES — 2026-II TERM",
    subtituloPlan: "STUDY PLAN 2119",
  },
  calendarView: {
    tituloPrincipal: "ACADEMIC CALENDAR — 2026-II TERM",
    subtitulo: "SEMESTER OVERVIEW",
  },
  extraordinariosView: {
    titulo: "MAKE-UP EXAM SCHEDULES",
    semestre: "2026-II TERM",
    extraLargoHeading: "ICO extended session",
    extraLargoIframeTitle: "PDF: ICO extended make-up exam schedule",
    primeraVueltaHeading: "First-round make-up exams",
    primeraVueltaIframeTitle: "PDF: First-round make-up exam schedule",
  },
  networksView: {
    tituloPrincipal: "COMPUTER NETWORK LAB PRACTICES",
    subtitulo: "LABORATORY PRACTICES",
    panelRedes1: "COMPUTER NETWORKS I — LAB PRACTICES",
    panelRedes2: "COMPUTER NETWORKS II — LAB PRACTICES",
    practica: "PRACTICE {{num}}",
    practica6y7: "PRACTICES 6 & 7",
  },
  tutorsView: {
    titulo: "TUTORS",
    semestre: "2026-II TERM",
  },
  formationView: {
    tituloPrincipal: "COMPLEMENTARY TRAINING HOURS",
    semestre: "2026-II TERM",
    imagenEquivalenciasAlt:
      "Equivalency reference for complementary training hours",
    tituloEquivalencias: "COMPLEMENTARY TRAINING HOUR EQUIVALENCIES",
  },
} as const;

export default en;
