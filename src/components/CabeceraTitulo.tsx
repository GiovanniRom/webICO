import { Typography } from "antd";
import type { ReactNode } from "react";

const { Title } = Typography;

const CLIP_PATH =
  "polygon(0 0, 50% 0, 100% calc(50% - 48px), calc(100% - 96px) 100%, 24px 100%, 0 calc(100% - 24px))";

const VARIANTES = {
  dorado: {
    backgroundColor: "#f2a900",
    color: "#002f6c",
  },
  azul: {
    backgroundColor: "#002f6c",
    color: "#f2a900",
  },
} as const;

export interface CabeceraTituloProps {
  /** Contenido del título (texto o nodos) */
  readonly children: ReactNode;
  /** Estilo visual: dorado (fondo oro) o azul (fondo azul oscuro) */
  readonly variante?: keyof typeof VARIANTES;
  /** Nivel del Title de Ant Design (1-5). Por defecto 2 */
  readonly level?: 1 | 2 | 3 | 4 | 5;
  /** Estilos adicionales del contenedor */
  readonly style?: React.CSSProperties;
  readonly className?: string;
}

export default function CabeceraTitulo({
  children,
  variante = "dorado",
  level = 2,
  style,
  className,
}: CabeceraTituloProps) {
  const colores = VARIANTES[variante];
  return (
    <div
      className={className}
      style={{
        padding: "16px 24px 24px",
        width: "100%",
        boxSizing: "border-box",
        ...colores,
        clipPath: CLIP_PATH,
        ...style,
      }}
    >
      <Title
        level={level}
        style={{
          margin: 0,
          color: colores.color,
          textAlign: "center",
          fontFamily: '"poppins-semibold", sans-serif',
        }}
      >
        {children}
      </Title>
    </div>
  );
}
