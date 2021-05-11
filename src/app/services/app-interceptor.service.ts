import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEventType,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler){
    const modifiedReq = req.clone({
        headers: req.headers.append('courses', 'testing')
    })
    console.log('http request on his way')
    return next.handle(modifiedReq)
  }
}


