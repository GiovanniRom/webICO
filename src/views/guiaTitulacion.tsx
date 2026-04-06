import {
  Button,
  Checkbox,
  Collapse,
  Divider,
  Progress,
  Typography,
} from "antd";
import { useMemo, useState, type ReactNode } from "react";
import CabeceraTitulo from "../components/CabeceraTitulo.tsx";
import ModalRequisitoDetalles from "./titulacion/ModalRequisitoDetalles";
import diagramaProcesoTitulacion from "../assets/images/documentos/procesodetitulaciondiagrama.png";

type Requisito = {
  id: string;
  texto: string;
  /** Si es true, no cuenta en los porcentajes de avance (solo informativo). */
  opcional?: boolean;
};

function requisitosQueCuentanProgreso(lista: Requisito[]): Requisito[] {
  return lista.filter((r) => !r.opcional);
}

type GrupoRequisitos = {
  id: string;
  titulo: string;
  /** Texto breve bajo el encabezado del grupo (dentro del panel del colapsable) */
  descripcion?: string;
  requisitos: Requisito[];
};

type Seccion = {
  id: string;
  titulo: string;
  descripcion: string;
  /** Lista plana cuando no hay `grupos` */
  requisitos: Requisito[];
  /** Si existe, los requisitos se muestran agrupados en colapsables anidados */
  grupos?: GrupoRequisitos[];
};

function requisitosDeSeccion(seccion: Seccion): Requisito[] {
  if (seccion.id === "flujo") {
    return [];
  }
  if (seccion.grupos && seccion.grupos.length > 0) {
    return seccion.grupos.flatMap((g) => g.requisitos);
  }
  return seccion.requisitos;
}

/** Requisitos de modalidad que cuentan para el progreso (solo el subgrupo elegido). */
function requisitosModalidadParaProgreso(
  seccion: Seccion | undefined,
  alternativaGrupoId: string | null,
): Requisito[] {
  if (!seccion) return [];
  if (seccion.id === "flujo") {
    return [];
  }
  if (seccion.grupos && seccion.grupos.length > 0) {
    if (!alternativaGrupoId) return [];
    const grupo = seccion.grupos.find((g) => g.id === alternativaGrupoId);
    return grupo?.requisitos ?? [];
  }
  return seccion.requisitos;
}

function renderDiagramaProcesoTitulacion() {
  return (
    <div
      style={{
        marginTop: 8,
        padding: "12px 8px 8px",
        background: "rgba(0, 47, 108, 0.04)",
        borderRadius: 8,
        border: "1px solid rgba(0, 47, 108, 0.12)",
      }}
    >
      <img
        src={diagramaProcesoTitulacion}
        alt="Diagrama del proceso de titulación"
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          display: "block",
          borderRadius: 6,
        }}
      />
    </div>
  );
}

// Placeholder: cuando me compartas la estructura general de tu documento,
// reemplazamos este arreglo por las secciones y requisitos reales.
const SECCIONES: Seccion[] = [
  {
    id: "requisitos-minimos",
    titulo: "Requisitos mínimos para iniciar titulación",
    descripcion:
      "Estos requisitos aplican prácticamente para todas las modalidades. Antes de elegir una modalidad, asegúrate de tener base obligatoria y documentos comunes listos para continuar con el proceso.",
    requisitos: [
      {
        id: "requisitos-minimos-r1",
        texto: "Historial académico con 100% de créditos",
      },
      {
        id: "requisitos-minimos-r3",
        texto: "Carta de liberación de servicio social",
      },
      {
        id: "requisitos-minimos-r4",
        texto: "Constancia de idioma acreditando nivel B1",
      },
      {
        id: "requisitos-minimos-r5",
        texto: "Constancia de horas de formación complementaria (480 hrs)",
      },
      {
        id: "requisitos-minimos-r8",
        texto: "Certificado de estudios",
      },
      {
        id: "requisitos-minimos-r9",
        texto: "Certificado de estudios CCH (opcional)",
        opcional: true,
      },
    ],
  },
  {
    id: "modalidad-a",
    titulo: "Modalidad: Con trabajo escrito con réplica oral",
    descripcion:
      "Modalidad en la que presentas un trabajo escrito y realizas una réplica oral ante jurado. Incluye componentes de tesis/tesina y una actividad de investigación.",
    requisitos: [],
    grupos: [
      {
        id: "modalidad-a-g-tesis",
        titulo: "Tesis / Tesina",
        descripcion:
          "Trabajo escrito de investigación y su defensa oral ante jurado, según las etapas que marca tu plan de estudios.",
        requisitos: [
          {
            id: "modalidad-a-r1",
            texto: "Selección de tutor aprobado por el comité académico",
          },
          {
            id: "modalidad-a-r2",
            texto: "Registro formal de proyecto ante jefatura",
          },
          {
            id: "modalidad-a-r3",
            texto: "Aprobación de borrador final por el tutor",
          },
          {
            id: "modalidad-a-r4",
            texto: "Defensa oral ante jurado",
          },
        ],
      },
      {
        id: "modalidad-a-g-investigacion",
        titulo: "Actividad de investigación",
        descripcion:
          "Participación en un proyecto de investigación y presentación de resultados ante jurado.",
        requisitos: [
          {
            id: "modalidad-a-r5",
            texto: "Participación certificada en proyecto (mín. 1 semestre)",
          },
          {
            id: "modalidad-a-r6",
            texto: "Informe detallado de actividades y resultados",
          },
          {
            id: "modalidad-a-r7",
            texto: "Presentación y defensa de resultados",
          },
        ],
      },
    ],
  },
  {
    id: "modalidad-b",
    titulo: "Modalidad: Con trabajo escrito sin réplica oral",
    descripcion:
      "Modalidad con trabajo escrito, pero sin réplica oral. Se enfoca en experiencia o actividades profesionales/docentes, complementado con servicio social y un artículo académico.",
    requisitos: [],
    grupos: [
      {
        id: "modalidad-b-g-docencia",
        titulo: "Apoyo a la docencia",
        descripcion:
          "Apoyo a la docencia en la facultad: elaboración de material y acompañamiento con asesor docente.",
        requisitos: [
          {
            id: "modalidad-b-r1",
            texto: "Crear material didáctico",
          },
          {
            id: "modalidad-b-r2",
            texto: "Selección de asesor docente",
          },
        ],
      },
      {
        id: "modalidad-b-g-profesional",
        titulo: "Trabajo profesional",
        descripcion:
          "Experiencia laboral acreditable y documentación del trabajo realizado en el ámbito profesional.",
        requisitos: [
          {
            id: "modalidad-b-r3",
            texto: "2 años de experiencia laboral",
          },
          {
            id: "modalidad-b-r4",
            texto: "Informe del trabajo realizado",
          },
        ],
      },
      {
        id: "modalidad-b-g-ss",
        titulo: "Servicio social",
        descripcion:
          "Cumplimiento del servicio social y entrega de la documentación que exige esta modalidad.",
        requisitos: [
          {
            id: "modalidad-b-r5",
            texto: "Haber cumplido 100% créditos",
          },
          {
            id: "modalidad-b-r6",
            texto: "Constancia de acreditación de idioma inglés (nivel B1)",
          },
          {
            id: "modalidad-b-r7",
            texto: "Horas complementarias",
          },
          {
            id: "modalidad-b-r8",
            texto: "Informe de actividades",
          },
          {
            id: "modalidad-b-r9",
            texto: "Carta de término y liberación de servicio social",
          },
        ],
      },
      {
        id: "modalidad-b-g-articulo",
        titulo: "Artículo académico",
        descripcion:
          "Publicación en revista indexada y constancia de autoría o coautoría del artículo.",
        requisitos: [
          {
            id: "modalidad-b-r10",
            texto: "Publicación en revista indexada",
          },
          {
            id: "modalidad-b-r11",
            texto: "Autor o coautor",
          },
        ],
      },
    ],
  },
  {
    id: "modalidad-c",
    titulo: "Modalidad: Sin trabajo escrito",
    descripcion:
      "Modalidad donde no se desarrolla un trabajo escrito. Se cubren requisitos base y se realiza un examen general (CENEVAL/EGEL) y condiciones de desempeño, con posibilidad de posgrado, ampliación y/o diplomado.",
    requisitos: [],
    grupos: [
      {
        id: "modalidad-c-g-ceneval",
        titulo: "Examen general (CENEVAL)",
        descripcion:
          "Requisitos del examen general de egreso (EGEL/CENEVAL) y testimonios de desempeño.",
        requisitos: [
          {
            id: "modalidad-c-r2",
            texto: "Comprobante aprobatorio emitido por EGEL",
          },
          {
            id: "modalidad-c-r3",
            texto: "Constancia oficial de resultados",
          },
        ],
      },
      {
        id: "modalidad-c-g-alto",
        titulo: "Alto nivel académico",
        descripcion:
          "Criterios de excelencia académica: promedio, historial sin reprobadas y conclusión en tiempo curricular.",
        requisitos: [
          {
            id: "modalidad-c-r4",
            texto: "Promedio ≥ 9.5",
          },
          {
            id: "modalidad-c-r5",
            texto: "Sin materias reprobadas",
          },
          {
            id: "modalidad-c-r6",
            texto: "Terminar en tiempo curricular",
          },
        ],
      },
      {
        id: "modalidad-c-g-posgrado",
        titulo: "Estudios de posgrado",
        descripcion:
          "Ingreso y permanencia en programas de posgrado reconocidos y autorizados.",
        requisitos: [
          {
            id: "modalidad-c-r7",
            texto: "Ingreso a posgrado válido",
          },
          {
            id: "modalidad-c-r8",
            texto:
              "Comprobante de acreditación satisfactoria del primer semestre",
          },
        ],
      },
      {
        id: "modalidad-c-g-ampliacion",
        titulo: "Ampliación y profundización",
        descripcion:
          "Cursos adicionales para ampliar y profundizar competencias, con promedio mínimo requerido. " +
          "Se cuenta con un período máximo de un año, contado a partir de haber terminado el 100% de los créditos, para inscribir esta modalidad de titulación.",
        requisitos: [
          {
            id: "modalidad-c-r9",
            texto: "Cursar materias extra (~10% créditos)",
          },
          {
            id: "modalidad-c-r10",
            texto: "Promedio mínimo 9",
          },
        ],
      },
      {
        id: "modalidad-c-g-diplomado",
        titulo: "Diplomado",
        descripcion:
          "Diplomado con carga horaria, calificación mínima y validación por comité correspondiente.",
        requisitos: [
          { id: "modalidad-c-r11", texto: "Mínimo 240 horas" },
          { id: "modalidad-c-r12", texto: "Promedio mínimo 8" },
          {
            id: "modalidad-c-r13",
            texto: "Debe estar aprobado por comité",
          },
        ],
      },
    ],
  },
  {
    id: "flujo",
    titulo: "Flujo completo del proceso de titulación",
    descripcion:
      "Flujo en etapas: preparación, pre-registro, procesos en paralelo, desarrollo según modalidad, validación ante instancias correspondientes y cierre final del trámite.",
    requisitos: [],
  },
];

const IDS_MODALIDAD = new Set(["modalidad-a", "modalidad-b", "modalidad-c"]);

const SECCIONES_MODALIDAD = SECCIONES.filter((s) => IDS_MODALIDAD.has(s.id));
const SECCION_FLUJO = SECCIONES.find((s) => s.id === "flujo");

const { Paragraph } = Typography;

export default function GuiaTitulacion() {
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});
  const [modalidadSeleccionadaId, setModalidadSeleccionadaId] = useState<
    string | null
  >(null);
  const [alternativaGrupoId, setAlternativaGrupoId] = useState<string | null>(
    null,
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [requisitoSeleccionado, setRequisitoSeleccionado] =
    useState<Requisito | null>(null);

  const porcentajeGeneral = useMemo(() => {
    const requisitosMinimos = requisitosQueCuentanProgreso(
      SECCIONES[0]?.requisitos ?? [],
    );
    const seccionModalidad =
      modalidadSeleccionadaId &&
      SECCIONES_MODALIDAD.find((s) => s.id === modalidadSeleccionadaId);
    const requisitosModalidad = requisitosQueCuentanProgreso(
      requisitosModalidadParaProgreso(
        seccionModalidad || undefined,
        alternativaGrupoId,
      ),
    );

    const todos = [...requisitosMinimos, ...requisitosModalidad];
    const total = todos.length;
    if (total === 0) return 0;
    const completados = todos.reduce(
      (acc, r) => acc + (checkedMap[r.id] ? 1 : 0),
      0,
    );
    return Math.round((completados / total) * 100);
  }, [checkedMap, modalidadSeleccionadaId, alternativaGrupoId]);

  const toggleRequisito = (id: string, value: boolean) => {
    setCheckedMap((prev) => ({ ...prev, [id]: value }));
  };

  const abrirModalDetalles = (requisito: Requisito) => {
    setRequisitoSeleccionado(requisito);
    setModalOpen(true);
  };

  const seccionRequisitosMinimos = SECCIONES[0];

  const cambiarModalidadSeleccionada = (id: string, marcado: boolean) => {
    if (marcado) {
      setModalidadSeleccionadaId(id);
      setAlternativaGrupoId(null);
      return;
    }
    setModalidadSeleccionadaId((prev) => (prev === id ? null : prev));
    setAlternativaGrupoId(null);
  };

  const cambiarAlternativaGrupo = (grupoId: string, marcado: boolean) => {
    setAlternativaGrupoId((prev) => {
      if (marcado) return grupoId;
      return prev === grupoId ? null : prev;
    });
  };

  const seccionModalidadActiva = useMemo(
    () =>
      modalidadSeleccionadaId
        ? SECCIONES_MODALIDAD.find((s) => s.id === modalidadSeleccionadaId)
        : undefined,
    [modalidadSeleccionadaId],
  );

  const grupoAlternativaSeleccionado = useMemo(() => {
    const sec = seccionModalidadActiva;
    if (!sec?.grupos?.length || alternativaGrupoId == null) return null;
    return sec.grupos.find((g) => g.id === alternativaGrupoId) ?? null;
  }, [seccionModalidadActiva, alternativaGrupoId]);

  const progresoGrupoAlternativa = useMemo(() => {
    const g = grupoAlternativaSeleccionado;
    if (!g) return { total: 0, completados: 0, porcentaje: 0 };
    const reqs = requisitosQueCuentanProgreso(g.requisitos);
    const total = reqs.length;
    const completados = reqs.reduce(
      (acc, r) => acc + (checkedMap[r.id] ? 1 : 0),
      0,
    );
    const porcentaje =
      total === 0 ? 0 : Math.round((completados / total) * 100);
    return { total, completados, porcentaje };
  }, [grupoAlternativaSeleccionado, checkedMap]);

  const renderRequisitosLista = (lista: Requisito[]) =>
    lista.map((req, index) => (
      <div key={req.id}>
        {index > 0 ? (
          <Divider
            dashed
            style={{
              margin: "10px 0 14px",
              borderColor: "rgba(0, 47, 108, 0.18)",
            }}
          />
        ) : null}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            paddingLeft: 4,
          }}
        >
          <Checkbox
            checked={!!checkedMap[req.id]}
            onChange={(e) => toggleRequisito(req.id, e.target.checked)}
            style={{
              fontFamily: '"poppins-regular", sans-serif',
            }}
          >
            <span style={{ fontFamily: '"poppins-regular", sans-serif' }}>
              {req.texto}
            </span>
          </Checkbox>
          <Button
            type="link"
            onClick={() => abrirModalDetalles(req)}
            style={{
              padding: 0,
              alignSelf: "flex-start",
              fontFamily: '"poppins-regular", sans-serif',
              color: "#072340",
            }}
          >
            Detalles
          </Button>
        </div>
      </div>
    ));

  const construirItemsCollapse = (secciones: Seccion[]) =>
    secciones.map((seccion) => {
      const listaReq = requisitosDeSeccion(seccion);
      const listaProgreso = requisitosQueCuentanProgreso(listaReq);
      const total = listaProgreso.length;
      const completados = listaProgreso.reduce(
        (acc, r) => acc + (checkedMap[r.id] ? 1 : 0),
        0,
      );
      const porcentaje =
        total === 0 ? 0 : Math.round((completados / total) * 100);
      const esFlujoInformativo = seccion.id === "flujo";

      return {
        key: seccion.id,
        label: (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: '"poppins-semibold", sans-serif',
                color: "#001529",
              }}
            >
              {seccion.titulo}
            </span>
            <span
              style={{
                fontFamily: '"poppins-semibold", sans-serif',
                color: "#ba9a3a",
                whiteSpace: "nowrap",
              }}
            >
              {esFlujoInformativo
                ? "Diagrama de flujo"
                : `${porcentaje}% (${completados}/${total})`}
            </span>
          </div>
        ),
        children: (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <Paragraph
              style={{
                margin: 0,
                fontFamily: '"poppins-regular", sans-serif',
                textAlign: "justify",
              }}
            >
              {seccion.descripcion}
            </Paragraph>
            {esFlujoInformativo ? renderDiagramaProcesoTitulacion() : null}
            {!esFlujoInformativo &&
            seccion.grupos &&
            seccion.grupos.length > 0 ? (
              <Collapse
                bordered={false}
                defaultActiveKey={seccion.grupos.map((g) => g.id)}
                style={{ marginTop: 4 }}
                items={seccion.grupos.map((grupo) => {
                  const reqsG = requisitosQueCuentanProgreso(grupo.requisitos);
                  const totalG = reqsG.length;
                  const completadosG = reqsG.reduce(
                    (acc, r) => acc + (checkedMap[r.id] ? 1 : 0),
                    0,
                  );
                  const porcentajeG =
                    totalG === 0
                      ? 0
                      : Math.round((completadosG / totalG) * 100);
                  return {
                    key: grupo.id,
                    label: (
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 12,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: '"poppins-semibold", sans-serif',
                            color: "#001529",
                          }}
                        >
                          {grupo.titulo}
                        </span>
                        <span
                          style={{
                            fontFamily: '"poppins-semibold", sans-serif',
                            color: "#ba9a3a",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {porcentajeG}% ({completadosG}/{totalG})
                        </span>
                      </div>
                    ),
                    children: (
                      <div style={{ paddingBottom: 4 }}>
                        {grupo.descripcion?.trim() ? (
                          <Paragraph
                            style={{
                              margin: "0 0 12px",
                              fontFamily: '"poppins-regular", sans-serif',
                              textAlign: "justify",
                              color: "rgba(0, 21, 41, 0.88)",
                              fontSize: 13,
                              lineHeight: 1.45,
                            }}
                          >
                            {grupo.descripcion}
                          </Paragraph>
                        ) : null}
                        {renderRequisitosLista(grupo.requisitos)}
                      </div>
                    ),
                  };
                })}
              />
            ) : null}
            {!esFlujoInformativo &&
            (!seccion.grupos || seccion.grupos.length === 0)
              ? renderRequisitosLista(seccion.requisitos)
              : null}
          </div>
        ),
      };
    });

  let contenidoModalidadSeleccionada: ReactNode;
  if (!modalidadSeleccionadaId) {
    contenidoModalidadSeleccionada = (
      <Paragraph
        style={{
          margin: 0,
          fontFamily: '"poppins-regular", sans-serif',
          color: "rgba(0, 21, 41, 0.55)",
          fontSize: 13,
          textAlign: "center",
        }}
      >
        Marca una opción para ver los requisitos de esa modalidad.
      </Paragraph>
    );
  } else if (
    seccionModalidadActiva?.grupos &&
    seccionModalidadActiva.grupos.length > 0
  ) {
    const sec = seccionModalidadActiva;
    contenidoModalidadSeleccionada = (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <Paragraph
          style={{
            margin: 0,
            fontFamily: '"poppins-regular", sans-serif',
            textAlign: "justify",
          }}
        >
          {sec.descripcion}
        </Paragraph>
        <Paragraph
          style={{
            margin: 0,
            fontFamily: '"poppins-semibold", sans-serif',
            color: "#001529",
            textAlign: "center",
          }}
        >
          ¿Qué alternativa de esta modalidad vas a seguir?
        </Paragraph>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-start",
            paddingLeft: 4,
          }}
        >
          {(sec.grupos ?? []).map((grupo) => (
            <Checkbox
              key={grupo.id}
              checked={alternativaGrupoId === grupo.id}
              onChange={(e) =>
                cambiarAlternativaGrupo(grupo.id, e.target.checked)
              }
              style={{ fontFamily: '"poppins-regular", sans-serif' }}
            >
              <span style={{ fontFamily: '"poppins-regular", sans-serif' }}>
                {grupo.titulo}
              </span>
            </Checkbox>
          ))}
        </div>
        {grupoAlternativaSeleccionado ? (
          <div
            style={{
              border: "1px solid rgba(0, 47, 108, 0.15)",
              borderRadius: 8,
              padding: "12px 14px",
              background: "rgba(0, 47, 108, 0.03)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                marginBottom: grupoAlternativaSeleccionado.descripcion?.trim()
                  ? 10
                  : 0,
              }}
            >
              <span
                style={{
                  fontFamily: '"poppins-semibold", sans-serif',
                  color: "#001529",
                }}
              >
                {grupoAlternativaSeleccionado.titulo}
              </span>
              <span
                style={{
                  fontFamily: '"poppins-semibold", sans-serif',
                  color: "#ba9a3a",
                  whiteSpace: "nowrap",
                  fontSize: 13,
                }}
              >
                {progresoGrupoAlternativa.porcentaje}% (
                {progresoGrupoAlternativa.completados}/
                {progresoGrupoAlternativa.total})
              </span>
            </div>
            {grupoAlternativaSeleccionado.descripcion?.trim() ? (
              <Paragraph
                style={{
                  margin: "0 0 12px",
                  fontFamily: '"poppins-regular", sans-serif',
                  textAlign: "justify",
                  color: "rgba(0, 21, 41, 0.88)",
                  fontSize: 13,
                  lineHeight: 1.45,
                }}
              >
                {grupoAlternativaSeleccionado.descripcion}
              </Paragraph>
            ) : null}
            {renderRequisitosLista(grupoAlternativaSeleccionado.requisitos)}
          </div>
        ) : (
          <Paragraph
            style={{
              margin: 0,
              fontFamily: '"poppins-regular", sans-serif',
              color: "rgba(0, 21, 41, 0.55)",
              fontSize: 13,
              textAlign: "center",
            }}
          >
            Marca una alternativa para ver sus requisitos. El progreso general
            solo considerará los de la alternativa elegida.
          </Paragraph>
        )}
      </div>
    );
  } else if (seccionModalidadActiva) {
    contenidoModalidadSeleccionada = (
      <Collapse
        key={modalidadSeleccionadaId}
        bordered={false}
        defaultActiveKey={[seccionModalidadActiva.id]}
        items={construirItemsCollapse([seccionModalidadActiva])}
      />
    );
  } else {
    contenidoModalidadSeleccionada = (
      <Paragraph
        style={{
          margin: 0,
          fontFamily: '"poppins-regular", sans-serif',
          color: "rgba(0, 21, 41, 0.55)",
          fontSize: 13,
          textAlign: "center",
        }}
      >
        No se encontró la modalidad seleccionada.
      </Paragraph>
    );
  }

  return (
    <div
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ margin: "-10px -10px 0 -10px" }}>
        <CabeceraTitulo variante="dorado">GUÍA DE</CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          TITULACIÓN
        </CabeceraTitulo>
      </div>

      <Paragraph
        style={{
          margin: "0 0 10px 0",
          fontFamily: '"poppins-regular", sans-serif',
          textAlign: "justify",
          color: "rgba(0, 0, 0, 0.75)",
          width: "80%",
          alignSelf: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Esta sección muestra los requisitos para titulación que debes cumplir
        para obtener tu título. Si tienes alguna duda, revisa la sección de
        detalles de cada requisito para obtener más información.
      </Paragraph>

      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(3, 32, 71, 0.98)",
          borderBottom: "1px solid rgba(186, 154, 58, 0.35)",
          padding: "12px 14px",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 12,
            marginBottom: 6,
          }}
        >
          <div
            style={{
              color: "#ba9a3a",
              fontFamily: '"poppins-semibold", sans-serif',
            }}
          >
            Progreso general
          </div>
          <div
            style={{
              color: "#fff",
              fontFamily: '"poppins-regular", sans-serif',
              fontSize: 13,
              whiteSpace: "nowrap",
            }}
          >
            {porcentajeGeneral}%
          </div>
        </div>
        <Progress
          percent={porcentajeGeneral}
          showInfo={false}
          strokeColor="#ba9a3a"
        />
      </div>

      <Collapse
        bordered={false}
        defaultActiveKey={
          seccionRequisitosMinimos ? [seccionRequisitosMinimos.id] : []
        }
        items={construirItemsCollapse(
          seccionRequisitosMinimos ? [seccionRequisitosMinimos] : [],
        )}
      />

      <Paragraph
        style={{
          margin: "4px 0 0",
          fontFamily: '"poppins-semibold", sans-serif',
          color: "#001529",
          textAlign: "center",
        }}
      >
        ¿Qué modalidad de titulación vas a desarrollar?
      </Paragraph>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          paddingLeft: 4,
        }}
      >
        {SECCIONES_MODALIDAD.map((seccion) => (
          <Checkbox
            key={seccion.id}
            checked={modalidadSeleccionadaId === seccion.id}
            onChange={(e) =>
              cambiarModalidadSeleccionada(seccion.id, e.target.checked)
            }
            style={{ fontFamily: '"poppins-regular", sans-serif' }}
          >
            <span style={{ fontFamily: '"poppins-regular", sans-serif' }}>
              {seccion.titulo.replace(/^Modalidad:\s*/, "")}
            </span>
          </Checkbox>
        ))}
      </div>

      {contenidoModalidadSeleccionada}

      {SECCION_FLUJO ? (
        <Collapse
          bordered={false}
          items={construirItemsCollapse([SECCION_FLUJO])}
        />
      ) : null}

      <ModalRequisitoDetalles
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        requisitoId={requisitoSeleccionado?.id ?? null}
        requisitoTexto={requisitoSeleccionado?.texto ?? null}
      />
    </div>
  );
}
