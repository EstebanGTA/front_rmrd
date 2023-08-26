import { RolModel } from "./rol.model";

export class NuevoUserModel{
  id_usuario = 0;
  nombres_usuario = '';
  cedula = '';
  password = '';
  rolId: RolModel[] = [];
}
