import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import TarjetaIconoTitulo from "../../components/TarjetaIconoTitulo";
import CabeceraTitulo from "../../components/CabeceraTitulo.tsx";
import correo from "../../assets/images/ligas/cultura/correo.png";
import divulgacion from "../../assets/images/ligas/cultura/divulgacion.png";
import escudo from "../../assets/images/ligas/cultura/escudo.png";
import portal from "../../assets/images/ligas/cultura/portal.png";
import revista from "../../assets/images/ligas/cultura/revista.png";
import seguridad from "../../assets/images/ligas/cultura/seguridad.png";
import tv from "../../assets/images/ligas/cultura/tv.png";
import unam from "../../assets/images/ligas/cultura/unam.png";

export default function Cultura() {
  const { t } = useTranslation();

  return (
    <>
      <div style={{ margin: "-10px -10px 0 -10px", marginBottom: "24px" }}>
        <CabeceraTitulo variante="dorado">
          {t("culturaPage.cabeceraLinea1")}
        </CabeceraTitulo>
        <CabeceraTitulo variante="azul" style={{ width: "95%" }}>
          {t("culturaPage.cabeceraLinea2")}
        </CabeceraTitulo>
      </div>

      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={
              <img src={correo} alt={t("culturaPage.cards.boletin.alt")} />
            }
            titulo={t("culturaPage.cards.boletin.titulo")}
            descripcion={t("culturaPage.cards.boletin.descripcion")}
            href="http://ingenieria.aragon.unam.mx/enlaces/cultura_informatica.rb"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={
              <img src={revista} alt={t("culturaPage.cards.revistas.alt")} />
            }
            titulo={t("culturaPage.cards.revistas.titulo")}
            descripcion={t("culturaPage.cards.revistas.descripcion")}
            href="https://revistas.unam.mx/catalogo/"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={
              <img
                src={escudo}
                alt={t("culturaPage.cards.seguridadTv.alt")}
              />
            }
            titulo={t("culturaPage.cards.seguridadTv.titulo")}
            descripcion={t("culturaPage.cards.seguridadTv.descripcion")}
            href="https://www.youtube.com/SeguridadTV"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={
              <img src={portal} alt={t("culturaPage.cards.portal.alt")} />
            }
            titulo={t("culturaPage.cards.portal.titulo")}
            descripcion={t("culturaPage.cards.portal.descripcion")}
            href="https://www.seguridad.unam.mx/historico/usuario-casero/"
          />
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={
              <img
                src={divulgacion}
                alt={t("culturaPage.cards.unamCert.alt")}
              />
            }
            titulo={t("culturaPage.cards.unamCert.titulo")}
            descripcion={t("culturaPage.cards.unamCert.descripcion")}
            href="https://www.cert.org.mx/divulgacion"
          />
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={
              <img src={tv} alt={t("culturaPage.cards.sepacomputo.alt")} />
            }
            titulo={t("culturaPage.cards.sepacomputo.titulo")}
            descripcion={t("culturaPage.cards.sepacomputo.descripcion")}
            href="https://www.youtube.com/playlist?list=PL65CA68F7F171723E"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={
              <img src={unam} alt={t("culturaPage.cards.unamCanal.alt")} />
            }
            titulo={t("culturaPage.cards.unamCanal.titulo")}
            descripcion={t("culturaPage.cards.unamCanal.descripcion")}
            href="https://www.youtube.com/user/unam"
          />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <TarjetaIconoTitulo
            icono={
              <img
                src={seguridad}
                alt={t("culturaPage.cards.seguridadInfo.alt")}
              />
            }
            titulo={t("culturaPage.cards.seguridadInfo.titulo")}
            descripcion={t("culturaPage.cards.seguridadInfo.descripcion")}
            href="https://revista.seguridad.unam.mx/"
          />
        </Col>
      </Row>
    </>
  );
}
