import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { AuthenticationService } from '../helpers/authentication.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  private userLogin: any = localStorage.getItem('user_login');

  public account!: User;

  constructor(private _authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.account = JSON.parse(this.userLogin);
  }

  logout(): void {
    this._authenticationService.logout();
  }
}
