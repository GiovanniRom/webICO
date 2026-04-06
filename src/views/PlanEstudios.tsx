import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import information from "../assets/images/inicio/informationicon.png";
import planestudios from "../assets/images/plan/planicon.png";
import perfilingreso from "../assets/images/plan/ingresoicon.png";
import perfilegreso from "../assets/images/plan/egresoicon.png";
import malacurricular from "../assets/images/plan/mallaicon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function PlanEstudios() {
  const { t } = useTranslation();

  return (
    <>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={12}>
          <TarjetaIconoTitulo
            icono={
              <img src={perfilegreso} alt={t("planPage.perfilEgreso.alt")} />
            }
            titulo={t("planPage.perfilEgreso.titulo")}
            descripcion={t("planPage.perfilEgreso.descripcion")}
            to="/plan/egreso"
          />
        </Col>
        <Col xs={24} sm={12} md={12}>
          <TarjetaIconoTitulo
            icono={
              <img src={perfilingreso} alt={t("planPage.perfilIngreso.alt")} />
            }
            titulo={t("planPage.perfilIngreso.titulo")}
            descripcion={t("planPage.perfilIngreso.descripcion")}
            to="/plan/ingreso"
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center" style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={
              <img src={malacurricular} alt={t("planPage.malla.alt")} />
            }
            titulo={t("planPage.malla.titulo")}
            descripcion={t("planPage.malla.descripcion")}
            href="https://ingenierias-aragon.net/ICO/PlanEstudios2119/"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={
              <img src={planestudios} alt={t("planPage.planDocumento.alt")} />
            }
            titulo={t("planPage.planDocumento.titulo")}
            descripcion={t("planPage.planDocumento.descripcion")}
            href="https://drive.google.com/file/d/1mnPvcATbixSNaC_qd6pNSgXWvtD2N_1M/view"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={information} alt={t("planPage.informacion.alt")} />}
            titulo={t("planPage.informacion.titulo")}
            descripcion={t("planPage.informacion.descripcion")}
            to="/informacion"
          />
        </Col>
      </Row>
    </>
  );
}
