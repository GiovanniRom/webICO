import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import correo from "../assets/images/profesores/correoicon.png";
import pagina from "../assets/images/profesores/webicon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function Profesores() {
  const { t } = useTranslation();

  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={<img src={correo} alt={t("professorsPage.correo.alt")} />}
          titulo={t("professorsPage.correo.titulo")}
          descripcion={t("professorsPage.correo.descripcion")}
          to="/profesores/correo"
        />
      </Col>
      <Col xs={24} sm={12} md={8}>
        <TarjetaIconoTitulo
          icono={
            <img src={pagina} alt={t("professorsPage.paginasPersonales.alt")} />
          }
          titulo={t("professorsPage.paginasPersonales.titulo")}
          descripcion={t("professorsPage.paginasPersonales.descripcion")}
          href="https://www.paginaspersonales.unam.mx/presentacions"
        />
      </Col>
    </Row>
  );
}
