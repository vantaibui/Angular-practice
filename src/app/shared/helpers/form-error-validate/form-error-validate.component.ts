import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-error-validate',
  templateUrl: './form-error-validate.component.html',
  styleUrls: ['./form-error-validate.component.scss'],
})
export class FormErrorValidateComponent implements OnInit {
  @Input('control') control: any;

  constructor() {}

  ngOnInit(): void {}

  get message() {
    for (const error of this.control.errors) {
      if (this.control.dirty) {
        return this.getErrorMessage(error, this.control.errors[error]);
      }
    }
    return null;
  }

  getErrorMessage(error: any, value: any): any {
    let messages = {
      required: '',
      minLength: `${value.requiredLength}`,
    };

    return messages;
  }
}
