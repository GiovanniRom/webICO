import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Inicio from "./views/Inicio";
import Informacion from "./views/Informacion";
import Alumnos from "./views/Alumnos";
import AlumnosHorarios from "./views/alumnos/horarios";
import AlumnosCupos from "./views/alumnos/cupos";
import AlumnosRedes from "./views/alumnos/redes";
import AlumnosCalendario from "./views/alumnos/calendario";
import AlumnosTutores from "./views/alumnos/tutores";
import AlumnosExtraordinarios from "./views/alumnos/extraordinarios";
import AlumnosFormacion from "./views/alumnos/formacion";
import PlanEstudios from "./views/PlanEstudios";
import PlanIngreso from "./views/plan/ingreso";
import PlanEgreso from "./views/plan/egreso";
import PlanCuestionario from "./views/plan/cuestionario";
import Profesores from "./views/Profesores";
import ProfesoresCorreo from "./views/profesores/correo";
import Egresados from "./views/Egresados";
import LigasInteres from "./views/LigasInteres";
import Cultura from "./views/cultura/cultura";
import Bibliotecas from "./views/cultura/bibliotecas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Inicio />} />
        <Route path="informacion" element={<Informacion />} />
        <Route path="alumnos" element={<Alumnos />} />
        <Route path="alumnos/horarios" element={<AlumnosHorarios />} />
        <Route path="alumnos/cupos" element={<AlumnosCupos />} />
        <Route path="alumnos/redes" element={<AlumnosRedes />} />
        <Route path="alumnos/calendario" element={<AlumnosCalendario />} />
        <Route path="alumnos/tutores" element={<AlumnosTutores />} />
        <Route
          path="alumnos/extraordinarios"
          element={<AlumnosExtraordinarios />}
        />
        <Route path="alumnos/formacion" element={<AlumnosFormacion />} />
        <Route path="plan-estudios" element={<PlanEstudios />} />
        <Route path="plan/ingreso" element={<PlanIngreso />} />
        <Route path="plan/egreso" element={<PlanEgreso />} />
        <Route path="plan/cuestionario" element={<PlanCuestionario />} />
        <Route path="profesores" element={<Profesores />} />
        <Route path="profesores/correo" element={<ProfesoresCorreo />} />
        <Route path="egresados" element={<Egresados />} />
        <Route path="ligas-interes" element={<LigasInteres />} />
        <Route path="cultura" element={<Cultura />} />
        <Route path="bibliotecas" element={<Bibliotecas />} />
      </Route>
    </Routes>
  );
}

export default App;
