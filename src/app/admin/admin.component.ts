import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';

import { AuthenticationService } from '../shared/helpers/authentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  // public account!: User;

  // constructor(private _authenticationService: AuthenticationService) {}

  // ngOnInit(): void {
  //   this.account = this._authenticationService.currentUserValue;
  // }
  constructor() {}
  ngOnInit(): void {}
}
