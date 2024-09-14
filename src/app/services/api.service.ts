import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseURL } from '../../environment/environment';
import { catchError, elementAt, Observable, throwError } from 'rxjs';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);
  handleErrorService = inject(HandleErrorService);

  getRequest<T>(name: string) : Observable<T> {
    return this.http.get<T>(`${baseURL}${name}/`)
      // .pipe(
      //   catchError(this.handleErrorService.handleError));
  }
}
