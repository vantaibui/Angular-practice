import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/models/Cart';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private _localCheck: any = localStorage.getItem('cart');

  public cartData: Cart[] = JSON.parse(this._localCheck)
    ? JSON.parse(this._localCheck)
    : [];

  public quantityProductInCart$ = new BehaviorSubject<number>(
    this.cartData.length
  );

  constructor() {}
}
