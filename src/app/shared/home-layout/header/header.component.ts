import { Component, OnInit } from '@angular/core';

// Model
import { Cart } from 'src/models/Cart';
import { User } from 'src/models/User';

// Service
import { CommonService } from '../../helpers/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public activeFormSearch: boolean = false;
  public activeMenu: boolean = false;

  // private userLogin: any = localStorage.getItem('user_login');

  public account!: User;

  public quantityProductInCart: number = 0;

  constructor(private _commonService: CommonService) {}

  ngOnInit(): void {
    // this.account = JSON.parse(this.userLogin);
    this.account = this._commonService.currentUserValue;

    this._commonService.quantityProductInCart$.subscribe(
      (result: number) => {
        this.quantityProductInCart = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout(): void {
    this._commonService.logout();
  }
}
