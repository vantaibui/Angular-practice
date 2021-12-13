import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Model
import { User } from 'src/models/User';
import { Cart } from 'src/models/Cart';

// Constant
import * as Constants from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  // User
  private _checkUserLocal: any = localStorage.getItem(
    `${Constants.USER_LOGIN}`
  );

  public userLogin: User = JSON.parse(this._checkUserLocal)
    ? JSON.parse(this._checkUserLocal)
    : null;

  public currentUserSubject$ = new BehaviorSubject<User>(this.userLogin);

  public get currentUserValue(): User {
    return this.currentUserSubject$.value;
  }

  public logout(): void {
    localStorage.removeItem(`${Constants.USER_LOGIN}`);
    localStorage.removeItem(`${Constants.CART}`);
    this.currentUserSubject$.next(this.userLogin);

    location.reload();
  }

  // Cart
  private _checkCartLocal: any = localStorage.getItem(`${Constants.CART}`);

  public cartData: Cart[] = JSON.parse(this._checkCartLocal)
    ? JSON.parse(this._checkCartLocal)
    : [];

  public quantityProductInCart$ = new BehaviorSubject<number>(
    this.cartData.length
  );
}
