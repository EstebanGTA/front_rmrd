import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoInstitucion } from '../model/tipo-institucion';

@Injectable({
  providedIn: 'root'
})
export class TipoInstitucionService {

  tipoInstUrl = environment.tipoInstitucionUrl;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<TipoInstitucion[]> {
    return this.httpClient.get<TipoInstitucion[]>(`${this.tipoInstUrl}`);
  }

  public detail(id: number): Observable<TipoInstitucion[]> {
    return this.httpClient.get<TipoInstitucion[]>(`${this.tipoInstUrl}${id}`);
  }

}
