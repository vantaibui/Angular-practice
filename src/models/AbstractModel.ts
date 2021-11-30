export abstract class AbstractModel {
  protected _id!: number;
  protected _createdAt!: number;
  protected _modifiedAt!: number;

  set id(id: number) {
    this._id = id;
  }
  get id() {
    return this._id;
  }

  set createdAt(createdAt: number) {
    this._createdAt = createdAt;
  }
  get createdAt(): number {
    return this._createdAt;
  }
  set modifiedAt(modifiedAt: number) {
    this._modifiedAt = modifiedAt;
  }
  get modifiedAt(): number {
    return this._modifiedAt;
  }
}
