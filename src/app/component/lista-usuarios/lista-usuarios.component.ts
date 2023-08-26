import { Component, OnInit } from '@angular/core';
import { NuevoUserModel } from 'src/app/model/nuevo-user.model';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarioList: NuevoUserModel[] = [];

  usuario: NuevoUserModel = new NuevoUserModel();

  isAdmin: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.listarUsuarios();

    this.isAdmin = this.tokenService.isAdmin() ?? false;
  }

  listarUsuarios(): void {
    this.authService.lista().subscribe({
      next: (usuario: NuevoUserModel[]) => {
        console.log(usuario);
        this.usuarioList = usuario;
        console.log(this.usuarioList);
      },
      error: (err: Error) => {
        console.log(err);
      }
    });
  }

  borrarRegistro(id_usuario: number): void {
    if (confirm('¿Está seguro que desea eliminar el registro?')) {
      this.usuarioService.delete(id_usuario).subscribe({
        next: (response: any) => {
          console.log('Usuario eliminado correctamente', response);
          alert('Registro eliminado correctamente');
          this.listarUsuarios();
        },
        error: (error: any) => {
          console.error('Error al eliminar el registro', error);
          alert('Error al eliminar el registro');
        }
      });
    }
  }

}
