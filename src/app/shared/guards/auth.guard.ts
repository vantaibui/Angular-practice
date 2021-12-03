import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';

// Constants
import * as Constants from '../../../constants';

import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private _userLocal: any = localStorage.getItem(Constants.USER_LOGIN);

  private _userLogin: User = JSON.parse(this._userLocal);

  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const currentUser = this._authenticationService.currentUserValue;
    console.log(currentUser);
    if (currentUser) {
      // Kiểm tra route có bị hạn chế không
      // if (
      //   route.data.roles &&
      //   route.data.roles.indexOf(currentUser.role) === -1
      // ) {
      //   // Role không được authorised thì redirect to home
      //   this._router.navigate(['/']);
      //   return false;
      // }
      // // Role authorised
      // return true;

      return true;
    }
    this._router.navigate(['/sign-in']);
    return false;
  }
}
