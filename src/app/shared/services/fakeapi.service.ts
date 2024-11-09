import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
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

  apiService = inject(ApiService);

  login(username: string, password: string) : Observable<any> {
    return this.apiService.postRequest(this.apiUrl, this.body);
  }
}
