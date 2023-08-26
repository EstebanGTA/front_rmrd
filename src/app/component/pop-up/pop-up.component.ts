import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Estudiante } from 'src/app/model/estudiante';
import { EstudianteService } from 'src/app/service/estudiante.service';
import { TipoInstitucion } from 'src/app/model/tipo-institucion';
import { TipoInstitucionService } from 'src/app/service/tipo-institucion.service';
import { Seccion } from 'src/app/model/seccion';
import { SeccionService } from 'src/app/service/seccion.service';
import { Escuela } from 'src/app/model/escuela';
import { EscuelaService } from 'src/app/service/escuela.service';
import { Colegio } from 'src/app/model/colegio';
import { ColegioService } from 'src/app/service/colegio.service';
import { Universidad } from 'src/app/model/universidad';
import { UniversidadService } from 'src/app/service/universidad.service';
import { Sector } from 'src/app/model/sector';
import { SectorService } from 'src/app/service/sector.service';
import { Modalidad } from 'src/app/model/modalidad';
import { ModalidadService } from 'src/app/service/modalidad.service';
import { Schedule } from 'src/app/model/schedule';
import { ScheduleService } from 'src/app/service/schedule.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  nombre_e = '';
  cedula_e = '';
  email_e = '';
  edad_e = '';
  nombre_r = '';
  cedula_r = '';
  email_r = '';
  numero_contacto = '';
  numero_contactoR = '';
  institucion = '';
  tipo_institucionId = 0;
  seccionId = 0;
  nivelacion_materia = '';
  escuelaId = 0;
  colegioId = 0;
  universidadId = 0;
  ciudad = '';
  sectorId = 0;
  direccion = '';
  modalidadId = 0;
  horarioId = 0;

  tipoInstList: TipoInstitucion[] = [];
  seccionList: Seccion[] = [];
  escuelaList: Escuela[] = [];
  colegioList: Colegio[] = [];
  universidadList: Universidad[] = [];
  sectorList: Sector[] = [];
  modalidadList: Modalidad[] = [];
  horarioList: Schedule[] = [];

  isAdmin: boolean = true;

  constructor(
    private toastr: ToastrService,
    private estudianteService: EstudianteService,
    private tipoInstitucionService: TipoInstitucionService,
    private seccionService: SeccionService,
    private escuelaService: EscuelaService,
    private colegioService: ColegioService,
    private universidadService: UniversidadService,
    private sectorService: SectorService,
    private modalidadService: ModalidadService,
    private horarioService: ScheduleService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.cargarTipoInst();
    this.cargarSeccion();
    this.cargarEscuela();
    this.cargarColegio();
    this.cargarUni();
    this.cargarSector();
    this.caragarModa();
    this.cargarHorario();

    this.isAdmin = this.tokenService.isAdmin() ?? false;
  }

  cargarTipoInst(): void {
    this.tipoInstitucionService.lista().subscribe({
      next: (data: TipoInstitucion[]) => {
        this.tipoInstList = data;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  cargarSeccion(): void {
    this.seccionService.lista().subscribe({
      next: (data: Seccion[]) => {
        this.seccionList = data;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  cargarEscuela(): void {
    this.escuelaService.lista().subscribe({
      next: (data: Escuela[]) => {
        this.escuelaList = data;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  cargarColegio(): void {
    this.colegioService.lista().subscribe({
      next: (data: Colegio[]) => {
        this.colegioList = data;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  cargarUni(): void {
    this.universidadService.lista().subscribe({
      next: (data: Universidad[]) => {
        this.universidadList = data;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  cargarSector(): void {
    this.sectorService.lista().subscribe({
      next: (data: Sector[]) => {
        this.sectorList = data;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  caragarModa(): void {
    this.modalidadService.lista().subscribe({
      next: (data: Modalidad[]) => {
        this.modalidadList = data;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  async cargarHorario(): Promise<void> {
    this.horarioService.lista().subscribe({
      next: async (data: Schedule[]) => {
        this.horarioList = data;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  async onCreate(): Promise<void> {
    const estudi = new Estudiante();
    estudi.nombre_estudiante = this.nombre_e;
    estudi.cedula_estudiante = this.cedula_e;
    estudi.email_estudiante = this.email_e;
    estudi.edad_estudiante = this.edad_e;
    estudi.nombre_representante = this.nombre_r;
    estudi.cedula_representante = this.cedula_r
    estudi.email_representante = this.email_r;
    estudi.numero_contacto = this.numero_contacto;
    estudi.numero_contactor = this.numero_contactoR;
    estudi.institucion = this.institucion;
    estudi.tipo_institucionId.id_tipo_institucion = this.tipo_institucionId;
    estudi.seccionId.id_seccion = this.seccionId;
    estudi.nivelacion_materia = this.nivelacion_materia;
    estudi.escuelaId.id_escuela = this.escuelaId;
    estudi.colegioId.id_colegio = this.colegioId;
    estudi.universidadId.id_universidad = this.universidadId;
    estudi.ciudad = this.ciudad;
    estudi.sectorId.id_sector = this.sectorId;
    estudi.direccion = this.direccion;
    estudi.modalidadId.id_modalidad = this.modalidadId;
    estudi.horarioId.id_horario = this.horarioId;

    this.estudianteService.save(estudi).subscribe({
      next: (data: any) => {
        this.toastr.success('Estudiante creado', 'Ok', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      },
      error: (err: any) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    })
  }

}
