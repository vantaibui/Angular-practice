import { AbstractModel } from './AbstractModel';
import { Product } from './Product';

export class Cart extends AbstractModel {
  public product!: Product;
  public quantity!: number;

  constructor(product: Product, quantity: number) {
    super();
    this.product = product;
    this.quantity = quantity;
  }

  // set product(product: Product) {
  //   this._product = product;
  // }

  // get product(): Product {
  //   return this._product;
  // }

  // set quantity(quantity: number) {
  //   // console.log(quantity);
  //   this._quantity = quantity;
  // }

  // get quantity(): number {
  //   return this._quantity;
  // }
}
