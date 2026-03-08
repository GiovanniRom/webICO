import { Row, Col, Typography } from "antd";
import imagenBibliotecas from "../../assets/images/ligas/biblioteca/digital.png";
import imagenBibliotecas2 from "../../assets/images/ligas/biblioteca/fes.png";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";

const { Title, Paragraph } = Typography;

export default function Bibliotecas() {
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
        <CabeceraTitulo variante="dorado">BIBLIOTECAS</CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }} />
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
        BIBLIOTECA DIGITAL UNAM
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
                alt="Bibliotecas"
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
              BIDI UNAM
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                marginBottom: 16,
                fontFamily: '"poppins-regular", sans-serif',
              }}>
              Accede a la biblioteca digital de la UNAM para consultar libros,
              revistas, documentos y más.
            </Paragraph>
            <Paragraph
              style={{
                textAlign: "justify",
                marginBottom: 16,
                fontFamily: '"poppins-regular", sans-serif',
              }}>
              Te invitamos a conocer los horarios, requisitos de acceso y
              catálogos disponibles. Para más información, acude al módulo de
              biblioteca o consulta el portal de la Dirección General de
              Bibliotecas y Servicios Digitales de Información (DGBSDI) de la
              UNAM.
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
        BIBLIOTECA FES ARAGÓN
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
                alt="Bibliotecas"
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
              Biblioteca "Jesus Reyes Heroles"
            </Title>
            <Paragraph
              style={{
                textAlign: "justify",
                marginBottom: 16,
                fontFamily: '"poppins-regular", sans-serif',
              }}>
              La FES Aragón cuenta con servicios de biblioteca que apoyan la
              docencia, la investigación y el aprendizaje. Los usuarios pueden
              consultar acervo físico y digital, así como acceder a bases de
              datos y recursos en línea.
            </Paragraph>
            <Paragraph
              style={{
                textAlign: "justify",
                marginBottom: 16,
                fontFamily: '"poppins-regular", sans-serif',
              }}>
              Te invitamos a conocer los horarios, requisitos de acceso y
              catálogos disponibles. Para más información, acude al módulo de
              biblioteca o consulta el portal de la Dirección General de
              Bibliotecas y Servicios Digitales de Información (DGBSDI) de la
              UNAM.
            </Paragraph>
          </Col>
        </Row>
      </a>
    </div>
  );
}
