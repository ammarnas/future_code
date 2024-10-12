import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, finalize, Observable, of, tap } from "rxjs";
import { HandleErrorService } from "../services/handle-error.service";

@Injectable(  {
  providedIn: 'root'
})

export class LoggerInterceptor implements HttpInterceptor {

  handleErrorService = inject(HandleErrorService)
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = Date.now();
    let status: string;
    let response: string;
    let statusCode: number;

    return next.handle(req).pipe(
      tap(
        event => {
          status = '';
          if (event instanceof HttpResponse) {
            status = 'succeeded'
            response = event.body
            statusCode = event.status
        }
      },
        error => status = 'filed'
      ),
      finalize(() => {
        const elapsed = Date.now() - startTime;
        const message = `${req.method} ${req.urlWithParams} ${status} with status code ${statusCode} in ${elapsed}ms with result`
        this.logDetails(message);
        console.log(response);
      })
    )
  }

  logDetails(msg: string){
    console.log(`%c ${msg}`, 'color: green');
  }


}

