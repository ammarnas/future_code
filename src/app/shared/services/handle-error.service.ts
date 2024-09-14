import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  public logErrorResponse(errorResponse: HttpErrorResponse): Observable<any> {
    if(errorResponse.status === 0){
      console.log(`A client side error occurred: ${errorResponse.status} - ${errorResponse.error}`);
    } else {
      console.log(`A back end side error occurred: ${errorResponse.status} - ${errorResponse.error}`);
    }
    return throwError(() => new Error("Something went wrong, pleas try again later"));
  }
}
