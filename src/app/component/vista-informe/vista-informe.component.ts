import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InformeModel } from 'src/app/model/informe.model';
import { InformeService } from 'src/app/service/informe.service';

@Component({
  selector: 'app-vista-informe',
  templateUrl: './vista-informe.component.html',
  styleUrls: ['./vista-informe.component.css']
})
export class VistaInformeComponent implements OnInit {

  info: InformeModel | null = null;

  constructor(
    private informeService: InformeService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id_informe"];
    this.informeService.detail(id).subscribe(
      (data: InformeModel) => {
        this.info = data;
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        this.volver();
      }
    )
  }

  volver(): void {
    this.router.navigate(['/component/listaInforme']);
  }
}
