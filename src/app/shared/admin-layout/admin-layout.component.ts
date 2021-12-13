import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/User';
import { CommonService } from '../helpers/common.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  // private userLogin: any = localStorage.getItem('user_login');

  public account!: User;

  constructor(private _commonService: CommonService) {}

  ngOnInit(): void {
    // this.account = JSON.parse(this.userLogin);

    this.account = this._commonService.currentUserValue;
  }

  logout(): void {
    this._commonService.logout();
  }
}
