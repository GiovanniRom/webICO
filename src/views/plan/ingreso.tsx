import { Collapse, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import imagenIngreso from "../../assets/images/plan/ingresoicon.png";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";

export default function PlanIngreso() {
  const { t } = useTranslation();

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
          {t("ingresoPage.cabeceraLinea1")}
        </CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          {t("ingresoPage.cabeceraLinea2")}
        </CabeceraTitulo>
      </div>

      <Row gutter={[24, 24]} style={{ marginTop: 16 }}>
        <Col xs={24} md={10} lg={9}>
          <div
            style={{
              width: "100%",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={imagenIngreso}
              alt={t("ingresoPage.imagenAlt")}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
        </Col>
        <Col xs={24} md={14} lg={15}>
          <Collapse
            items={[
              {
                key: "1",
                label: (
                  <span style={{ fontFamily: '"poppins-semibold", sans-serif' }}>
                    {t("ingresoPage.queEsLabel")}
                  </span>
                ),
                children: (
                  <p
                    style={{
                      margin: 0,
                      textAlign: "justify",
                      fontFamily: '"poppins-regular", sans-serif',
                    }}
                  >
                    {t("ingresoPage.queEsBody")}
                  </p>
                ),
              },
              {
                key: "2",
                label: (
                  <span style={{ fontFamily: '"poppins-semibold", sans-serif' }}>
                    {t("ingresoPage.conocimientosLabel")}
                  </span>
                ),
                children: (
                  <p
                    style={{
                      margin: 0,
                      textAlign: "justify",
                      fontFamily: '"poppins-regular", sans-serif',
                    }}
                  >
                    {t("ingresoPage.conocimientosBody")}
                  </p>
                ),
              },
              {
                key: "3",
                label: (
                  <span style={{ fontFamily: '"poppins-semibold", sans-serif' }}>
                    {t("ingresoPage.habilidadesLabel")}
                  </span>
                ),
                children: (
                  <p
                    style={{
                      margin: 0,
                      textAlign: "justify",
                      fontFamily: '"poppins-regular", sans-serif',
                    }}
                  >
                    {t("ingresoPage.habilidadesBody")}
                  </p>
                ),
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}
