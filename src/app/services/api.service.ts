import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { baseURL } from '../../environment/environment';
import { catchError, elementAt, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);

  getRequest<T>(name: string) : Observable<T> {
    return this.http.get<T>(`${baseURL}${name}/`)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<any> {
    if(errorResponse.status === 0){
      console.log(`A client side error occurred: ${errorResponse.status} - ${errorResponse.error}`);
    } else {
      console.log(`A back end side error occurred: ${errorResponse.status} - ${errorResponse.error}`);
    }
    return throwError(() => new Error("Something went wrong, pleas try again later"));
  }
}
