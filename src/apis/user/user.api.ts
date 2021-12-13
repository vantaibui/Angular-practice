import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/models/User';

import * as Constants from '../../constants';

@Injectable({ providedIn: 'root' })
export class UserAPI {
  constructor(private _http: HttpClient) {}

  authenticate(username: string, password: string): Observable<User> {
    const userLogin = { username: username, password: password };

    return this._http.post<User>(`${Constants.BASE_URL}/login`, userLogin);
  }

  signUp(user: User): Observable<User> {
    return this._http.post<User>(`${Constants.BASE_URL}/register`, user);
  }

  fetchAllUser(): Observable<User[]> {
    return this._http.get<User[]>(`${Constants.BASE_URL}/users`);
  }
  fetchUserById(id: number): Observable<User> {
    return this._http.get<User>(`${Constants.BASE_URL}/users/${id}`);
  }

  updateUserById(user: User): Observable<User> {
    return this._http.patch<User>(
      `${Constants.BASE_URL}/users/${user.id}`,
      user
    );
  }

  deleteUserById(user: User): Observable<User> {
    return this._http.patch<User>(
      `${Constants.BASE_URL}/users/${user.id}`,
      user
    );
  }
}
