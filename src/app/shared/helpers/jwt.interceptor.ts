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

import { AuthenticationService } from './authentication.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private _authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currentUser = this._authenticationService.currentUserValue;

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
