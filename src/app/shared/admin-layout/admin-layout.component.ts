import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { AuthenticationService } from '../helpers/authentication.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  public account!: User;

  constructor(private _authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.account = this._authenticationService.currentUserValue;
  }
}
