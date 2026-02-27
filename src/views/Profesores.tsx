import { Row, Col } from "antd";
import correo from "../assets/images/profesores/correoicon.png";
import pagina from "../assets/images/profesores/webicon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function Profesores() {
  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={<img src={correo} alt="Correo institucional" />}
          titulo="CORREO INSTITUCIONAL"
          descripcion="Conoce los correos de los profesores de la carrera de Ingeniería en Computación."
          to="/profesores/correo"
        />
      </Col>
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={<img src={pagina} alt="Páginas personales" />}
          titulo="PAGINAS PERSONALES"
          descripcion="Visita las páginas personales de los profesores de la carrera de Ingeniería en Computación."
          href="https://www.paginaspersonales.unam.mx/presentacions"
        />
      </Col>
    </Row>
  );
}
