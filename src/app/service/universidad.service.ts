import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universidad } from '../model/universidad';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  universidadUrl = environment.universidadUrl

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Universidad[]> {
    return this.httpClient.get<Universidad[]>(`${this.universidadUrl}`);
  }

  public detail(id: number): Observable<Universidad[]> {
    return this.httpClient.get<Universidad[]>(`${this.universidadUrl}${id}`);
  }

}
