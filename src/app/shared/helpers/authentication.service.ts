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
    if (this._userLogin) {
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
}
