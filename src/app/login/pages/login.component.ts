import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Model
import { User } from 'src/models/User';

// Service
import { AuthenticateService } from '../services/authenticate.service';

// Constants
import * as Constants from '../../../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public user!: User;

  private _subscription!: Subscription;

  public signIn!: FormGroup;

  public hide: boolean = true;

  get userNameInput() {
    return this.signIn.get('username');
  }
  get passwordInput() {
    return this.signIn.get('password');
  }

  constructor(
    private _authService: AuthenticateService,
    private _router: Router,
    public _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = new User();
    this.createFormLogin();
  }

  createFormLogin(): void {
    this.signIn = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    // this.signIn = new FormGroup({
    //   username: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required]),
    // });
  }

  onLogin(): void {
    let userLogin = this.signIn.value;

    this._subscription = this._authService
      .authenticate(userLogin.username, userLogin.password)
      .subscribe(
        (result) => {
          this.user = result;
          if (
            this.user.firstName.toLowerCase().match('administrator') !== null
          ) {
            this._router.navigateByUrl('/admin');
          } else {
            this._router.navigateByUrl('/');
          }
          localStorage.setItem(Constants.USER_LOGIN, JSON.stringify(this.user));
          this.signIn.reset();
        },
        (error) => {
          this._router.navigateByUrl('/login');
        }
      );
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}