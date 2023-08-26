import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  Url = environment.estudianteUrl;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(`${this.Url}`);
  }

  public detail(id: number): Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(`${this.Url}${id}`);
  }

  public save(estudiante: Estudiante): Observable<any> {
    return this.httpClient.post<any>(`${this.Url}`, estudiante)
  }

  public update(id: number, estudiante: Estudiante): Observable<any> {
    return this.httpClient.patch<any>(`${this.Url}${id}`, estudiante)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.Url}${id}`)
  }

}
