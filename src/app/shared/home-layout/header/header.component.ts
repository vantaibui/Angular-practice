import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public activeFormSearch: boolean = false;
  public activeFormCart: boolean = false;
  public activeFormSignIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
