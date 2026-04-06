import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import TarjetaInformacion from "../components/TarjetaInformacion";
import values from "../assets/images/informacion/valoresicon.png";
import objectives from "../assets/images/informacion/objetivosicon.png";
import vision from "../assets/images/informacion/visionicon.png";
import mission from "../assets/images/informacion/misionicon.png";

export default function Informacion() {
  const { t } = useTranslation();

  return (
    <div style={{ marginTop: 24, flex: 1 }}>
      <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 24 }}>
        <Col xs={24} sm={18} md={18}>
          <TarjetaInformacion
            icono={<img src={values} alt={t("informationPage.valores.alt")} />}
            titulo={t("informationPage.valores.titulo")}
            descripcionColumnas={[
              t("informationPage.valores.columna1"),
              t("informationPage.valores.columna2"),
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={6}>
          <TarjetaInformacion
            icono={
              <img src={objectives} alt={t("informationPage.objetivos.alt")} />
            }
            titulo={t("informationPage.objetivos.titulo")}
            descripcion={t("informationPage.objetivos.descripcion")}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaInformacion
            icono={<img src={mission} alt={t("informationPage.mision.alt")} />}
            titulo={t("informationPage.mision.titulo")}
            descripcion={t("informationPage.mision.descripcion")}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaInformacion
            icono={<img src={vision} alt={t("informationPage.vision.alt")} />}
            titulo={t("informationPage.vision.titulo")}
            descripcion={t("informationPage.vision.descripcion")}
          />
        </Col>
      </Row>
    </div>
  );
}
