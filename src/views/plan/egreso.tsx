import { Typography, Collapse, Row, Col } from "antd";
import imagenEgreso from "../../assets/images/plan/egresoicon.png";

const { Title } = Typography;

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
            PERFIL DE
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
            EGRESO
          </Title>
        </div>
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
                label: "¿Qué es el perfil de egreso?",
                children: (
                  <p style={{ margin: 0, textAlign: "justify" }}>
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
                label: "Competencias profesionales",
                children: (
                  <p style={{ margin: 0, textAlign: "justify" }}>
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
                label: "Ámbitos de desempeño",
                children: (
                  <p style={{ margin: 0, textAlign: "justify" }}>
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
