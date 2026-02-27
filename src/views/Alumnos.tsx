import { Row, Col } from "antd";
import horarios from "../assets/images/alumnos/horariosicon.png";
import calendario from "../assets/images/alumnos/calendarioicon.png";
import extraordinarios from "../assets/images/alumnos/extraicon.png";
import tutores from "../assets/images/alumnos/tutoresicon.png";
import laboratorio from "../assets/images/alumnos/horarioslabicon.png";
import complementaria from "../assets/images/alumnos/formacionicon.png";
import evaluaciones from "../assets/images/alumnos/evalproficon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function Alumnos() {
  return (
    <>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={horarios} alt="Horarios" />}
            titulo="HORARIOS"
            descripcion="Horarios de clase impartidos en el semestre actual."
            to="/alumnos/horarios"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={horarios} alt="Cupos" />}
            titulo="CUPOS"
            descripcion="Cupos disponibles para el semestre actual."
            to="/alumnos/cupos"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={calendario} alt="Calendario" />}
            titulo="CALENDARIO"
            descripcion="Calendario de actividades escolares del semestre actual."
            to="/alumnos/calendario"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={extraordinarios} alt="Extraordinarios" />}
            titulo="EXTRAORDINARIOS"
            descripcion="Horarios de examenes extraordinarios del semestre actual."
            to="/alumnos/extraordinarios"
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center" style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={tutores} alt="Tutores" />}
            titulo="TUTORES"
            descripcion="Conoce el listado de los profesores que también son tutores del semestre actual."
            to="/alumnos/tutores"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={laboratorio} alt="Laboratorio" />}
            titulo="HORARIOS DE LABORATORIO"
            descripcion="Conoce los horarios de laboratorio impartidos para el semestre actual."
            href="https://sites.google.com/aragon.unam.mx/laboratorio-l3/horarios?authuser=0"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={complementaria} alt="Formacion" />}
            titulo="HORAS DE FORMACIÓN COMPLEMENTARIA"
            descripcion="Información sobre las horas de formación complementaria."
            to="/alumnos/formacion"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={evaluaciones} alt="Evaluaciones" />}
            titulo="EVALUACIÓN A PROFESORES"
            descripcion="Acceso a la página de evaluación a profesores de la Universidad."
            href="https://ingenierias-aragon.net/ICO/evaluacionProfesores.php"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={laboratorio} alt="Extraordinarios" />}
            titulo="REDES"
            descripcion="Practicas de Redes de Computadoras."
            to="/alumnos/redes"
          />
        </Col>
      </Row>
    </>
  );
}
