import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Category } from 'src/models/Category';
import { Product } from 'src/models/Product';
import { User } from 'src/models/User';
import { AdminManagementService } from '../services/admin-management.service';

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

  public quantityCategory: number = 0;
  public quantityProduct: number = 0;
  public quantityUser: number = 0;

  constructor(private _adminService: AdminManagementService) {
    this.productList = [];
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // Load category
    this._subscription = this._adminService.actionFetchAllCategory().subscribe(
      (result: Category[]) => {
        this.quantityCategory = result.length;
      },
      (err) => {
        console.log(err);
      }
    );

    // Load product
    this._subscription = this._adminService.actionFetchAllProduct().subscribe(
      (result: Product[]) => {
        this.productList = result;

        // Quantity product
        this.quantityProduct = this.productList.length;

        // Pagination table
        this.dataSource = new MatTableDataSource<Product>(result);
        this.dataSource.paginator = this.paginator;
      },
      (err) => {
        console.log(err);
      }
    );

    // Load user
    this._subscription = this._adminService.actionFetchAllUser().subscribe(
      (result: User[]) => {
        this.quantityUser = result.length;
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
