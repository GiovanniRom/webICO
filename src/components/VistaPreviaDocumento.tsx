import { Button } from "antd";
import { ExportOutlined } from "@ant-design/icons";

export interface VistaPreviaDocumentoProps {
  /** URL del documento externo a mostrar en la vista previa. */
  readonly url: string;
  readonly className?: string;
  readonly style?: React.CSSProperties;
  /** Estilos aplicados al iframe (ancho, alto, etc.). */
  readonly iframeStyle?: React.CSSProperties;
  /** Texto del botón. */
  readonly textoBoton?: string;
}

/**
 * Componente reutilizable que muestra la vista previa de un documento externo
 * en un iframe, con botón para abrirlo en nueva pestaña.
 */
export default function VistaPreviaDocumento({
  url,
  className,
  style,
  iframeStyle,
  textoBoton = "Abrir en nueva pestaña",
}: VistaPreviaDocumentoProps) {
  const abrirEnNuevaPestana = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={className}
      style={{ position: "relative", ...style }}
    >
      <Button
        type="primary"
        icon={<ExportOutlined />}
        onClick={abrirEnNuevaPestana}
        style={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 1,
        }}
      >
        {textoBoton}
      </Button>
      <iframe
        title="Vista previa del documento"
        src={url}
        style={{
          width: "100%",
          minHeight: 400,
          border: "none",
          display: "block",
          ...iframeStyle,
        }}
      />
    </div>
  );
}
