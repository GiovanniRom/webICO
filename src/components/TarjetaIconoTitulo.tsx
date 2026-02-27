import { Card, Typography } from "antd";
import { cloneElement, isValidElement } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const { Text } = Typography;

const BORDER_COLOR = "#ba9a3a";
const ELEVATION_5 =
  "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)";

export interface TarjetaIconoTituloProps {
  readonly icono: ReactNode;
  readonly titulo: string;
  readonly descripcion?: string;
  /** Ruta interna a la que navegar al hacer clic (ej. /informacion) */
  readonly to?: string;
  /** Enlace externo; al hacer clic abre en nueva pestaña. Si se usa, no usar to. */
  readonly href?: string;
  readonly className?: string;
  readonly style?: React.CSSProperties;
}

const linkStyle: React.CSSProperties = {
  display: "block",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

export default function TarjetaIconoTitulo({
  icono,
  titulo,
  descripcion,
  to,
  href,
  className,
  style,
}: TarjetaIconoTituloProps) {
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
      className={`tarjeta-icono-titulo ${className ?? ""}`.trim()}
      style={{
        textAlign: "center",
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
        className="icono-tarjeta"
        style={{
          width: "60%",
          aspectRatio: "1",
          marginBottom: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          overflow: "hidden",
        }}
      >
        {iconoEscalable}
      </div>
      <Text style={{ display: "block", fontSize: 20, fontWeight: 700 }}>
        {titulo}
      </Text>
      {descripcion ? (
        <Text
          style={{
            display: "block",
            fontSize: 13,
            marginTop: 6,
            lineHeight: 1.4,
            fontWeight: 500,
            marginBottom: 10,
          }}
        >
          {descripcion}
        </Text>
      ) : null}
      <div
        style={{
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          height: 6,
          background: `linear-gradient(to right, ${BORDER_COLOR} 60%, rgba(186, 154, 58, 0.25) 100%)`,
        }}
      />
    </Card>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        aria-label={titulo}
      >
        {cardContent}
      </a>
    );
  }

  if (to) {
    return <Link to={to} style={linkStyle}>{cardContent}</Link>;
  }

  return cardContent;
}
