import { AbstractModel } from './AbstractModel';

export class Product extends AbstractModel {
  private _name!: string;
  private _price!: number;
  private _quantity!: number;
  private _thumbnail!: string;
  private _category!: string;
  private _status!: boolean;

  set name(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set price(price: number) {
    this._price = price;
  }
  get price(): number {
    return this._price;
  }
  set quantity(quantity: number) {
    this._quantity = quantity;
  }
  get quantity(): number {
    return this._quantity;
  }
  set thumbnail(thumbnail: string) {
    this._thumbnail = thumbnail;
  }
  get thumbnail(): string {
    return this._thumbnail;
  }
  set category(category: string) {
    this._category = category;
  }
  get category(): string {
    return this._category;
  }
  set status(status: boolean) {
    this._status = status;
  }
  get status(): boolean {
    return this._status;
  }
}
