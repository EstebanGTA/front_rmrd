import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformeModel } from '../model/informe.model';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  informeUrl = environment.informeUrl;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<InformeModel[]> {
    return this.httpClient.get<InformeModel[]>(`${this.informeUrl}`);
  }

  public detail(id: number): Observable<InformeModel> {
    return this.httpClient.get<InformeModel>(`${this.informeUrl}${id}`);
  }

  public save(informe: InformeModel): Observable<any> {
    return this.httpClient.post<any>(`${this.informeUrl}`, informe)
  }

  public update(id: number, informe: InformeModel): Observable<any> {
    return this.httpClient.patch<any>(`${this.informeUrl}${id}`, informe)
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.informeUrl}${id}`)
  }
}
