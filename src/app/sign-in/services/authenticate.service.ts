import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Model
import { User } from 'src/models/User';

// Constant
import * as Constant from '../../../constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private _http: HttpClient) {}

  authenticate(username: string, password: string): Observable<User> {
    const userLogin = { username: username, password: password };

    return this._http.post<User>(`${Constant.BASE_URL}/login`, userLogin);
  }
}
