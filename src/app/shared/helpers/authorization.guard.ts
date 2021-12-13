import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  // private _userLogin: any = localStorage.getItem('user_login');

  constructor(private _router: Router, private _commonService: CommonService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let currentUser = this._commonService.currentUserValue;

    if (currentUser) {
      // let currentUser: any = JSON.parse(this._userLogin);

      if (currentUser.role.toLowerCase().indexOf('admin') !== -1) {
        return true;
      } else {
        this._router.navigate(['/']);
        return false;
      }
    } else {
      this._router.navigate(['/sign-in']);
      return false;
    }
  }
}
