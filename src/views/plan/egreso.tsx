import { Collapse, Row, Col } from "antd";
import imagenEgreso from "../../assets/images/plan/egresoicon.png";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";

export default function PlanEgreso() {
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
          EGRESO
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
              src={imagenEgreso}
              alt="Perfil de egreso"
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
                    ¿Qué es el perfil de egreso?
                  </span>
                ),
                children: (
                  <p
                  style={{
                    margin: 0,
                    textAlign: "justify",
                    fontFamily: '"poppins-regular", sans-serif',
                  }}>
                    El perfil de egreso describe las competencias, conocimientos,
                    habilidades y actitudes que el estudiante habrá desarrollado
                    al concluir la carrera de Ingeniería en Computación en la FES
                    Aragón, y que le permiten insertarse en el ámbito laboral o
                    continuar con estudios de posgrado.
                  </p>
                ),
              },
              {
                key: "2",
                label: (
                  <span style={{ fontFamily: '"poppins-semibold", sans-serif' }}>
                    Competencias profesionales
                  </span>
                ),
                children: (
                  <p
                  style={{
                    margin: 0,
                    textAlign: "justify",
                    fontFamily: '"poppins-regular", sans-serif',
                  }}>
                    El egresado será capaz de analizar, diseñar, desarrollar e
                    implementar sistemas de software y hardware; gestionar
                    proyectos de TI; aplicar metodologías y estándares de la
                    ingeniería; y comunicar resultados de forma oral y escrita
                    en contextos profesionales y académicos.
                  </p>
                ),
              },
              {
                key: "3",
                label: (
                  <span style={{ fontFamily: '"poppins-semibold", sans-serif' }}>
                    Ámbitos de desempeño
                  </span>
                ),
                children: (
                  <p
                  style={{
                    margin: 0,
                    textAlign: "justify",
                    fontFamily: '"poppins-regular", sans-serif',
                  }}>
                    El ingeniero en computación puede desempeñarse en empresas del
                    sector público y privado, en desarrollo de software, bases de
                    datos, redes, inteligencia artificial, ciberseguridad,
                    docencia e investigación, así como en el emprendimiento de
                    proyectos tecnológicos.
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
