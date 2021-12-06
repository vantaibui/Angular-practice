import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/models/User';
import { Observable } from 'rxjs';

import * as Constants from '../../constants';

@Injectable({ providedIn: 'root' })
export class UsersAPI {
  constructor(private _http: HttpClient) {}

  authenticate(username: string, password: string): Observable<User> {
    const userLogin = { username: username, password: password };

    return this._http.post<User>(`${Constants.BASE_URL}/login`, userLogin);
  }

  signUp(user: User): Observable<User> {
    return this._http.post<User>(`${Constants.BASE_URL}/register`, user);
  }

  fetchAllUser(): Observable<User> {
    return this._http.get<User>(`${Constants.BASE_URL}/users`);
  }
  fetchUserByID(id: number): Observable<User> {
    return this._http.get<User>(`${Constants.BASE_URL}/users/${id}`);
  }
}
