import { Row, Col } from "antd";
import TarjetaInformacion from "../components/TarjetaInformacion";
import values from "../assets/images/informacion/valoresicon1.png";
import objectives from "../assets/images/informacion/objetivosicon.png";
import vision from "../assets/images/informacion/visionicon.png";
import mission from "../assets/images/informacion/misionicon.png";

export default function Informacion() {
  return (
    <div style={{ marginTop: 24, flex: 1 }}>
      <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 24 }}>
        <Col xs={24} sm={18} md={18}>
          <TarjetaInformacion
            icono={<img src={values} alt="Valores" />}
            titulo="VALORES"
            descripcionColumnas={[
              `• Identificación plena de los valores de la UNAM como los valores de la FES Aragón.
• Generosidad en todas sus aportaciones al país.
• Responsabilidad en el estudio de problemas y temas nacionales.
• Compromiso con la sociedad mexicana.
• Compromiso con la formación de egresados de calidad a nivel Licenciatura y Posgrado.
`,
              `• Lealtad a las tareas de la UNAM.
              • Liderazgo institucional.
• Espíritu universitario.
• Respeto a la diversidad e ideologías.
• Respeto al medio ambiente.
• Unidad con las dependencias universitarias.
• Compañerismo entre el personal de la Facultad.`,
            ]}
          />
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={12} md={6}>
          <TarjetaInformacion
            icono={<img src={objectives} alt="Objetivos" />}
            titulo="OBJETIVOS"
            descripcion="Formar profesionales en Ingeniería en Computación líderes, con conocimientos teóricos y prácticos útiles para la solución de problemas computacionales que la sociedad demanda, comprometidos con las necesidades y desarrollo del país.
"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaInformacion
            icono={<img src={mission} alt="Misión" />}
            titulo="MISIÓN"
            descripcion="Formar profesionales con un gran espíritu universitario que estén comprometidos con el crecimiento del país, con capacidades para encontrar soluciones innovadoras y con un alto nivel de conocimientos en matemáicas, programación e ingeniería de software, procesamiento de la información, arquitectura de computadoras, redes, seguridad y control.
"
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <TarjetaInformacion
            icono={<img src={vision} alt="Visión" />}
            titulo="VISIÓN"
            descripcion="Ser una carrera de vanguardia que asegure la actualización constante de su planta docente, infraestructura y planes de estudio, para formar Ingenieros en Computación capaces de responder a los cambios que demande el país. 
"
          />
        </Col>
      </Row>
    </div>
  );
}
