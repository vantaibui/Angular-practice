import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/models/Category';
import { CategoryManagementService } from '../../services/category-management.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  private _category!: Category;

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
    });
  }

  onCreateCategory(): void {
    let formValues = this.createCategoryForm.value;

    this._categoryService.actionCreateCategory(formValues).subscribe(
      (result: Category) => {
        this._category = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
