import { HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Url = '/auth/login';
  apiService = inject(ApiService);
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  login(username: string, password: string, expiresInMins: number = 30): Observable<any> {
    const body: LoginRequest = {
      username,
      password,
      expiresInMins
    };

    return this.apiService.postRequest(this.Url, body, {
      headers: this.headers,
      withCredentials: true // This corresponds to credentials: 'include'
    });
  }

}
export interface LoginRequest {
  username: string;
  password: string;
  expiresInMins: number;
}
export interface LoginResponse {
  accessToken: string
  refreshToken: string
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
}
