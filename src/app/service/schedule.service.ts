import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schedule } from '../model/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  horarioUrl = environment.horarioUrl;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(`${this.horarioUrl}`);
  }

  public detail(id: number): Observable<Schedule[]> {
    return this.httpClient.get<Schedule[]>(`${this.horarioUrl}${id}`);
  }

}
