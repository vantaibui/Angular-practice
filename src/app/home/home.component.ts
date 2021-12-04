import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public activeFormSearch: boolean = false;
  public activeFormCart: boolean = false;
  public activeFormSignIn: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
