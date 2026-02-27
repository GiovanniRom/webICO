import { Row, Col } from "antd";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";
import information from "../assets/images/inicio/informationicon.png";
import students from "../assets/images/inicio/alumnoicon.png";
import studyplan from "../assets/images/inicio/plandeestudiosicon.png";
import teachers from "../assets/images/inicio/profesoricon.png";
import graduates from "../assets/images/inicio/gorraicon.png";
import interestlinks from "../assets/images/inicio/linksicon.png";

export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={information} alt="Información" />}
            titulo="INFORMACIÓN"
            descripcion="Conoce la información de la Facultad de Estudios Superiores Aragón."
            to="/informacion"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={studyplan} alt="Información" />}
            titulo="PLAN DE ESTUDIOS"
            descripcion="Conoce el plan de estudios de la Carrera de Ingeniería en Computación."
            to="/plan-estudios"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={students} alt="Información" />}
            titulo="ALUMNOS"
            descripcion="Información util para los alumnos de la carrera de Ingeniería en Computación."
            to="/alumnos"
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={teachers} alt="Información" />}
            titulo="PROFESORES"
            descripcion="Conoce los profesores de la Carrera de Ingeniería en Computación."
            to="/profesores"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={interestlinks} alt="Información" />}
            titulo="LIGAS DE INTERÉS"
            descripcion="Accede a las ligas de interés de la Carrera de Ingeniería en Computación."
            to="/ligas-interes"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={graduates} alt="Información" />}
            titulo="EGRESADOS"
            descripcion="Información util para los egresados de la Carrera de Ingeniería en Computación."
            to="/egresados"
          />
        </Col>
      </Row>
    </div>
  );
}
