import { Component, OnInit } from '@angular/core';
// Model y Service de cada uno para el crud estudiante
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
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent implements OnInit {

  estudianteList: Estudiante[] = [];
  tipoInstList: TipoInstitucion[] = [];
  seccionList: Seccion[] = [];
  escuelaList: Escuela[] = [];
  colegioList: Colegio[] = [];
  universidadList: Universidad[] = [];
  sectorList: Sector[] = [];
  modalidadList: Modalidad[] = [];
  horarioList: Schedule[] = [];

  isAdmin: boolean = true;

  isUser: boolean = true;

  constructor(
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
    this.cargarEstudiante();
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

  cargarEstudiante(): void {
    this.estudianteService.lista().subscribe({
      next: (data: Estudiante[]) => {
        this.estudianteList = data;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
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

  cargarHorario(): void {
    this.horarioService.lista().subscribe({
      next: (data: Schedule[]) => {
        this.horarioList = data;
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  borrarRegistro(id_estudiante: number): void {
    if (confirm('¿Está seguro que desea eliminar el registro?')) {
      this.estudianteService.delete(id_estudiante).subscribe({
        next: (response: any) => {
          console.log('Registro eliminado correctamente', response);
          alert('Registro eliminado correctamente');
          this.cargarEstudiante();
        },
        error: (error: any) => {
          console.error('Error al eliminar el registro', error);
          alert('Error al eliminar el registro');
        }
      });
    }
  }

}
