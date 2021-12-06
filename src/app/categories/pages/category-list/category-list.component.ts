import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Category } from 'src/models/Category';
import { CategoryManagementService } from '../../services/category-management.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Subscription } from 'rxjs';
import { UpdateCategoryComponent } from '../update-category/update-category.component';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit, AfterViewInit {
  public categories: Category[] = [];

  private _subscription!: Subscription;

  displayedColumns: string[] = ['id', 'code', 'name', 'thumbnail', 'action'];

  dataSource = new MatTableDataSource<Category>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _categoryService: CategoryManagementService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadData(): void {
    this._subscription = this._categoryService
      .actionFetchAllCategory()
      .subscribe(
        (result: Category[]) => {
          this.categories = result;
          // Pagination table
          this.dataSource = new MatTableDataSource<Category>(result);
          this.dataSource.paginator = this.paginator;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  updateDataAfterActionCompleted(category: any, action: string): void {
    for (let i = 0; i < this.categories.length; i++) {
      if (action.indexOf('add') !== -1) {
        if (this.categories[i].id === category.id) {
          break;
        } else {
          this.categories.push(category);
          this.dataSource.paginator = this.paginator;
          break;
        }
      } else if (action.indexOf('edit') !== -1) {
        if (this.categories[i].id === category.id) {
          this.categories[i] = category;
          this.dataSource.paginator = this.paginator;
          break;
        }
      } else {
        if (this.categories[i].id === category) {
          this.categories.splice(i, 1);
          this.dataSource.paginator = this.paginator;
          break;
        }
      }
    }
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(AddCategoryComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.updateDataAfterActionCompleted(result, 'add');
    });
  }

  openDialogEdit(id: number) {
    const dialogRef = this.dialog.open(UpdateCategoryComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.updateDataAfterActionCompleted(result, 'edit');
    });
  }

  openDialogDelete(id: number) {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.updateDataAfterActionCompleted(result, 'delete');
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
