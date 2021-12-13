import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Model
import { User } from 'src/models/User';

// Service
import { AuthenticateService } from '../services/authenticate.service';
import { CommonService } from 'src/app/shared/helpers/common.service';

// Constants
import * as Constants from '../../../constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  public user!: User;

  private _subscription!: Subscription;

  public signInForm!: FormGroup;

  public hide: boolean = true;

  get userNameInput() {
    return this.signInForm.get('username');
  }
  get passwordInput() {
    return this.signInForm.get('password');
  }

  constructor(
    private _authService: AuthenticateService,
    private _commonService: CommonService,
    private _router: Router,
    public _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = new User();
    this.createFormSignIn();
  }

  createFormSignIn(): void {
    this.signInForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onLogin(): void {
    let userLogin = this.signInForm.value;

    this._subscription = this._authService
      .authenticate(userLogin.username, userLogin.password)
      .subscribe(
        (result) => {
          this.user = result;
          if (this.user.role.toLowerCase().indexOf('admin') !== -1) {
            this._router.navigate(['/admin']);
          } else {
            this._router.navigate(['/']);
          }
          this._commonService.currentUserSubject$.next(this.user);

          localStorage.setItem(
            `${Constants.USER_LOGIN}`,
            JSON.stringify(this.user)
          );
        },
        (error) => {
          console.log(error.error);
          this._router.navigate(['/sign-in']);
        }
      );

    this.signInForm.reset();
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
