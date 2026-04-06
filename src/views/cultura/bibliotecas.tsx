import { Row, Col, Typography } from "antd";
import { useTranslation } from "react-i18next";
import imagenBibliotecas from "../../assets/images/ligas/biblioteca/digital.png";
import imagenBibliotecas2 from "../../assets/images/ligas/biblioteca/fes.png";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";

const { Title, Paragraph } = Typography;

export default function Bibliotecas() {
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
      <div style={{ margin: "-10px -10px 0 -10px", marginBottom: "24px" }}>
        <CabeceraTitulo variante="dorado">
          {t("bibliotecasPage.cabeceraLinea1")}
        </CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          {t("bibliotecasPage.cabeceraLinea2")}
        </CabeceraTitulo>
      </div>
      <Title
        level={3}
        style={{
          margin: 0,
          color: "#032047",
          textAlign: "center",
          fontFamily: '"poppins-bold", sans-serif',
        }}
      >
        {t("bibliotecasPage.digital.sectionTitle")}
      </Title>
      <a
        href="https://www.bidi.unam.mx/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginBottom: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          padding: "16px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          width: "80%",
          alignSelf: "center",
          display: "block",
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
        }}
      >
        <Row gutter={[24, 24]}>
          <Col xs={24} md={10} lg={9} style={{ display: "flex" }}>
            <div
              style={{
                width: "100%",
                minHeight: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={imagenBibliotecas}
                alt={t("bibliotecasPage.digital.imageAlt")}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={14} lg={15}>
            <Title
              level={4}
              style={{
                marginTop: 0,
                fontFamily: '"poppins-semibold", sans-serif',
              }}
            >
              {t("bibliotecasPage.digital.cardTitle")}
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                marginBottom: 16,
                fontFamily: '"poppins-regular", sans-serif',
              }}
            >
              {t("bibliotecasPage.digital.paragraph1")}
            </Paragraph>
            <Paragraph
              style={{
                textAlign: "justify",
                marginBottom: 16,
                fontFamily: '"poppins-regular", sans-serif',
              }}
            >
              {t("bibliotecasPage.moreInfo")}
            </Paragraph>
          </Col>
        </Row>
      </a>
      <Title
        level={3}
        style={{
          margin: 0,
          color: "#032047",
          textAlign: "center",
          fontFamily: '"poppins-bold", sans-serif',
        }}
      >
        {t("bibliotecasPage.fes.sectionTitle")}
      </Title>

      <a
        href="https://aragon.unam.mx/comunidad-egresada/content/tramites-y-servicios/biblioteca.php"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginBottom: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          padding: "16px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          width: "80%",
          alignSelf: "center",
          display: "block",
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
        }}
      >
        <Row gutter={[24, 24]}>
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
                src={imagenBibliotecas2}
                alt={t("bibliotecasPage.fes.imageAlt")}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                  alignItems: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
          <Col xs={24} md={14} lg={15}>
            <Title
              level={4}
              style={{
                marginTop: 0,
                fontFamily: '"poppins-semibold", sans-serif',
              }}
            >
              {t("bibliotecasPage.fes.cardTitle")}
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                marginBottom: 16,
                fontFamily: '"poppins-regular", sans-serif',
              }}
            >
              {t("bibliotecasPage.fes.paragraph1")}
            </Paragraph>
            <Paragraph
              style={{
                textAlign: "justify",
                marginBottom: 16,
                fontFamily: '"poppins-regular", sans-serif',
              }}
            >
              {t("bibliotecasPage.moreInfo")}
            </Paragraph>
          </Col>
        </Row>
      </a>
    </div>
  );
}
