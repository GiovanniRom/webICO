import { Collapse, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import imagenEgreso from "../../assets/images/plan/egresoicon.png";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";

export default function PlanEgreso() {
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
          {t("egresoPage.cabeceraLinea1")}
        </CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          {t("egresoPage.cabeceraLinea2")}
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
              src={imagenEgreso}
              alt={t("egresoPage.imagenAlt")}
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
                    {t("egresoPage.queEsLabel")}
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
                    {t("egresoPage.queEsBody")}
                  </p>
                ),
              },
              {
                key: "2",
                label: (
                  <span style={{ fontFamily: '"poppins-semibold", sans-serif' }}>
                    {t("egresoPage.competenciasLabel")}
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
                    {t("egresoPage.competenciasBody")}
                  </p>
                ),
              },
              {
                key: "3",
                label: (
                  <span style={{ fontFamily: '"poppins-semibold", sans-serif' }}>
                    {t("egresoPage.ambitosLabel")}
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
                    {t("egresoPage.ambitosBody")}
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
