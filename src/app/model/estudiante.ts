import { TipoInstitucion } from "./tipo-institucion";
import { Seccion } from "./seccion";
import { Escuela } from "./escuela";
import { Colegio } from "./colegio";
import { Universidad } from "./universidad";
import { Sector } from "./sector";
import { Modalidad } from "./modalidad";
import { Schedule } from "./schedule";

export class Estudiante {
  id_estudiante = 0;
  nombre_estudiante = '';
  cedula_estudiante = '';
  email_estudiante = '';
  edad_estudiante = '';
  nombre_representante = '';
  cedula_representante = '';
  email_representante = '';
  numero_contacto = '';
  numero_contactor = '';
  institucion = '';
  tipo_institucionId: TipoInstitucion = new TipoInstitucion();
  seccionId: Seccion = new Seccion();
  nivelacion_materia = '';
  escuelaId: Escuela = new Escuela();
  colegioId: Colegio = new Colegio();
  universidadId: Universidad = new Universidad();
  ciudad = '';
  sectorId: Sector = new Sector();
  direccion = '';
  modalidadId: Modalidad = new Modalidad();
  horarioId: Schedule = new Schedule();
}
