import { Typography } from "antd";
import VistaPreviaDocumento from "../../components/VistaPreviaDocumento.tsx";
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
        <div
          style={{
            padding: "16px 24px 24px",
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#ba9a3a",
            color: "#032047",
            clipPath:
              "polygon(0 0, 50% 0, 100% calc(50% - 60px), calc(100% - 96px) 100%, 24px 100%, 0 calc(100% - 24px))",
          }}
        >
          <Title
            level={2}
            style={{ margin: 0, color: "#032047", textAlign: "center" }}
          >
            HORAS DE FORMACIÓN COMPLEMENTARIA
          </Title>
        </div>
        <div
          style={{
            padding: "16px 24px 24px",
            width: "95%",
            boxSizing: "border-box",
            backgroundColor: "#032047",
            color: "#ba9a3a",
            clipPath:
              "polygon(0 0, 50% 0, 100% calc(50% - 60px), calc(100% - 96px) 100%, 24px 100%, 0 calc(100% - 24px))",
          }}
        >
          <Title
            level={2}
            style={{ margin: 0, color: "#ba9a3a", textAlign: "center" }}
          >
            SEMESTRE 2026 II
          </Title>
        </div>
      </div>
      <img
        src={equivalencias}
        alt="Equivalencias de horas de formación complementaria"
        style={{ width: "80%", height: "auto", alignSelf: "center" }}
      />
      <Title level={3} style={{ marginBottom: 16, textAlign: "center" }}>
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
