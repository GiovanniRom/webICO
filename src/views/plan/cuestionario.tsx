import { Typography, Row, Col } from "antd";
import TarjetaIconoTitulo from "../../components/TarjetaIconoTitulo";
import iconoDocentes from "../../assets/images/plan/cuestionario/profesor.png";
import iconoEstudiantes from "../../assets/images/plan/cuestionario/alumno.png";
import iconoEgresados from "../../assets/images/plan/cuestionario/egresado.png";
import iconoEmpleadores from "../../assets/images/plan/cuestionario/empresa.png";

const { Title } = Typography;

export default function PlanCuestionario() {
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
            CUESTIONARIOS
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
            ACTUALIZACIÓN DEL PLAN DE ESTUDIOS
          </Title>
        </div>
      </div>

      <Row gutter={[24, 24]} justify="center" style={{ marginTop: 16 }}>
        <Col xs={24} sm={12} lg={6}>
          <TarjetaIconoTitulo
            icono={<img src={iconoDocentes} alt="Cuestionario docentes" />}
            titulo="CUESTIONARIO DOCENTES"
            descripcion="Encuesta dirigida al profesorado para la evaluación y actualización del plan de estudios."
            href="https://docs.google.com/forms/d/e/1FAIpQLScWTOPXLJcK2JHvr-R7u7X4OWtbA0oyE9R8ilYkLbZJr35QPw/viewform?c=0&w=1"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <TarjetaIconoTitulo
            icono={
              <img src={iconoEstudiantes} alt="Cuestionario estudiantes" />
            }
            titulo="CUESTIONARIO ESTUDIANTES"
            descripcion="Opinión de los estudiantes sobre la oferta curricular y mejora del plan de estudios."
            href="https://docs.google.com/forms/d/e/1FAIpQLScNqdIZtUyS6a3bEnjAdbbItMpkNPHSxx3y_xshrQTYobkhJA/viewform?c=0&w=1"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <TarjetaIconoTitulo
            icono={<img src={iconoEgresados} alt="Cuestionario egresados" />}
            titulo="CUESTIONARIO EGRESADOS"
            descripcion="Valoración de egresados sobre la formación recibida y su pertinencia laboral."
            href="https://docs.google.com/forms/d/e/1FAIpQLSftL3axVe2_Abofm-rPjzI-enJixxAL-v7HU-vrQkdrHpj6jg/viewform?c=0&w=1"
          />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <TarjetaIconoTitulo
            icono={
              <img src={iconoEmpleadores} alt="Cuestionario empleadores" />
            }
            titulo="CUESTIONARIO EMPLEADORES"
            descripcion="Cuestionario de de registro y contacto de empleadores para la actualización del plan de estudios."
            href="https://docs.google.com/forms/d/e/1FAIpQLSeJA8H_2ZvTGtqn62dMwXQDjSLRM3VM_nI7G5OI04JHr2idAQ/viewform?c=0&w=1"
          />
        </Col>
      </Row>
    </div>
  );
}
