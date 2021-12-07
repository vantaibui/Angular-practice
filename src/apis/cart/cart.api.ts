import { Injectable } from '@angular/core';

import * as Constants from 'src/constants';
import { Product } from 'src/models/Product';
import { Cart } from 'src/models/Cart';

@Injectable({ providedIn: 'root' })
export class CartAPI {
  private _localCheck: any = localStorage.getItem(`${Constants.CART}`);

  public cartData: Cart[] = JSON.parse(this._localCheck)
    ? JSON.parse(this._localCheck)
    : [];

  public numberOfProductInCart: number = 0;

  constructor() {}

  findProductInCart = (product: Product, cart: Cart[]) => {
    let result = -1;

    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].product.id === product.id) {
          result = i;
          break;
        }
      }
    }
    return result;
  };

  addProductToCart(product: Product, quantity: number): Cart[] {
    let index = this.findProductInCart(product, this.cartData);
    if (index !== -1) {
      this.cartData[index].quantity += quantity;
    } else {
      // this.cartData.push({ product: product, quantity: quantity });

      this.cartData.push(new Cart(product, quantity));
    }
    localStorage.setItem(`${Constants.CART}`, JSON.stringify(this.cartData));
    this.numberOfProductInCart = this.cartData.length;

    return this.cartData;
  }

  deleteProductInCart(product: Product): Cart[] {
    let index: number = this.findProductInCart(product, this.cartData);
    if (index !== -1) {
      this.cartData.splice(index, 1);
    }

    localStorage.setItem(`${Constants.CART}`, JSON.stringify(this.cartData));
    this.numberOfProductInCart = this.cartData.length;

    return this.cartData;
  }

  updateProductInCart(product: Product, quantity: number): Cart[] {
    let index = this.findProductInCart(product, this.cartData);
    if (index !== -1) {
      this.cartData[index].quantity = quantity;
    }

    localStorage.setItem(`${Constants.CART}`, JSON.stringify(this.cartData));
    this.numberOfProductInCart = this.cartData.length;

    return this.cartData;
  }
}
