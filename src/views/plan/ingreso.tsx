import { Collapse, Row, Col } from "antd";
import imagenIngreso from "../../assets/images/plan/ingresoicon.png";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";

export default function PlanIngreso() {
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
        <CabeceraTitulo variante="dorado">PERFIL DE</CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          INGRESO
        </CabeceraTitulo>
      </div>

      <Row gutter={[24, 24]} style={{ marginTop: 16 }}>
        <Col xs={24} md={10} lg={9}>
          <div
            style={{
              width: "100%",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={imagenIngreso}
              alt="Perfil de ingreso"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
          </div>
        </Col>
        <Col xs={24} md={14} lg={15}>
          <Collapse
            items={[
              {
                key: "1",
                label: (
                  <span style={{ fontFamily: '"poppins-semibold", sans-serif' }}>
                    ¿Qué es el perfil de ingreso?
                  </span>
                ),
                children: (
                  <p
                  style={{
                    margin: 0,
                    textAlign: "justify",
                    fontFamily: '"poppins-regular", sans-serif',
                  }}>
                    El perfil de ingreso describe las características que debe
                    reunir el aspirante a la carrera de Ingeniería en
                    Computación en la FES Aragón: conocimientos previos,
                    habilidades, actitudes y valores que facilitan un buen
                    desempeño en el plan de estudios.
                  </p>
                ),
              },
              {
                key: "2",
                label: (
                  <span style={{ fontFamily: '"poppins-semibold", sans-serif' }}>
                    Conocimientos recomendados
                  </span>
                ),
                children: (
                  <p
                  style={{
                    margin: 0,
                    textAlign: "justify",
                    fontFamily: '"poppins-regular", sans-serif',
                  }}>
                    Se recomienda que el aspirante tenga bases sólidas en
                    matemáticas (álgebra, geometría, precálculo), capacidad de
                    razonamiento lógico y abstracto, así como interés por la
                    tecnología y la resolución de problemas mediante el uso de
                    computadoras.
                  </p>
                ),
              },
              {
                key: "3",
                label: (
                  <span style={{ fontFamily: '"poppins-semibold", sans-serif' }}>
                    Habilidades y actitudes
                  </span>
                ),
                children: (
                  <p
                  style={{
                    margin: 0,
                    textAlign: "justify",
                    fontFamily: '"poppins-regular", sans-serif',
                  }}>
                    Es deseable contar con capacidad de análisis, trabajo en
                    equipo, disciplina para el estudio autónomo, curiosidad
                    científica y disposición para actualizarse de forma continua
                    en un área en constante evolución.
                  </p>
                ),
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}
