import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from '../model/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  sectorUrl = environment.sectorUrl

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Sector[]> {
    return this.httpClient.get<Sector[]>(`${this.sectorUrl}`);
  }

  public detail(id: number): Observable<Sector[]> {
    return this.httpClient.get<Sector[]>(`${this.sectorUrl}${id}`);
  }

}
