import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersAPI } from 'src/apis/users/users.api';

// Model
import { User } from 'src/models/User';

// Constant
import * as Constant from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private _usersAPI: UsersAPI) {}

  authenticate(username: string, password: string): Observable<User> {
    // const userLogin = { username: username, password: password };
    // return this._http.post<User>(`${Constants.BASE_URL}/login`, userLogin);

    return this._usersAPI.authenticate(username, password);
  }
}
