import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductManagementService } from 'src/app/products/services/product-management.service';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  public productList!: Product[];

  private _subscription!: Subscription;

  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'quantity',
    'thumbnail',
    'category',
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

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
