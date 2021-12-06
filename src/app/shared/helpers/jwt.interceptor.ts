import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  private _userLogin: any = localStorage.getItem('user_login');

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currentUser = JSON.parse(this._userLogin);

    if (currentUser) {
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + currentUser.token);

      request = request.clone({ headers: headers });
    }

    return next.handle(request);
  }
}

export const JwtInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: JWTInterceptor,
  multi: true,
};
