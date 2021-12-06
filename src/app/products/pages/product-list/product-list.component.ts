import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Product } from 'src/models/Product';
import { ProductManagementService } from '../../services/product-management.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit {
  public productList!: Product[];

  private _subscription!: Subscription;

  public openForm: boolean = true;

  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'quantity',
    'thumbnail',
    'category',
    'status',
    'action',
  ];

  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _router: Router,
    private _productService: ProductManagementService,
    public dialog: MatDialog
  ) {
    this.productList = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._subscription = this._productService.actionFetchAllProduct().subscribe(
      (result: Product[]) => {
        this.productList = result;
        // Pagination table
        this.dataSource = new MatTableDataSource<Product>(result);
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  updateDataAfterActionCompleted(product: any, action: string): void {
    for (let i = 0; i < this.productList.length; i++) {
      if (action.indexOf('add') !== -1) {
        if (this.productList[i].id === product.id) {
          break;
        } else {
          this.productList.push(product);
          this.dataSource.paginator = this.paginator;
          break;
        }
      } else if (action.indexOf('edit') !== -1) {
        if (this.productList[i].id === product.id) {
          this.productList[i] = product;
          this.dataSource.paginator = this.paginator;
          break;
        }
      } else {
        if (this.productList[i].id === product) {
          this.productList.splice(i, 1);
          this.dataSource.paginator = this.paginator;
          break;
        }
      }
    }
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(AddProductComponent);
    dialogRef.afterClosed().subscribe((result) => {
      this.updateDataAfterActionCompleted(result, 'add');
    });
  }

  openDialogEdit(id: number): void {
    const dialogRef = this.dialog.open(UpdateProductComponent, {
      data: { idProduct: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.updateDataAfterActionCompleted(result, 'edit');
    });
  }

  openDialogDelete(id: number): void {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      data: { idProduct: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.updateDataAfterActionCompleted(result, 'delete');
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
