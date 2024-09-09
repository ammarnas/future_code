import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseURL } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);

  getRequest<T>(name: string) : Observable<T> {
    return this.http.get<T>(`${baseURL}${name}/`);
  }
}
