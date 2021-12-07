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
import { User } from 'src/models/User';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  private _userLogin: any = localStorage.getItem('user_login');
  private _currentUser!: User;

  constructor() {
    this._currentUser = JSON.parse(this._userLogin);
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this._currentUser) {
      const headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer ' + this._currentUser.token);

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
