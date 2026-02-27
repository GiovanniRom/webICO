import { Row, Col, Typography } from "antd";
import TarjetaIconoTitulo from "../../components/TarjetaIconoTitulo";
import correo from "../../assets/images/ligas/cultura/correo.png";
import divulgacion from "../../assets/images/ligas/cultura/divulgacion.png";
import escudo from "../../assets/images/ligas/cultura/escudo.png";
import portal from "../../assets/images/ligas/cultura/portal.png";
import revista from "../../assets/images/ligas/cultura/revista.png";
import seguridad from "../../assets/images/ligas/cultura/seguridad.png";
import tv from "../../assets/images/ligas/cultura/tv.png";
import unam from "../../assets/images/ligas/cultura/unam.png";

const { Title } = Typography;

export default function Cultura() {
  return (
    <>
      <div style={{ margin: "-10px -10px 0 -10px", marginBottom: "24px" }}>
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
            CULTURA
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
            INFORMATICA
          </Title>
        </div>
      </div>

      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={<img src={correo} alt="Correo" />}
            titulo="BOLETIÍN"
            descripcion="Boletín del centro de computo."
            href="http://ingenieria.aragon.unam.mx/enlaces/cultura_informatica.rb"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={<img src={revista} alt="Revista" />}
            titulo="REVISTAS CIENTÍFICAS"
            descripcion="Portal de revistas científicas de la unam."
            href="https://revistas.unam.mx/catalogo/"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={<img src={escudo} alt="Escudo" />}
            titulo="SEGURIDAD TV"
            descripcion="Canal de seguridad de la unam."
            href="https://www.youtube.com/SeguridadTV"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={<img src={portal} alt="Portal" />}
            titulo="PORTAL"
            descripcion="Portal del usuario casero."
            href="https://www.seguridad.unam.mx/historico/usuario-casero/"
          />
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={<img src={divulgacion} alt="Divulgación" />}
            titulo="UNAM-CERT"
            descripcion="Divulgación científica y cultural de la UNAM."
            href="https://www.cert.org.mx/divulgacion"
          />
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={<img src={tv} alt="TV" />}
            titulo="SEPACÓMPUTO"
            descripcion="Televisión universitaria y contenidos culturales."
            href="https://www.youtube.com/playlist?list=PL65CA68F7F171723E"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={<img src={unam} alt="UNAM" />}
            titulo="UNAM"
            descripcion="Canal oficial de la unam dentro de la paltaforma de youtube."
            href="https://www.youtube.com/user/unam"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={<img src={seguridad} alt="Seguridad" />}
            titulo="SEGURIDAD DE LA INFORMACIÓN"
            descripcion="Documentos de seguridad de la información de la unam."
            href="https://revista.seguridad.unam.mx/"
          />
        </Col>
      </Row>
    </>
  );
}
