import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Model
import { User } from 'src/models/User';

// Service
import { SignUpService } from '../services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
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
      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern(
            `^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$ `
          ),
          Validators.minLength(2),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern(
            `^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$ `
          ),
          Validators.minLength(2),
        ],
      ],
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
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/'),
        ],
      ],
      birthday: ['', [Validators.required]],
    });
  }

  onSignUp(): void {
    console.log(this.signUpForm);

    // this._subscription = this._signUpService
    //   .signUp(this.signUpForm.value)
    //   .subscribe(
    //     (result) => {
    //       this.user = result;
    //       this._router.navigateByUrl('/sign-in');
    //       this.signUpForm.reset();
    //     },
    //     (error) => {
    //       console.log(error.error);
    //       this._router.navigateByUrl('/sign-up');
    //     }
    //   );
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
