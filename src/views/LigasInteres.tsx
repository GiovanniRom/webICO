import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import cultura from "../assets/images/ligas/culturaicon.png";
import servicio from "../assets/images/ligas/servicioicon.png";
import becas from "../assets/images/ligas/becasicon.png";
import bibliotecas from "../assets/images/ligas/bibliotecasicon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function LigasInteres() {
  const { t } = useTranslation();

  return (
    <div style={{ padding: "0 24px" }}>
      <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={cultura} alt={t("linksPage.cultura.alt")} />}
            titulo={t("linksPage.cultura.titulo")}
            descripcion={t("linksPage.cultura.descripcion")}
            to="/cultura"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={
              <img src={servicio} alt={t("linksPage.servicioSocial.alt")} />
            }
            titulo={t("linksPage.servicioSocial.titulo")}
            descripcion={t("linksPage.servicioSocial.descripcion")}
            href="https://www.aragon.unam.mx/fes-aragon/#!/cise/servicio-social"
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={becas} alt={t("linksPage.becas.alt")} />}
            titulo={t("linksPage.becas.titulo")}
            descripcion={t("linksPage.becas.descripcion")}
            href="https://www.becarios.unam.mx/Portal2018/"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={
              <img src={bibliotecas} alt={t("linksPage.bibliotecas.alt")} />
            }
            titulo={t("linksPage.bibliotecas.titulo")}
            descripcion={t("linksPage.bibliotecas.descripcion")}
            to="/bibliotecas"
          />
        </Col>
      </Row>
    </div>
  );
}
