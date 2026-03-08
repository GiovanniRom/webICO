import { Typography } from "antd";
import VistaPreviaDocumento from "../../components/VistaPreviaDocumento.tsx";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";
import equivalencias from "../../assets/images/formacioncomp.jpg";

const { Title } = Typography;

export default function AlumnosFormacion() {
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
          HORAS DE FORMACIÓN COMPLEMENTARIA
        </CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          SEMESTRE 2026 II
        </CabeceraTitulo>
      </div>
      <img
        src={equivalencias}
        alt="Equivalencias de horas de formación complementaria"
        style={{ width: "80%", height: "auto", alignSelf: "center" }}
      />
      <Title
        level={3}
        style={{
          marginBottom: 16,
          textAlign: "center",
          fontFamily: '"poppins-semibold", sans-serif',
        }}
      >
        EQUIVALENCIAS DE HORAS DE FORMACIÓN COMPLEMENTARIA
      </Title>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 16,
          padding: 16,
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
          borderBottom: "1px solid #032047",
        }}
      >
        <div style={{ flex: 1, minWidth: 280 }}>
          <VistaPreviaDocumento
            url="https://drive.google.com/file/d/1cPxaT5H2dwrRR1REIHxStgF_oBy8cW_E/preview"
            iframeStyle={{ minHeight: 500 }}
          />
        </div>
      </div>
    </div>
  );
}
