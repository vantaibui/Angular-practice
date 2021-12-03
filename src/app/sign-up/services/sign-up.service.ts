import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersAPI } from 'src/apis/users/users.api';

// Model
import { User } from 'src/models/User';

// Constants
import * as Constants from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private _usersAPI: UsersAPI) {}

  signUp(user: User): Observable<User> {
    // return this._http.post<User>(`${Constants.BASE_URL}/register`, user);
    return this._usersAPI.signUp(user);
  }
}
