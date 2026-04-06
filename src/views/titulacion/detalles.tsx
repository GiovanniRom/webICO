import type { ReactNode } from "react";
import historialAcademicoT11 from "../../assets/images/documentos/historialAcademicoT11.png";
import cartaterminossfes from "../../assets/images/documentos/cartaterminossfes.png";
import constanciaidioma from "../../assets/images/documentos/constanciaidioma.png";
import constanciahoras from "../../assets/images/documentos/constanciahoras.png";
import certificadoestudios from "../../assets/images/documentos/certificadoestudios.png";
import certificadocch from "../../assets/images/documentos/certificadocch.png";

export type DetalleRequisito = {
  id: string;
  descripcion: ReactNode;
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
    imagen: cartaterminossfes,
  },
  {
    id: "requisitos-minimos-r4",
    descripcion:
      "Es el documento oficial que acredita que tienes comprensión de lectura en inglés (nivel B1). Puedes obtenerlo del centro de lenguas FES Aragón.\n\n" +
      "Si la constancia es digital, es necesario imprimirla en papel opalina a color.",
    imagen: constanciaidioma,
  },
  {
    id: "requisitos-minimos-r5",
    descripcion:
      "La constancia de horas de formación complementaria es un documento oficial que acredita que el egresado ha cumplido con el número de horas requeridas en actividades extracurriculares establecidas por el plan de estudios. Este documento lo puedes obtener en la jefatura de carrera.",
    imagen: constanciahoras,
  },
  {
    id: "requisitos-minimos-r8",
    descripcion: (
      <>
        El certificado de estudios se solicita durante la etapa inicial del
        proceso de titulación, de manera paralela al registro de modalidad y a la
        revisión de estudios. Para obtenerlo es necesario llevar tu historial
        académico con estatus de término 11 y 4 fotografías tamaño credencial
        ovaladas (3,5 × 5 cm) a servicios escolares.
        {"\n\n"}
        <a
          href="https://www.dgae.unam.mx/tramites/fotos.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#072340", textDecoration: "underline" }}
        >
          Características de fotos
        </a>
      </>
    ),
    imagen: certificadoestudios,
  },
  {
    id: "requisitos-minimos-r9",
    descripcion:
      "Es el certificado íntegro de estudios del bachillerato emitido por un plantel del Colegio de Ciencias y Humanidades (CCH) de la UNAM. " +
      "Acredita de forma oficial tu trayectoria en el nivel medio superior cuando cursaste el bachillerato en el CCH.\n\n" +
      "Este documento es opcional en la guía: solo aplica si a tu caso le corresponde presentarlo o si servicios escolares o la jefatura de carrera lo solicitan como parte de la revisión de estudios. " +
      "Si no cursaste el bachillerato en el CCH, no necesitas este certificado.\n\n" +
      "Para tramitarlo o solicitar información, acude al plantel CCH donde cursaste el bachillerato o consulta los lineamientos de certificación escolar de la UNAM.",
    imagen: certificadocch,
  },
  {
    id: "modalidad-a-r1",
    descripcion:
      "Se debe contar con la selección de un tutor académico aprobada por el comité académico de la carrera, quien acompaña la elaboración del trabajo escrito.",
  },
  {
    id: "modalidad-a-r2",
    descripcion:
      "Trámite ante la jefatura de carrera para registrar formalmente el proyecto de investigación o trabajo escrito, conforme a formatos, requisitos y calendario que indique la jefatura.",
  },
  {
    id: "modalidad-a-r3",
    descripcion:
      "El tutor debe firmar un documento en el que acredite que el trabajo está terminado y que cumple con los requisitos establecidos; con ello queda formalizada la aprobación del borrador final.",
  },
  {
    id: "modalidad-a-r4",
    descripcion:
      "Presentación y defensa ante un jurado del trabajo desarrollado por el egresado.",
  },
  {
    id: "modalidad-a-r5",
    descripcion:
      "Integración a un proyecto de investigación activo durante al menos un semestre. El proyecto debe estar avalado por una institución académica reconocida; el investigador principal debe emitir una carta de aceptación.\n\n" +
      "Además, se requiere constancia o documento que certifique la participación ante la jefatura o instancia correspondiente.",
  },
  {
    id: "modalidad-a-r6",
    descripcion:
      "Documento en el que se detallan las actividades realizadas en el proyecto y los resultados obtenidos, como evidencia del trabajo desarrollado durante la actividad de investigación.\n\n" +
      "Su elaboración se realiza con el acompañamiento del tutor o asesor académico.",
  },
  {
    id: "modalidad-a-r7",
    descripcion:
      "Exposición ante jurado en la que se presentan y defienden los resultados de la actividad de investigación y el informe elaborado.",
  },
  {
    id: "modalidad-c-r2",
    descripcion:
      "Debes presentar el Examen General para el Egreso de Licenciatura (EGEL) en el área de Ingeniería en Computación y conservar el comprobante aprobatorio emitido por el organismo aplicador (CENEVAL/EGEL) que acredite resultado aprobatorio.",
  },
  {
    id: "modalidad-c-r3",
    descripcion:
      "Contar con la constancia oficial de resultados emitida por CENEVAL (documento que acredita el desempeño en el examen).",
  },
  {
    id: "modalidad-c-r4",
    descripcion:
      "Es necesario contar con un promedio final de 9.5, comprobable mediante historial académico.",
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
      "Es necesario presentar carta de aceptación al programa de posgrado al que se ingresa.\n\n",
  },
  {
    id: "modalidad-c-r8",
    descripcion:
      "El programa de posgrado debe estar autorizado o validado por la institución para esta modalidad.\n\n" +
      "Se requiere comprobante de acreditación satisfactoria del primer semestre en dicho programa.",
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
    descripcion: "La duración mínima del curso deberá ser de 240 horas.",
  },
  {
    id: "modalidad-c-r12",
    descripcion: "La calificación mínima aprobatoria es de 8.",
  },
  {
    id: "modalidad-c-r13",
    descripcion:
      "El curso o diplomado deberá estar avalado por el comité de carrera; de lo contrario no será válido para esta modalidad.",
  },
  {
    id: "modalidad-b-r1",
    descripcion:
      "Trabajo académico orientado a la generación de materiales o productos que contribuyan al proceso de enseñanza-aprendizaje o al desarrollo de actividades de investigación.\n\n" +
      "La creación de dicho material requiere la aprobación del comité académico, supervisión docente y evaluación por especialistas pedagógicos.",
  },
  {
    id: "modalidad-b-r2",
    descripcion:
      "Debes contar con la selección formal de un asesor docente: académico que orienta, supervisa y valida el desarrollo del trabajo de titulación, conforme a la modalidad y los lineamientos de la jefatura.",
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
      "Es el documento oficial que acredita que tienes comprensión de lectura en inglés (nivel B1). Puedes obtenerlo del centro de lenguas FES Aragón.\n\n" +
      "Si la constancia es digital, es necesario imprimirla en papel opalina a color.",
    imagen: constanciaidioma,
  },
  {
    id: "modalidad-b-r7",
    descripcion:
      "La constancia de horas de formación complementaria es un documento oficial que acredita que el egresado ha cumplido con el número de horas requeridas en actividades extracurriculares establecidas por el plan de estudios. Este documento lo puedes obtener en la jefatura de carrera.",
    imagen: constanciahoras,
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
      "Se requiere como evidencia la portada de la revista, datos de indexación e identificadores ISSN/ISBN, carta de aceptación del artículo en revista indexada y copia del artículo mostrando afiliación institucional.",
  },
  {
    id: "modalidad-b-r11",
    descripcion:
      "El egresado debe figurar como autor o coautor de la publicación.\n\n" +
      "En caso de coautoría, se requiere carta del investigador principal que confirme la participación del egresado.",
  },
];
