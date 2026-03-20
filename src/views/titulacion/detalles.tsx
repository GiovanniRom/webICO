import historialAcademicoT11 from "../../assets/images/documentos/historialAcademicoT11.png";

export type DetalleRequisito = {
  id: string;
  descripcion: string;
  imagen?: string;
};

export const DETALLES_REQUISITOS: DetalleRequisito[] = [
  {
    id: "requisitos-minimos-r1",
    descripcion:
      "Para obtenerlo, revisa tu historial/avance en la pagina 'https://www.dgae-siae.unam.mx/www_gate.php' y verifica que aparezca la leyenda de término 11. " +
      "Posteriormente, el documento correspondiente se usa como soporte para continuar con tu proceso de titulación.",
    imagen: historialAcademicoT11,
  },
  {
    id: "requisitos-minimos-r3",
    descripcion:
      "Es el documento oficial que dice que tu servicio social está validado y reconocido por la UNAM. " +
      "Para obtenerlo es necesario que primero registres donde quieres realizar tu servicio social en el sistema de registro de servicio social de la UNAM 'https://siassypp.unam.mx/' " +
      "o te acerques a la jefatura de carrera para que te asesoren sobre vacantes de servicio social internas. " +
      "Recuerda que como requisito indispensable debes contar con al menos 70% de créditos totales cursados, no olvides llevar tu historial académico actualizado.",
  },
  {
    id: "requisitos-minimos-r4",
    descripcion:
      "Es el documento oficial que acredita que tienes comprensión de lectura en inglés. Puedes obtenerlo del centro de lenguas FES Aragón.",
  },
  {
    id: "requisitos-minimos-r5",
    descripcion:
      "La constancia de horas de formación complementaria es un documento oficial que acredita que el egresado ha cumplido con el número de horas requeridas en actividades extracurriculares establecidas por el plan de estudios. Este documento lo puedes obtener en la jefatura de carrera.",
  },
  {
    id: "requisitos-minimos-r8",
    descripcion:
      "El certificado de estudios se solicita durante la etapa inicial del proceso de titulación, de manera paralela al registro de modalidad y a la revisión de estudios. " +
      "Para obtenerlo es necesario llevar tu historial académico con estatus de término 11 y dos fotografías a servicios escolares.",
  },
  {
    id: "modalidad-a-r1",
    descripcion:
      "Se debe seleccionar un asesor académico para el acompañamiento en la elaboración del trabajo escrito.",
  },
  {
    id: "modalidad-a-r2",
    descripcion:
      "Trabajo de investigación original sobre un tema específico de la disciplina, el cual debe ser desarrollado bajo la supervisión de un asesor y presentado ante un jurado.",
  },
  {
    id: "modalidad-a-r3",
    descripcion:
      "Es la aprobación de parte de los revisores del trabajo desarrollado por el egresado.",
  },
  {
    id: "modalidad-a-r4",
    descripcion:
      "Presentación y defensa ante un jurado del trabajo desarrollado por el egresado.",
  },
  {
    id: "modalidad-a-r5",
    descripcion:
      "Integración a proyecto de investigación activo durante el período mínimo de 1 semestre.",
  },
  {
    id: "modalidad-a-r6",
    descripcion:
      "Elaborar un trabajo académico derivado de la investigación.\n\n" +
      "El desarrollo del trabajo se realiza acompañado de un asesor académico.",
  },
  {
    id: "modalidad-a-r7",
    descripcion:
      "Presentación y defensa ante un jurado del trabajo desarrollado por el egresado.",
  },
  {
    id: "modalidad-c-r2",
    descripcion:
      "Presentar el Examen General para el Egreso de Licenciatura (EGEL) en el área de Ingeniería en Computación y obtener resultado aprobatorio.",
  },
  {
    id: "modalidad-c-r3",
    descripcion:
      "Contar con el testimonio de desempeño emitido por CENEVAL.",
  },
  {
    id: "modalidad-c-r4",
    descripcion:
      "Es necesario contar con un promedio final de 9.5.",
  },
  {
    id: "modalidad-c-r5",
    descripcion:
      "Es necesario haber cursado todas las materias de forma ordinaria, sin haber reprobado ninguna o presentado extraordinarios.",
  },
  {
    id: "modalidad-c-r6",
    descripcion:
      "Es requisito indispensable haber cursado las materias en el tiempo curricular establecido.",
  },
  {
    id: "modalidad-c-r7",
    descripcion:
      "El posgrado debe estar avalado por la institución (no cualquier programa es válido).\n\n" +
      "Cumplir con los requisitos de ingreso establecidos por el programa de posgrado.\n\n" +
      "Acreditar el avance requerido dentro del posgrado conforme a los lineamientos.",
  },
  {
    id: "modalidad-c-r8",
    descripcion:
      "Validar si el programa de posgrado al que se desea ingresar se encuentra validado por la institución para dicha modalidad.",
  },
  {
    id: "modalidad-c-r9",
    descripcion:
      "Inscribirse a asignaturas adicionales equivalentes a aproximadamente el 10% de los créditos totales del plan de estudios y cursar dichas asignaturas en un período adicional de semestre. Las asignaturas deben ser diferentes a las ya cursadas.",
  },
  {
    id: "modalidad-c-r10",
    descripcion:
      "Todas las asignaturas extras deben acreditarse con una calificación mínima de 9.",
  },
  {
    id: "modalidad-c-r11",
    descripcion:
      "La duración mínima del curso deberá ser de 240 horas.",
  },
  {
    id: "modalidad-c-r12",
    descripcion:
      "La calificación mínima aprobatoria es de 8.",
  },
  {
    id: "modalidad-c-r13",
    descripcion:
      "El curso o diplomado deberá estar avalado por el comité de carrera; de lo contrario no será válido para esta modalidad.",
  },
  {
    id: "modalidad-b-r1",
    descripcion:
      "Trabajo académico orientado a la generación de materiales o productos que contribuyan al proceso de enseñanza-aprendizaje o al desarrollo de actividades de investigación.",
  },
  {
    id: "modalidad-b-r2",
    descripcion:
      "Académico responsable de orientar, supervisar y validar el desarrollo del trabajo de titulación del egresado, conforme a la modalidad seleccionada.",
  },
  {
    id: "modalidad-b-r3",
    descripcion:
      "Comprobante de trabajo continuo por un plazo de dos años; pueden ser múltiples períodos laborales, siempre y cuando no se superen los 15 días entre un período y otro.\n\n" +
      "El documento debe estar membretado por el empleador, tener firma autógrafa, especificar el período laboral y las actividades realizadas.",
  },
  {
    id: "modalidad-b-r4",
    descripcion:
      "Consiste en la elaboración de un informe técnico-académico en el que el egresado documenta su experiencia laboral en un área afín a su formación, demostrando la aplicación de conocimientos, habilidades y resolución de problemas reales.\n\n" +
      "Este documento se elabora acompañado de un asesor docente que valida el trabajo.",
  },
  {
    id: "modalidad-b-r5",
    descripcion:
      "Obtención del 100% de créditos totales en historial académico con estatus de término 11.",
  },
  {
    id: "modalidad-b-r6",
    descripcion:
      "Es el documento oficial que acredita que tienes comprensión de lectura en inglés. Puedes obtenerlo del centro de lenguas FES Aragón.",
  },
  {
    id: "modalidad-b-r7",
    descripcion:
      "La constancia de horas de formación complementaria es un documento oficial que acredita que el egresado ha cumplido con el número de horas requeridas en actividades extracurriculares establecidas por el plan de estudios. Este documento lo puedes obtener en la jefatura de carrera.",
  },
  {
    id: "modalidad-b-r8",
    descripcion:
      "Informe académico en el que el egresado documenta las actividades realizadas durante su servicio social, destacando la aplicación de conocimientos y el impacto del trabajo desarrollado.\n\n" +
      "El desarrollo de este documento se realiza acompañado de un asesor académico.",
  },
  {
    id: "modalidad-b-r9",
    descripcion:
      "Este documento no es necesario para registrar la modalidad de titulación; sin embargo, es necesario para concluir el trámite.",
  },
  {
    id: "modalidad-b-r10",
    descripcion:
      "Participar en un proyecto de investigación avalado por un académico.\n\n" +
      "Se requiere como evidencia la portada de la revista, datos de indexación e identificadores ISSN/ISBN.",
  },
  {
    id: "modalidad-b-r11",
    descripcion:
      "El egresado debe figurar como autor o coautor de la publicación.",
  },
];
