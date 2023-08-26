import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginUserDto } from '../model/login-user.dto';
import { Observable } from 'rxjs';
import { NuevoUserModel } from '../model/nuevo-user.model';
import { TokenModel } from '../model/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = environment.authUrl;

  constructor(private httpClient: HttpClient) { }

  login(dto: LoginUserDto): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'login', dto)
  }

  registro(dto: NuevoUserModel): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'nuevo', dto)
  }

  refresh(dto: TokenModel): Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'refresh', dto)
  }

  public update(id_usuario: number, user: NuevoUserModel): Observable<any> {
    return this.httpClient.patch<any>(`${this.authUrl}${id_usuario}`, user);
  }

  public delete(id_usuario: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.authUrl}${id_usuario}`);
  }

  public detail(id_usuario: number): Observable<NuevoUserModel> {
    return this.httpClient.get<NuevoUserModel>(`${this.authUrl}${id_usuario}`);
  }

  public lista(): Observable<NuevoUserModel[]> {
    return this.httpClient.get<NuevoUserModel[]>(`${this.authUrl}`);
  }
}
