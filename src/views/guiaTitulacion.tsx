import {
  Button,
  Checkbox,
  Collapse,
  Divider,
  Progress,
  Typography,
} from "antd";
import type { TFunction } from "i18next";
import { useMemo, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
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

function renderDiagramaProcesoTitulacion(diagramAlt: string) {
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
        alt={diagramAlt}
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

function construirSecciones(t: TFunction): Seccion[] {
  return [
    {
      id: "requisitos-minimos",
      titulo: t("graduationGuide.sec.requisitos-minimos.title"),
      descripcion: t("graduationGuide.sec.requisitos-minimos.desc"),
      requisitos: [
        {
          id: "requisitos-minimos-r1",
          texto: t("graduationGuide.req.requisitos-minimos-r1"),
        },
        {
          id: "requisitos-minimos-r3",
          texto: t("graduationGuide.req.requisitos-minimos-r3"),
        },
        {
          id: "requisitos-minimos-r4",
          texto: t("graduationGuide.req.requisitos-minimos-r4"),
        },
        {
          id: "requisitos-minimos-r5",
          texto: t("graduationGuide.req.requisitos-minimos-r5"),
        },
        {
          id: "requisitos-minimos-r8",
          texto: t("graduationGuide.req.requisitos-minimos-r8"),
        },
        {
          id: "requisitos-minimos-r9",
          texto: t("graduationGuide.req.requisitos-minimos-r9"),
          opcional: true,
        },
      ],
    },
    {
      id: "modalidad-a",
      titulo: t("graduationGuide.sec.modalidad-a.title"),
      descripcion: t("graduationGuide.sec.modalidad-a.desc"),
      requisitos: [],
      grupos: [
        {
          id: "modalidad-a-g-tesis",
          titulo: t("graduationGuide.grp.modalidad-a-g-tesis.title"),
          descripcion: t("graduationGuide.grp.modalidad-a-g-tesis.desc"),
          requisitos: [
            {
              id: "modalidad-a-r1",
              texto: t("graduationGuide.req.modalidad-a-r1"),
            },
            {
              id: "modalidad-a-r2",
              texto: t("graduationGuide.req.modalidad-a-r2"),
            },
            {
              id: "modalidad-a-r3",
              texto: t("graduationGuide.req.modalidad-a-r3"),
            },
            {
              id: "modalidad-a-r4",
              texto: t("graduationGuide.req.modalidad-a-r4"),
            },
          ],
        },
        {
          id: "modalidad-a-g-investigacion",
          titulo: t("graduationGuide.grp.modalidad-a-g-investigacion.title"),
          descripcion: t(
            "graduationGuide.grp.modalidad-a-g-investigacion.desc",
          ),
          requisitos: [
            {
              id: "modalidad-a-r5",
              texto: t("graduationGuide.req.modalidad-a-r5"),
            },
            {
              id: "modalidad-a-r6",
              texto: t("graduationGuide.req.modalidad-a-r6"),
            },
            {
              id: "modalidad-a-r7",
              texto: t("graduationGuide.req.modalidad-a-r7"),
            },
          ],
        },
      ],
    },
    {
      id: "modalidad-b",
      titulo: t("graduationGuide.sec.modalidad-b.title"),
      descripcion: t("graduationGuide.sec.modalidad-b.desc"),
      requisitos: [],
      grupos: [
        {
          id: "modalidad-b-g-docencia",
          titulo: t("graduationGuide.grp.modalidad-b-g-docencia.title"),
          descripcion: t("graduationGuide.grp.modalidad-b-g-docencia.desc"),
          requisitos: [
            {
              id: "modalidad-b-r1",
              texto: t("graduationGuide.req.modalidad-b-r1"),
            },
            {
              id: "modalidad-b-r2",
              texto: t("graduationGuide.req.modalidad-b-r2"),
            },
          ],
        },
        {
          id: "modalidad-b-g-profesional",
          titulo: t("graduationGuide.grp.modalidad-b-g-profesional.title"),
          descripcion: t("graduationGuide.grp.modalidad-b-g-profesional.desc"),
          requisitos: [
            {
              id: "modalidad-b-r3",
              texto: t("graduationGuide.req.modalidad-b-r3"),
            },
            {
              id: "modalidad-b-r4",
              texto: t("graduationGuide.req.modalidad-b-r4"),
            },
          ],
        },
        {
          id: "modalidad-b-g-ss",
          titulo: t("graduationGuide.grp.modalidad-b-g-ss.title"),
          descripcion: t("graduationGuide.grp.modalidad-b-g-ss.desc"),
          requisitos: [
            {
              id: "modalidad-b-r5",
              texto: t("graduationGuide.req.modalidad-b-r5"),
            },
            {
              id: "modalidad-b-r6",
              texto: t("graduationGuide.req.modalidad-b-r6"),
            },
            {
              id: "modalidad-b-r7",
              texto: t("graduationGuide.req.modalidad-b-r7"),
            },
            {
              id: "modalidad-b-r8",
              texto: t("graduationGuide.req.modalidad-b-r8"),
            },
            {
              id: "modalidad-b-r9",
              texto: t("graduationGuide.req.modalidad-b-r9"),
            },
          ],
        },
        {
          id: "modalidad-b-g-articulo",
          titulo: t("graduationGuide.grp.modalidad-b-g-articulo.title"),
          descripcion: t("graduationGuide.grp.modalidad-b-g-articulo.desc"),
          requisitos: [
            {
              id: "modalidad-b-r10",
              texto: t("graduationGuide.req.modalidad-b-r10"),
            },
            {
              id: "modalidad-b-r11",
              texto: t("graduationGuide.req.modalidad-b-r11"),
            },
          ],
        },
      ],
    },
    {
      id: "modalidad-c",
      titulo: t("graduationGuide.sec.modalidad-c.title"),
      descripcion: t("graduationGuide.sec.modalidad-c.desc"),
      requisitos: [],
      grupos: [
        {
          id: "modalidad-c-g-ceneval",
          titulo: t("graduationGuide.grp.modalidad-c-g-ceneval.title"),
          descripcion: t("graduationGuide.grp.modalidad-c-g-ceneval.desc"),
          requisitos: [
            {
              id: "modalidad-c-r2",
              texto: t("graduationGuide.req.modalidad-c-r2"),
            },
            {
              id: "modalidad-c-r3",
              texto: t("graduationGuide.req.modalidad-c-r3"),
            },
          ],
        },
        {
          id: "modalidad-c-g-alto",
          titulo: t("graduationGuide.grp.modalidad-c-g-alto.title"),
          descripcion: t("graduationGuide.grp.modalidad-c-g-alto.desc"),
          requisitos: [
            {
              id: "modalidad-c-r4",
              texto: t("graduationGuide.req.modalidad-c-r4"),
            },
            {
              id: "modalidad-c-r5",
              texto: t("graduationGuide.req.modalidad-c-r5"),
            },
            {
              id: "modalidad-c-r6",
              texto: t("graduationGuide.req.modalidad-c-r6"),
            },
          ],
        },
        {
          id: "modalidad-c-g-posgrado",
          titulo: t("graduationGuide.grp.modalidad-c-g-posgrado.title"),
          descripcion: t("graduationGuide.grp.modalidad-c-g-posgrado.desc"),
          requisitos: [
            {
              id: "modalidad-c-r7",
              texto: t("graduationGuide.req.modalidad-c-r7"),
            },
            {
              id: "modalidad-c-r8",
              texto: t("graduationGuide.req.modalidad-c-r8"),
            },
          ],
        },
        {
          id: "modalidad-c-g-ampliacion",
          titulo: t("graduationGuide.grp.modalidad-c-g-ampliacion.title"),
          descripcion: t("graduationGuide.grp.modalidad-c-g-ampliacion.desc"),
          requisitos: [
            {
              id: "modalidad-c-r9",
              texto: t("graduationGuide.req.modalidad-c-r9"),
            },
            {
              id: "modalidad-c-r10",
              texto: t("graduationGuide.req.modalidad-c-r10"),
            },
          ],
        },
        {
          id: "modalidad-c-g-diplomado",
          titulo: t("graduationGuide.grp.modalidad-c-g-diplomado.title"),
          descripcion: t("graduationGuide.grp.modalidad-c-g-diplomado.desc"),
          requisitos: [
            {
              id: "modalidad-c-r11",
              texto: t("graduationGuide.req.modalidad-c-r11"),
            },
            {
              id: "modalidad-c-r12",
              texto: t("graduationGuide.req.modalidad-c-r12"),
            },
            {
              id: "modalidad-c-r13",
              texto: t("graduationGuide.req.modalidad-c-r13"),
            },
          ],
        },
      ],
    },
    {
      id: "flujo",
      titulo: t("graduationGuide.sec.flujo.title"),
      descripcion: t("graduationGuide.sec.flujo.desc"),
      requisitos: [],
    },
  ];
}

const IDS_MODALIDAD = new Set(["modalidad-a", "modalidad-b", "modalidad-c"]);

const { Paragraph } = Typography;

export default function GuiaTitulacion() {
  const { t } = useTranslation();
  const SECCIONES = useMemo(() => construirSecciones(t), [t]);
  const SECCIONES_MODALIDAD = useMemo(
    () => SECCIONES.filter((s) => IDS_MODALIDAD.has(s.id)),
    [SECCIONES],
  );
  const SECCION_FLUJO = useMemo(
    () => SECCIONES.find((s) => s.id === "flujo"),
    [SECCIONES],
  );

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
  }, [
    checkedMap,
    modalidadSeleccionadaId,
    alternativaGrupoId,
    SECCIONES,
    SECCIONES_MODALIDAD,
  ]);

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
    [modalidadSeleccionadaId, SECCIONES_MODALIDAD],
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
            {t("graduationGuide.detalles")}
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
                ? t("graduationGuide.diagramaFlujo")
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
            {esFlujoInformativo
              ? renderDiagramaProcesoTitulacion(t("graduationGuide.diagramAlt"))
              : null}
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
        {t("graduationGuide.pickModalidadHint")}
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
          {t("graduationGuide.pickAlternativeTitle")}
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
            {t("graduationGuide.pickAlternativeHint")}
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
        {t("graduationGuide.modalidadNotFound")}
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
        <CabeceraTitulo variante="dorado">
          {t("graduationGuide.guideHeader1")}
        </CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          {t("graduationGuide.guideHeader2")}
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
        {t("graduationGuide.intro")}
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
            {t("graduationGuide.progresoGeneral")}
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
        {t("graduationGuide.modalidadPregunta")}
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
              {seccion.titulo.replace(/^(Modalidad|Modality):\s*/i, "").trim()}
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
