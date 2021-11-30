import { AbstractModel } from './AbstractModel';

export class User extends AbstractModel {
  private _username!: string;
  private _password!: string;

  private _firstName!: string;
  private _lastName!: string;
  private _avatar!: string;
  private _gender!: string;
  private _birthday!: string;
  private _email!: string;
  private _phone!: string;

  private _role!: string;

  constructor() {
    super();
  }

  set username(username: string) {
    this._username = username;
  }
  get username(): string {
    return this._username;
  }
  set password(password: string) {
    this._password = password;
  }
  get password(): string {
    return this._password;
  }
  set firstName(firstName: string) {
    this._firstName = firstName;
  }
  get firstName(): string {
    return this._firstName;
  }
  set lastName(lastName: string) {
    this._lastName = lastName;
  }
  get lastName(): string {
    return this._lastName;
  }
  set avatar(avatar: string) {
    this._avatar = avatar;
  }
  get avatar(): string {
    return this._avatar;
  }
  set gender(gender: string) {
    this._gender = gender;
  }
  get gender(): string {
    return this._gender;
  }
  set birthday(birthday: string) {
    this._birthday = birthday;
  }
  get birthday(): string {
    return this._birthday;
  }
  set email(email: string) {
    this._email = email;
  }
  get email(): string {
    return this._email;
  }
  set phone(phone: string) {
    this._phone = phone;
  }
  get phone(): string {
    return this._phone;
  }
  set role(role: string) {
    this._role = role;
  }
  get role(): string {
    return this._role;
  }
}
