import Contenido from "../../components/ContenidoHtml.tsx";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";

// Ejemplo: reemplaza este HTML por tu contenido real (tablas de horarios, etc.), es necesario parsear el HTML para que se pueda renderizar en el iframe.
const html = `

`;

export default function AlumnosCalendario() {
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
          CALENDARIO ESCOLAR 2026 II
        </CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          PLAN SEMESTRAL
        </CabeceraTitulo>
      </div>
      <Contenido html={html} sandbox="allow-same-origin allow-scripts" />
    </div>
  );
}
