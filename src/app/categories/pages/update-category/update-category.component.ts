import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Category } from 'src/models/Category';
import { CategoryManagementService } from '../../services/category-management.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
})
export class UpdateCategoryComponent implements OnInit {
  public category: Category = new Category();

  public updateCategoryForm!: FormGroup;

  constructor(
    private _categoryService: CategoryManagementService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.loadData();
  }

  loadData(): void {
    let idCategory: number = this.data.id;

    this._categoryService.actionFetchCategoryById(idCategory).subscribe(
      (result: Category) => {
        this.category = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm(): void {
    this.updateCategoryForm = this._formBuilder.group({
      code: [this.category.code, [Validators.required]],
      name: [this.category.name, [Validators.required]],
      thumbnail: [this.category.thumbnail, [Validators.required]],
    });
  }

  onUpdateCategory(): void {
    this._categoryService.actionUpdateCategory(this.category).subscribe(
      (result: Category) => {
        this.category = result;
        this.dialogRef.close();
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
