import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Escuela } from '../model/escuela';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {

  escuelaUrl = environment.escuelaUrl;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Escuela[]> {
    return this.httpClient.get<Escuela[]>(`${this.escuelaUrl}`);
  }

  public detail(id: number): Observable<Escuela[]> {
    return this.httpClient.get<Escuela[]>(`${this.escuelaUrl}${id}`);
  }

}
