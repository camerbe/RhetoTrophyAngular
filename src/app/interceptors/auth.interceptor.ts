import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request=request.clone({
      setHeaders:{
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Headers':'*',
        'Content-Type':'application/json',
        'Accept':'*/*',
        
      },
    })
    return next.handle(request);
  }
}
