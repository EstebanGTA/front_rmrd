export class LoginUserDto {
  clave = '';
  cedula = '';


  constructor(cedula: string, clave: string) {
    this.cedula = cedula;
    this.clave = clave;
  }
}
