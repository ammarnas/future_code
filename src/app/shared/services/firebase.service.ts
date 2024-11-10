import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { singIn, singUp } from '../../firebase-url.local';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  apiService = inject(ApiService);

  // if the parameter name in the request different of the expected from the api we use the method
  // 'returnSecureToken': true
  register(email: string, password: string): Observable<any> {
    return this.apiService.postRequest(singUp, {
      email, password, 'returnSecureToken': true
    }, { 'Content-Type': 'application/json' });
  }

  login(email: string, password: string): Observable<any> {
    return this.apiService.postRequest(singIn, {
      email, 'password': password, 'returnSecureToken': true
    }, { 'Content-Type': 'application/json' });
  }
}
