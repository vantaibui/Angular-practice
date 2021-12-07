import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/models/Cart';
import { User } from 'src/models/User';
import { AuthenticationService } from '../../helpers/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public activeFormSearch: boolean = false;
  public activeFormCart: boolean = false;
  public activeFormSignIn: boolean = false;

  private userLogin: any = localStorage.getItem('user_login');

  public account!: User;

  @Input('cartData') cartData: any;

  constructor(private _authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.account = JSON.parse(this.userLogin);
  }

  logout(): void {
    this._authenticationService.logout();
  }
}
