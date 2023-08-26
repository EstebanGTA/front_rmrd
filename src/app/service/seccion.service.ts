import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seccion } from '../model/seccion';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  secUrl = environment.seccionUrl;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Seccion[]> {
    return this.httpClient.get<Seccion[]>(`${this.secUrl}`);
  }

  public detail(id: number): Observable<Seccion[]> {
    return this.httpClient.get<Seccion[]>(`${this.secUrl}${id}`);
  }

}
