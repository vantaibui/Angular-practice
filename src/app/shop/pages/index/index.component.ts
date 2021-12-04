import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/models/Category';
import { Product } from 'src/models/Product';
import { ShopManagementService } from '../../services/shop-management.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit, OnDestroy {
  public products: Product[] = [];

  public categories: Category[] = [];

  private _subscription!: Subscription;

  constructor(
    private _shopService: ShopManagementService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._subscription = this._shopService.actionFetchAllProduct().subscribe(
      (result: Product[]) => {
        this.products = result;
      },
      (err) => {
        console.log(err);
      }
    );

    this._subscription = this._shopService.actionFetchAllCategory().subscribe(
      (result) => {
        this.categories = result;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  navigateCategory(code: string): void {
    this._router.navigate([
      '/shop/categories',
      { queryParams: { code: code } },
    ]);
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
