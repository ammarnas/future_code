import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  login(username: string, password: string) : Observable<number>{
    return this.http.post<any>(this.apiUrl, this.body);
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
