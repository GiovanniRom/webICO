import { Row, Col } from "antd";
import TarjetaIconoTitulo from "../../components/TarjetaIconoTitulo";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";
import iconoDocentes from "../../assets/images/plan/cuestionario/profesor.png";
import iconoEstudiantes from "../../assets/images/plan/cuestionario/alumno.png";
import iconoEgresados from "../../assets/images/plan/cuestionario/egresado.png";
import iconoEmpleadores from "../../assets/images/plan/cuestionario/empresa.png";

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
        <CabeceraTitulo variante="dorado">CUESTIONARIOS</CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          ACTUALIZACIÓN DEL PLAN DE ESTUDIOS
        </CabeceraTitulo>
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
