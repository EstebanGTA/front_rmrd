import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colegio } from '../model/colegio';

@Injectable({
  providedIn: 'root'
})
export class ColegioService {

  colegioUrl = environment.colegioUrl

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Colegio[]> {
    return this.httpClient.get<Colegio[]>(`${this.colegioUrl}`);
  }

  public detail(id: number): Observable<Colegio[]> {
    return this.httpClient.get<Colegio[]>(`${this.colegioUrl}${id}`);
  }

}
