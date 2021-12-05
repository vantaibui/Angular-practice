import { AbstractModel } from './AbstractModel';

export class Category extends AbstractModel {
  private _code!: string;
  private _name!: string;
  private _thumbnail!: string;

  set code(code: string) {
    this._code = code;
  }
  get code(): string {
    return this._code;
  }
  set name(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
  set thumbnail(thumbnail: string) {
    this._thumbnail = thumbnail;
  }
  get thumbnail(): string {
    return this._thumbnail;
  }
}
