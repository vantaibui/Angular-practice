import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/models/User';

// Constants
import * as Constants from '../../../constants';

const userLocal: any = localStorage.getItem(`${Constants.USER_LOGIN}`);

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject!: BehaviorSubject<User>;
  public currentUser!: Observable<User>;

  constructor(private _http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(userLocal));

    // Cho phép người dùng khác đăng ký vào currentUser nhưng không cho phép chúng publish ra currentUserSubject
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Cho phép lấy thông tin user mà không cần phải vo currentUserSubject
  public get currentUserValue(): User {
    return this.currentUserSubject.value
      ? this.currentUserSubject.value
      : new User();
  }

  logout(): void {
    localStorage.removeItem('user_login');
    this.currentUserSubject.next(new User());
  }
}
