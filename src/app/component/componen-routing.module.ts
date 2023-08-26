import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PopUpComponent } from './pop-up/pop-up.component';
import { ListaEstudianteComponent } from './lista-estudiante/lista-estudiante.component';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ComponentComponent } from './component.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginGuard } from '../guards/login.guard';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { InformeComponent } from './informe/informe.component';
import { ListaInformesComponent } from './lista-informes/lista-informes.component';
import { VistaInformeComponent } from './vista-informe/vista-informe.component';

const routes: Routes = [
  {
    path: "component",
    component: ComponentComponent,
    children: [
      {
        path: "", component: LoginComponent, canActivate: [LoginGuard]
      },
      {
        path: "registro", component: RegistroComponent, canActivate: [LoginGuard]
      },
      {
        path: "usuariolist", component: ListaUsuariosComponent
      },
      {
        path: "inicio", component: InicioComponent
      },
      {
        path: "nuevo", component: PopUpComponent
      },
      {
        path: "lista", component: ListaEstudianteComponent
      },
      {
        path: "edit", component: EditarEstudianteComponent
      },
      {
        path: "informe", component: InformeComponent
      },
      {
        path: "listaInforme", component: ListaInformesComponent
      },
      {
        path: "detalle/:id_informe", component: VistaInformeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule{}
