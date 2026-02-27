export interface ContenidoHtmlProps {
  /** Código HTML en texto; se renderiza dentro del iframe. */
  readonly html: string;
  /** Atributo sandbox del iframe (opcional). Ej: "allow-same-origin" para mayor aislamiento. */
  readonly sandbox?: string;
  readonly className?: string;
  readonly style?: React.CSSProperties;
  /** Estilos aplicados al iframe (ancho, alto, etc.). */
  readonly iframeStyle?: React.CSSProperties;
}

/**
 * Componente reutilizable que renderiza HTML dentro de un iframe.
 * Mayor estabilidad y aislamiento que renderizar HTML directamente en el DOM.
 */
export default function ContenidoHtml({
  html,
  sandbox = "allow-same-origin",
  className,
  style,
  iframeStyle,
}: ContenidoHtmlProps) {
  return (
    <div className={className} style={style}>
      <iframe
        title="Contenido HTML"
        sandbox={sandbox}
        srcDoc={html}
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
