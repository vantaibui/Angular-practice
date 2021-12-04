import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryManagementService } from '../services/category-management.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  public createCategoryForm!: FormGroup;

  constructor(
    private _categoryService: CategoryManagementService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.createCategoryForm = this._formBuilder.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      products: [],
    });
  }

  onCreateCategory(): void {
    console.log(this.createCategoryForm.value);
  }
}
