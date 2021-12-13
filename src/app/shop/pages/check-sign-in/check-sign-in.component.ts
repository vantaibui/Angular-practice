import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-sign-in',
  templateUrl: './check-sign-in.component.html',
  styleUrls: ['./check-sign-in.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CheckSignInComponent implements OnInit {
  constructor(
    private _router: Router,
    private _dialogRef: MatDialogRef<CheckSignInComponent>
  ) {}

  ngOnInit(): void {}

  onHandleCheck(): void {
    this._router.navigateByUrl('/sign-in');
    this._dialogRef.close();
  }
}
