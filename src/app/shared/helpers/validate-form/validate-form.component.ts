import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class ValidateFormComponent implements OnInit {
  @Input('control') control: any;

  @Input('name-control') nameControl: string = '';

  constructor() {}

  ngOnInit(): void {}

  get message(): any {
    for (const err in this.control.errors) {
      if (this.control.dirty) {
        return this.getErrorMessage(err, this.control.errors[err]);
      }
    }

    return null;
  }

  getErrorMessage(error: string, value: any): string {
    let messages = {
      // required: `Enter your ${this.nameControl}`,
      required: `Please fill out this ${this.nameControl} field`,
      pattern: `Please enter correctly`,
    };

    let requirementError = error.toLowerCase();
    switch (requirementError) {
      case 'required':
        return messages.required;
      case 'pattern':
        return messages.pattern;
      default:
        return messages.required;
    }
  }
}
