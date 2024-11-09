import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { singUp } from '../../firebase-url.local';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://fakestoreapi.com/users';
  private body = {
    "email": "John@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "address": {
      "city": "kilcoole",
      "street": "7835 new road",
      "number": 3,
      "zipcode": "12926-3874",
      "geolocation": {
        "lat": "-37.3159",
        "long": "81.1496"
      }
    },
    "phone": "1-570-236-7033"
  };
  http = inject(HttpClient);
  apiService = inject(ApiService);

  login(username: string, password: string) : Observable<number>{
    return this.http.post<any>(this.apiUrl, this.body);
  }
  // if the parameter name in the request different of the expected from the api we use the method
  // 'returnSecureToken': true
  singUp(email: string, password: string): Observable<any> {
    return this.apiService.postRequest(singUp, {
      email, password, 'returnSecureToken': true
    }, { 'Content-Type': 'application/json' });
  }
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
