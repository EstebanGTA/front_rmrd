import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule } from './componen-routing.module';

import { ComponentComponent } from './component.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ListaEstudianteComponent } from './lista-estudiante/lista-estudiante.component';
import { EditarEstudianteComponent } from './editar-estudiante/editar-estudiante.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { InformeComponent } from './informe/informe.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { ListaInformesComponent } from './lista-informes/lista-informes.component';
import { VistaInformeComponent } from './vista-informe/vista-informe.component';
import { BuscadorInformePipe } from '../pipes/buscador-informe.pipe';

@NgModule({
  declarations:[
    ComponentComponent,
    EditarEstudianteComponent,
    ListaEstudianteComponent,
    LoginComponent,
    PopUpComponent,
    RegistroComponent,
    NavbarComponent,
    InicioComponent,
    InformeComponent,
    ListaUsuariosComponent,
    ListaInformesComponent,
    VistaInformeComponent,
    BuscadorInformePipe
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    FormsModule
  ]
})
export class ComponentModule {}
