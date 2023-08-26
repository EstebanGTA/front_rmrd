import { Component, OnInit } from '@angular/core';
import { InformeModel } from 'src/app/model/informe.model';
import { InformeService } from 'src/app/service/informe.service';


@Component({
  selector: 'app-lista-informes',
  templateUrl: './lista-informes.component.html',
  styleUrls: ['./lista-informes.component.css']
})
export class ListaInformesComponent implements OnInit {

  nombre = '';

  informeList: InformeModel[] = [];

  constructor(private informeService: InformeService) { }

  ngOnInit(): void {
    this.listarInformes();
  }

  listarInformes(): void {
    this.informeService.lista().subscribe({
      next: (informe: InformeModel[]) => {
        console.log(informe);
        this.informeList = informe;
        console.log(this.informeList);
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }

  borrarInforme(id_informe: number): void {
    if (confirm('¿Está seguro que desea eliminar el registro?')) {
      this.informeService.delete(id_informe).subscribe({
        next: (response: any) => {
          console.log('Informe eliminado correctamente', response);
          alert('Registro eliminado correctamente');
          this.listarInformes();
        },
        error: (error: any) => {
          console.error('Error al eliminar el registro', error);
          alert('Error al eliminar el registro');
        }
      });
    }
  }

}
