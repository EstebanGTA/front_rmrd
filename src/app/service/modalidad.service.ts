import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modalidad } from '../model/modalidad';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  modaUrl = environment.modalidadUrl

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Modalidad[]> {
    return this.httpClient.get<Modalidad[]>(`${this.modaUrl}`);
  }

  public detail(id: number): Observable<Modalidad[]> {
    return this.httpClient.get<Modalidad[]>(`${this.modaUrl}${id}`);
  }

}
