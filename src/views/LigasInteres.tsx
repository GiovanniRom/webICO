import { Row, Col } from "antd";
import cultura from "../assets/images/ligas/culturaicon.png";
import servicio from "../assets/images/ligas/servicioicon.png";
import becas from "../assets/images/ligas/becasicon.png";
import bibliotecas from "../assets/images/ligas/bibliotecasicon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function LigasInteres() {
  return (
    <div style={{ padding: "0 24px" }}>
      <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={cultura} alt="Cultura Informática" />}
            titulo="CULTURA INFORMATICA"
            descripcion="Enlaces a boletínes, artículos, videos y material de apoyo."
            to="/cultura"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={servicio} alt="Servicio Social" />}
            titulo="SERVICIO SOCIAL"
            descripcion="Información y acceso al portal de servicio social de la Universidad."
            href="https://www.aragon.unam.mx/fes-aragon/#!/cise/servicio-social"
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={becas} alt="Becas" />}
            titulo="BECAS"
            descripcion="Acceso a la página de becas de la Universidad."
            href="https://www.becarios.unam.mx/Portal2018/"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={bibliotecas} alt="Bibliotecas" />}
            titulo="BIBLIOTECAS"
            descripcion="Acceso a las paginas de las bibliotecas de la Universidad."
            to="/bibliotecas"
          />
        </Col>
      </Row>
    </div>
  );
}
