import { Component, OnInit } from '@angular/core';
import { CartAPI } from 'src/apis/cart/cart.api';
import { Cart } from 'src/models/Cart';
import { Product } from 'src/models/Product';
import { CommonService } from '../shared/helpers/common.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  private _cart: any = localStorage.getItem('cart');

  public cartData: Cart[] = JSON.parse(this._cart)
    ? JSON.parse(this._cart)
    : [];

  public total: number = this.cartData.reduce((sum, item, index) => {
    return (sum += item.product.price * item.quantity);
  }, 0);

  constructor(
    private _cartAPI: CartAPI,
    private _commonService: CommonService
  ) {}

  ngOnInit(): void {}

  onDeleteProductInCart(product: Product): void {
    this._cartAPI.deleteProductInCart(product);
    this.cartData = this._cartAPI.cartData;
    this.total = this.cartData.reduce((sum, item, index) => {
      return (sum += item.product.price * item.quantity);
    }, 0);

    this._commonService.quantityProductInCart$.next(this.cartData.length);
  }

  onUpdateProductInCart(product: Product, quantity: number): void {
    if (quantity > 0) {
      this._cartAPI.updateProductInCart(product, quantity);

      this.cartData = this._cartAPI.cartData;
      this.total = this.cartData.reduce((sum, item, index) => {
        return (sum += item.product.price * item.quantity);
      }, 0);
    }
  }
}
