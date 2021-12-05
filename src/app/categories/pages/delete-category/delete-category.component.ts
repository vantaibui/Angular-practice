import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/models/Category';
import { CategoryManagementService } from '../../services/category-management.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss'],
})
export class DeleteCategoryComponent implements OnInit {
  constructor(
    private _categoryService: CategoryManagementService,
    public dialogRef: MatDialogRef<DeleteCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  ngOnInit(): void {}

  onDeleteCategory(id: number): void {
    this._categoryService.actionDeleteCategory(id).subscribe(
      (result) => {
        console.log(result);
        // this.dialogRef.
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
