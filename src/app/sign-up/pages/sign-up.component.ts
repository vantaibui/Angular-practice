import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/models/User';
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  public user!: User;

  private _subscription!: Subscription;

  public signUpForm!: FormGroup;

  public hide: boolean = true;

  constructor(
    private _signUpService: SignUpService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = new User();
    this.createFormSignUp();
  }

  createFormSignUp(): void {
    this.signUpForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: [
        '',
        [Validators.required, Validators.pattern('^[a-z0-9_-]{3,16}$')],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$'
          ),
        ],
      ],
      avatar: 'https://robohash.org/suntisteaperiam.png?size=50x50&set=set1',
      gender: ['Male', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9,15}$')]],
      birthday: ['', [Validators.required]],
    });
  }

  onSignUp(): void {
    console.log(this.signUpForm.value);
    this._subscription = this._signUpService
      .signUp(this.signUpForm.value)
      .subscribe(
        (result) => {
          this.user = result;
          this._router.navigateByUrl('/sign-in');
          this.signUpForm.reset();
          console.log(result);
        },
        (error) => {
          console.log(error);
          this._router.navigateByUrl('/sign-up');
        }
      );
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
