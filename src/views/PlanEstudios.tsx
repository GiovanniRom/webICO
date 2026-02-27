import { Row, Col } from "antd";
import planestudios from "../assets/images/plan/planicon.png";
import perfilingreso from "../assets/images/plan/ingresoicon.png";
import perfilegreso from "../assets/images/plan/egresoicon.png";
import malacurricular from "../assets/images/plan/mallaicon.png";
import cuestionario from "../assets/images/plan/cuestionarioicon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function PlanEstudios() {
  return (
    <>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={planestudios} alt="Plan de estudios" />}
            titulo="PLAN DE ESTUDIOS"
            descripcion="Estructura y secuencia del plan de estudios."
            href="https://drive.google.com/file/d/1mnPvcATbixSNaC_qd6pNSgXWvtD2N_1M/view"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={perfilingreso} alt="Perfil de ingreso" />}
            titulo="PERFIL DE INGRESO"
            descripcion="Perfil de ingreso a la carrera de Ingeniería en Computación."
            to="/plan/ingreso"
          />
        </Col>

        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={cuestionario} alt="Cuestionario" />}
            titulo="CUESTIONARIO"
            descripcion="Cuestionarios para la actualización del plan de estudios."
            to="/plan/cuestionario"
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center" style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={malacurricular} alt="Malla curricular" />}
            titulo="MALLA CURRICULAR"
            descripcion="Malla curricular de la carrera de Ingeniería en Computación."
            href="https://ingenierias-aragon.net/ICO/PlanEstudios2119/"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={perfilegreso} alt="Perfil de egreso" />}
            titulo="PERFIL DE EGRESO"
            descripcion="Perfil de egreso de la carrera de Ingeniería en Computación."
            to="/plan/egreso"
          />
        </Col>
      </Row>
    </>
  );
}
