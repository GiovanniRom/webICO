import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import horarios from "../assets/images/alumnos/horariosicon.png";
import calendario from "../assets/images/alumnos/calendarioicon.png";
import extraordinarios from "../assets/images/alumnos/extraicon.png";
import tutores from "../assets/images/alumnos/tutoresicon.png";
import laboratorio from "../assets/images/alumnos/horarioslabicon.png";
import complementaria from "../assets/images/alumnos/formacionicon.png";
import evaluaciones from "../assets/images/alumnos/evalproficon.png";
import TarjetaIconoTitulo from "../components/TarjetaIconoTitulo";

export default function Alumnos() {
  const { t } = useTranslation();

  return (
    <>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={horarios} alt={t("alumnos.horarios.alt")} />}
            titulo={t("alumnos.horarios.titulo")}
            descripcion={t("alumnos.horarios.descripcion")}
            to="/alumnos/horarios"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={calendario} alt={t("alumnos.calendario.alt")} />}
            titulo={t("alumnos.calendario.titulo")}
            descripcion={t("alumnos.calendario.descripcion")}
            to="/alumnos/calendario"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={
              <img src={extraordinarios} alt={t("alumnos.extraordinarios.alt")} />
            }
            titulo={t("alumnos.extraordinarios.titulo")}
            descripcion={t("alumnos.extraordinarios.descripcion")}
            to="/alumnos/extraordinarios"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={laboratorio} alt={t("alumnos.redes.alt")} />}
            titulo={t("alumnos.redes.titulo")}
            descripcion={t("alumnos.redes.descripcion")}
            to="/alumnos/redes"
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center" style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={tutores} alt={t("alumnos.tutores.alt")} />}
            titulo={t("alumnos.tutores.titulo")}
            descripcion={t("alumnos.tutores.descripcion")}
            to="/alumnos/tutores"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={laboratorio} alt={t("alumnos.laboratorio.alt")} />}
            titulo={t("alumnos.laboratorio.titulo")}
            descripcion={t("alumnos.laboratorio.descripcion")}
            href="https://sites.google.com/aragon.unam.mx/laboratorio-l3/horarios?authuser=0"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={
              <img src={complementaria} alt={t("alumnos.formacion.alt")} />
            }
            titulo={t("alumnos.formacion.titulo")}
            descripcion={t("alumnos.formacion.descripcion")}
            to="/alumnos/formacion"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaIconoTitulo
            icono={<img src={evaluaciones} alt={t("alumnos.evaluacion.alt")} />}
            titulo={t("alumnos.evaluacion.titulo")}
            descripcion={t("alumnos.evaluacion.descripcion")}
            href="https://ingenierias-aragon.net/ICO/evaluacionProfesores.php"
          />
        </Col>
      </Row>
    </>
  );
}
