import { Card, Typography } from "antd";
import { cloneElement, isValidElement } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const { Text } = Typography;

const BORDER_COLOR = "#ba9a3a";
const ELEVATION_5 =
  "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)";

export interface TarjetaInformacionProps {
  readonly icono: ReactNode;
  readonly titulo: string;
  /** Descripción con texto justificado */
  readonly descripcion?: string;
  /** Descripción en dos columnas [columnaIzq, columnaDer]. Si se usa, ignora descripcion. */
  readonly descripcionColumnas?: readonly [string, string];
  /** Ruta a la que navegar al hacer clic (opcional) */
  readonly to?: string;
  readonly className?: string;
  readonly style?: React.CSSProperties;
}

const textoDescripcionStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.65,
  fontWeight: 400,
  textAlign: "justify",
  whiteSpace: "pre-line",
  wordBreak: "break-word",
};

export default function TarjetaInformacion({
  icono,
  titulo,
  descripcion,
  descripcionColumnas,
  to,
  className,
  style,
}: TarjetaInformacionProps) {
  const estiloEscalado: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };
  const iconoEscalable = isValidElement(icono)
    ? cloneElement(
        icono as React.ReactElement<{ style?: React.CSSProperties }>,
        {
          style: {
            ...(typeof (icono.props as { style?: React.CSSProperties })
              .style === "object"
              ? (icono.props as { style?: React.CSSProperties }).style
              : {}),
            ...estiloEscalado,
          },
        },
      )
    : icono;

  const cardContent = (
    <Card
      className={`tarjeta-informacion ${className ?? ""}`.trim()}
      style={{
        border: "none",
        borderRadius: 8,
        boxShadow: ELEVATION_5,
        ...style,
      }}
      styles={{
        body: {
          padding: "24px 24px 0 24px",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <div
        className="icono-tarjeta-informacion"
        style={{
          maxWidth: "50%",
          maxHeight: "100%",
          width: "90%",
          aspectRatio: "1",
          marginBottom: 16,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}
      >
        {iconoEscalable}
      </div>
      <Text
        style={{
          display: "block",
          fontSize: 21,
          fontWeight: 700,
          textAlign: "center",
          marginBottom: descripcion || descripcionColumnas ? 12 : 0,
        }}
      >
        {titulo}
      </Text>
      {descripcionColumnas && (
        <div
          className="tarjeta-informacion-dos-columnas"
          style={{ marginBottom: 16 }}
        >
          <Text style={textoDescripcionStyle}>{descripcionColumnas[0]}</Text>
          <Text style={textoDescripcionStyle}>{descripcionColumnas[1]}</Text>
        </div>
      )}
      {!descripcionColumnas && descripcion && (
        <Text style={{ ...textoDescripcionStyle, marginBottom: 16 }}>
          {descripcion}
        </Text>
      )}
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          height: 6,
          background: `linear-gradient(to right, ${BORDER_COLOR} 60%, rgba(186, 154, 58, 0.25) 100%)`,
        }}
      />
    </Card>
  );

  if (to) {
    return (
      <Link
        to={to}
        style={{
          display: "block",
          textDecoration: "none",
          color: "inherit",
          cursor: "pointer",
        }}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
