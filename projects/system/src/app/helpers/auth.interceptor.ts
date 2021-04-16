import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const baseUrl = environment.baseUrl;
    let url: string = '';

    if (!request.url.startsWith('http')) {
      url = `${baseUrl}${request.url}`;

      // request = request.clone({
      //   withCredentials: true,
      // });
    }

    // if (localStorage.getItem('sirecoToken') != null) {
    //   request = request.clone({
    //     headers: request.headers.set(
    //       'Authorization',
    //       localStorage.getItem('sirecoToken')!
    //     ),
    //   });
    // }

    request = request.clone({
      url: url,
    });

    return next.handle(request);
  }
}
