import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  authURL = environment.authUrl;

  constructor(private httpClient: HttpClient) { }

  public delete(id_usuario: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.authURL}${id_usuario}`);
  }
}
