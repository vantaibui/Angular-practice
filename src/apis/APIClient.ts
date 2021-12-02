import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import * as Constants from '../constants';

let userLogin: any = localStorage.getItem('user_login');

let token: string | null =
  userLogin !== null ? JSON.parse(userLogin).token : {};

// let token: string | null = userLogin ? null : JSON.parse(userLogin).token;

const httpOptions = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + 'token',
});

export class APIClient {
  private _baseUrl: string = '';
  private _headers: any = {};

  constructor(configs?: any) {
    this._baseUrl = `${Constants.BASE_URL}/${configs.endpoint}`;
    this._headers = httpOptions;
  }

  set setBaseUrl(baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  get getBaseUrl(): string {
    return this._baseUrl;
  }
  set setHeaders(headers: any) {
    this._headers = headers;
  }

  get gethHeaders(): any {
    return this._headers;
  }

  handleResponse(response: any) {
    return { status: response.status, data: response.data };
  }
  handleError(error: any) {
    return { error };
  }
}
