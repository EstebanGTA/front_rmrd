import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InformeModel } from 'src/app/model/informe.model';
import { InformeService } from 'src/app/service/informe.service';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent {

  estudiante = '';
  fecha: Date = new Date;
  instructor = '';
  hora = '';
  codigo = '';
  materia = '';
  tema_general = '';
  tema_secundario = '';
  actitud_estudiante = '';
  tareas_enviadas = '';
  bases = '';
  tareas = '';
  evolucion = '';
  hora_fecha_llamada: Date = new Date;
  representante = '';
  observaciones = '';
  realizado_por = '';

  constructor(
    private toastr: ToastrService,
    private informeService: InformeService
  ) { }

  async onCreate(): Promise<void> {
    const info = new InformeModel();
    info.estudiante = this.estudiante;
    info.fecha = this.fecha;
    info.instructor = this.instructor;
    info.hora = this.hora;
    info.codigo = this.codigo;
    info.materia = this.materia;
    info.tema_general = this.tema_general;
    info.tema_secundario = this.tema_secundario;
    info.actitud_estudiante = this.actitud_estudiante;
    info.tareas_enviadas = this.tareas_enviadas;
    info.bases = this.bases;
    info.tareas = this.tareas;
    info.evolucion = this.evolucion;
    info.hora_fecha_llamada = this.hora_fecha_llamada;
    info.representante = this.representante;
    info.observaciones = this.observaciones;
    info.realizado_por = this.realizado_por;

    this.informeService.save(info).subscribe({
      next: (data: any) => {
        this.toastr.success('Informe creado', 'Ok', {
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
