import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, retry } from "rxjs";
import { HandleErrorService } from "../services/handle-error.service";

@Injectable(  {
  providedIn: 'root'
})

export class HandleErrorInterceptor implements HttpInterceptor {

  handleErrorService = inject(HandleErrorService)
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(3),
      catchError(this.handleErrorService.logErrorResponse)
    )
  }

}

