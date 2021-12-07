import { Injectable } from '@angular/core';
import { CartAPI } from 'src/apis/cart/cart.api';
import { Cart } from 'src/models/Cart';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public cartData: Cart[] = [];

  constructor(private _cartAPI: CartAPI) {
    this.cartData = this._cartAPI.cartData;
  }
}
