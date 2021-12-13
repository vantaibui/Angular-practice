import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { User } from 'src/models/User';
import { UserManagementService } from '../../services/user-management.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
})
export class UpdateUserComponent implements OnInit, OnDestroy {
  public user!: User;

  public roles: string[] = ['Admin', 'User'];

  public editUserForm!: FormGroup;

  private _subscription!: Subscription;

  constructor(
    private _userService: UserManagementService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }
  ) {}

  ngOnInit(): void {
    this.user = this.data.user;
    this.createForm();
  }

  createForm(): void {
    this.editUserForm = this._formBuilder.group({
      username: [''],
      password: [''],
      firstName: [''],
      lastName: [''],
      email: [''],
      avatar: [''],
      gender: [''],
      phone: [''],
      birthday: [''],
      status: [''],
      role: [''],
    });
  }

  onUpdateUser(): void {
    let formValues = this.editUserForm.value;

    this.user.username =
      formValues['username'] !== ''
        ? formValues['username']
        : this.user.username;
    this.user.firstName =
      formValues['firstName'] !== ''
        ? formValues['firstName']
        : this.user.firstName;
    this.user.lastName =
      formValues['lastName'] !== ''
        ? formValues['lastName']
        : this.user.lastName;
    this.user.email =
      formValues['email'] !== '' ? formValues['email'] : this.user.email;
    this.user.avatar =
      formValues['avatar'] !== '' ? formValues['avatar'] : this.user.avatar;
    this.user.gender =
      formValues['gender'] !== '' ? formValues['gender'] : this.user.gender;
    this.user.phone =
      formValues['phone'] !== '' ? formValues['phone'] : this.user.phone;
    this.user.birthday =
      formValues['birthday'] !== ''
        ? formValues['birthday']
        : this.user.birthday;
    this.user.role =
      formValues['role'] !== '' ? formValues['role'] : this.user.role;

    if (formValues['status'] === 'true') {
      this.user.status = true;
    } else if (formValues['status'] === 'false') {
      this.user.status = false;
    } else {
      this.user.status = this.user.status;
    }

    this._subscription = this._userService
      .actionUpdateUserById(this.user)
      .subscribe(
        (result: User) => {
          this.user = result;
          this.dialogRef.close(this.user);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
