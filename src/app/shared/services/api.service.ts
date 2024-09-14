import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, elementAt, Observable } from 'rxjs';
import { HandleErrorService } from './handle-error.service';
import { baseURL } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);
  handleErrorService = inject(HandleErrorService);

  getRequest<T>(name: string) : Observable<T> {
    return this.http.get<T>(`${baseURL}${name}/`)
      // .pipe(
      //   catchError(this.handleErrorService.logErrorResponse));
  }
}
