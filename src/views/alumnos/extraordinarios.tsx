import { Typography } from "antd";
import Contenido from "../../components/ContenidoHtml.tsx";

const { Title } = Typography;

// Ejemplo: reemplaza este HTML por tu contenido real (tablas de horarios, etc.), es necesario parsear el HTML para que se pueda renderizar en el iframe.
const html = `

`;

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
            HORARIOS EXTRAORDINARIOS
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
      <Contenido html={html} sandbox="allow-same-origin allow-scripts" />
    </div>
  );
}
