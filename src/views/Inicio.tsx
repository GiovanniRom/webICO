import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";
import students from "../assets/images/inicio/alumnoicon.png";
import studyplan from "../assets/images/inicio/plandeestudiosicon.png";
import teachers from "../assets/images/inicio/profesoricon.png";
import graduates from "../assets/images/inicio/gorraicon.png";
import interestlinks from "../assets/images/inicio/linksicon.png";

export default function Inicio() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
    >
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={12}>
          <TarjetaIconoTitulo
            icono={<img src={studyplan} alt={t("home.altPlan")} />}
            titulo={t("home.planEstudiosTitulo")}
            descripcion={t("home.planEstudiosDesc")}
            to="/plan-estudios"
          />
        </Col>
        <Col xs={24} sm={12} md={12}>
          <TarjetaIconoTitulo
            icono={<img src={students} alt={t("home.altAlumnos")} />}
            titulo={t("home.alumnosTitulo")}
            descripcion={t("home.alumnosDesc")}
            to="/alumnos"
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={teachers} alt={t("home.altProfesores")} />}
            titulo={t("home.profesoresTitulo")}
            descripcion={t("home.profesoresDesc")}
            to="/profesores"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={interestlinks} alt={t("home.altLigas")} />}
            titulo={t("home.ligasTitulo")}
            descripcion={t("home.ligasDesc")}
            to="/ligas-interes"
          />
        </Col>
        <Col xs={24} sm={12} md={8}>
          <TarjetaIconoTitulo
            icono={<img src={graduates} alt={t("home.altEgresados")} />}
            titulo={t("home.egresadosTitulo")}
            descripcion={t("home.egresadosDesc")}
            to="/egresados"
          />
        </Col>
      </Row>
    </div>
  );
}
