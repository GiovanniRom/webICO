import { Row, Col } from "antd";
import diplomados from "../assets/images/egresados/diplomadoicon.png";
import trabajo from "../assets/images/egresados/trabajoicon.png";
import titulacion from "../assets/images/egresados/titulacionicon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function Egresados() {
  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={<img src={diplomados} alt="Diplomados" />}
          titulo="DIPLOMADOS"
          descripcion="Listado de cursos o diplomados para la opción de titulación por ampliación y profundización de conocimientos."
          href="https://www.aragon.unam.mx/fes-aragon/public_html/documents/titulacion/computacion/listado-de-cursos-o-diplomados.pdf"
        />
      </Col>
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={<img src={trabajo} alt="Trabajo" />}
          titulo="OFERTAS DE TRABAJO"
          descripcion="Visita la pagina de bolsa universitaria de trabajo para registrar tu perfil y encontrar ofertas de trabajo."
          href="http://bolsa.trabajo.unam.mx/Registro/sbut/"
        />
      </Col>
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={<img src={titulacion} alt="Titulación" />}
          titulo="TIPOS DE TITULACIÓN"
          descripcion="Conoce información relevante para el proceso de titulación de los planes de estudios 1279 y 2119."
          href="https://www.aragon.unam.mx/fes-aragon/#!/oferta-academica/licenciaturas/computacion-titulacion"
        />
      </Col>
    </Row>
  );
}
