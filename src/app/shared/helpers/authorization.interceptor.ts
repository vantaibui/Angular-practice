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
import { AuthenticationService } from '../services/authentication.service';

import * as Constants from '../../../constants';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private _authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const currentUser = this._authenticationService.currentUserValue;

    console.log(currentUser);

    const isLoggedIn = currentUser && currentUser.token;
    const isApiUrl = request.url.startsWith(`${Constants.BASE_URL}`);

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'Bearer ' + currentUser.token ? currentUser.token : ''
      );

    if (isLoggedIn && isApiUrl) {
      request = request.clone({ headers: headers });
    }

    return next.handle(request);
  }
}

export const Authorization = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthorizationInterceptor,
  multi: true,
};
