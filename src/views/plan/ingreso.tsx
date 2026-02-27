import { Typography, Collapse, Row, Col } from "antd";
import imagenIngreso from "../../assets/images/plan/ingresoicon.png";

const { Title } = Typography;

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
            INGRESO
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
                label: "¿Qué es el perfil de ingreso?",
                children: (
                  <p style={{ margin: 0, textAlign: "justify" }}>
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
                label: "Conocimientos recomendados",
                children: (
                  <p style={{ margin: 0, textAlign: "justify" }}>
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
                label: "Habilidades y actitudes",
                children: (
                  <p style={{ margin: 0, textAlign: "justify" }}>
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
