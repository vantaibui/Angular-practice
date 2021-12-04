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
    private _productService: ProductManagementService
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

  onDeleteProduct(id: number): void {
    this._productService.actionDeleteProduct(id).subscribe(
      (result) => {
        this.updateDataAfterDelete(id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateDataAfterDelete(id: number): void {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === id) {
        this.productList.splice(i, 1);
        this.dataSource.paginator = this.paginator;
        break;
      }
    }
  }

  onEditProduct(id: number): void {
    this._router.navigate(['/admin/products/editProduct', id]);
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
