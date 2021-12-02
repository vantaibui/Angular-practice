import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/models/User';

// Constants
import * as Constants from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private _userLocal: any = localStorage.getItem(Constants.USER_LOGIN);

  private _userLogin: User = JSON.parse(this._userLocal);

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this._userLogin.firstName.toLowerCase().indexOf('administrator') !== -1
    ) {
      return true;
    } else {
      return false;
    }
  }
}
