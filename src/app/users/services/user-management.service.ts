import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from 'src/models/User';
import { UserAPI } from 'src/apis/user/user.api';

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  constructor(private _userAPI: UserAPI) {}

  actionFetchAllUser(): Observable<User[]> {
    return this._userAPI.fetchAllUser();
  }

  actionUpdateUserById(user: User): Observable<User> {
    return this._userAPI.updateUserById(user);
  }

  actionDeleteUser(user: User): Observable<User> {
    return this._userAPI.deleteUserById(user);
  }
}
