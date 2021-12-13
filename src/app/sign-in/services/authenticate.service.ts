import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAPI } from 'src/apis/user/user.api';

// Model
import { User } from 'src/models/User';

import * as Constants from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private _userAPI: UserAPI) {}

  authenticate(username: string, password: string): Observable<User> {
    // const userLogin = { username: username, password: password };
    // return this._http.post<User>(`${Constants.BASE_URL}/login`, userLogin);

    return this._userAPI.authenticate(username, password);
  }
}
