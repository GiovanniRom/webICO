import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import diplomados from "../assets/images/egresados/diplomadoicon.png";
import trabajo from "../assets/images/egresados/trabajoicon.png";
import titulacion from "../assets/images/egresados/titulacionicon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function Egresados() {
  const { t } = useTranslation();

  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={<img src={diplomados} alt={t("graduatesPage.diplomados.alt")} />}
          titulo={t("graduatesPage.diplomados.titulo")}
          descripcion={t("graduatesPage.diplomados.descripcion")}
          href="https://www.aragon.unam.mx/fes-aragon/public_html/documents/titulacion/computacion/listado-de-cursos-o-diplomados.pdf"
        />
      </Col>
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={<img src={trabajo} alt={t("graduatesPage.ofertasTrabajo.alt")} />}
          titulo={t("graduatesPage.ofertasTrabajo.titulo")}
          descripcion={t("graduatesPage.ofertasTrabajo.descripcion")}
          href="http://bolsa.trabajo.unam.mx/Registro/sbut/"
        />
      </Col>
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={
            <img src={titulacion} alt={t("graduatesPage.guiaTitulacion.alt")} />
          }
          titulo={t("graduatesPage.guiaTitulacion.titulo")}
          descripcion={t("graduatesPage.guiaTitulacion.descripcion")}
          to="/guia-titulacion"
        />
      </Col>
    </Row>
  );
}
