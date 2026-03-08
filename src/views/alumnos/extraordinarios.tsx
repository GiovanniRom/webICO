import { Typography } from "antd";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";
import pdfExtraLargo from "../../assets/pdf/extra_largo_ico.pdf";
import pdfExtrasPrimera from "../../assets/pdf/extras_primera_vuelta.pdf";

const { Title } = Typography;

const bloquePdfStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: 32,
  padding: 16,
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  borderRadius: 8,
  border: "1px solid #e8e8e8",
  backgroundColor: "#fff",
};

const iframeStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 700,
  border: "none",
  display: "block",
  borderRadius: 4,
};

export default function AlumnosExtraordinarios() {
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
          HORARIOS EXTRAORDINARIOS
        </CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          SEMESTRE 2026 II
        </CabeceraTitulo>
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: 16 }}>
        <div style={bloquePdfStyle}>
          <Title level={4} style={{ marginTop: 0, marginBottom: 16 }}>
            Extra largo ICO
          </Title>
          <iframe
            title="PDF Extra largo ICO"
            src={pdfExtraLargo}
            style={iframeStyle}
          />
        </div>
        <div style={bloquePdfStyle}>
          <Title level={4} style={{ marginTop: 0, marginBottom: 16 }}>
            Extras primera vuelta
          </Title>
          <iframe
            title="PDF Extras primera vuelta"
            src={pdfExtrasPrimera}
            style={iframeStyle}
          />
        </div>
      </div>
    </div>
  );
}
