import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UsersAPI } from 'src/apis/users/users.api';
import { User } from 'src/models/User';

import * as Constants from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject!: BehaviorSubject<User>;
  private currentUser!: Observable<User>;
  private _userLogin: any = localStorage.getItem(`${Constants.USER_LOGIN}`);

  constructor() {
    if (!this._userLogin) {
      this.currentUserSubject = new BehaviorSubject<User>(
        JSON.parse(this._userLogin)
      );
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  public get currentUserValue(): User {
    if (this.currentUserSubject) {
      return this.currentUserSubject.value;
    }
    return this.currentUserSubject;
  }

  // private _userLogin: any = localStorage.getItem(`${Constants.USER_LOGIN}`);
  // private currentUser: User = new User();

  // constructor() {
  //   if (this._userLogin) {
  //     this.currentUser = JSON.parse(this._userLogin);
  //   }
  // }

  // public get currentUserValue(): User {
  //   console.log(this.currentUser);
  //   return this.currentUser;
  // }

  logout(): void {
    localStorage.removeItem(`${Constants.USER_LOGIN}`);
    location.reload();
  }
}