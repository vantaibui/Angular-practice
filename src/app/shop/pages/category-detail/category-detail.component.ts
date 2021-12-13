import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { CommonService } from 'src/app/shared/helpers/common.service';
import { ShopManagementService } from '../../services/shop-management.service';

import { User } from 'src/models/User';
import { Category } from 'src/models/Category';
import { Product } from 'src/models/Product';
import { Cart } from 'src/models/Cart';

import { CheckSignInComponent } from '..';
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit, OnDestroy {
  public category: Category = new Category();

  public products: Product[] = [];

  public cartData: Cart[] = [];

  public currentUser!: User;

  private _subscription!: Subscription;

  constructor(
    private _shopService: ShopManagementService,
    private _commonService: CommonService,
    private _activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.handleParams();
    this.cartData = this._shopService.cartData;
    this.currentUser = this._commonService.currentUserValue;
  }

  handleParams(): void {
    this._subscription = this._activatedRoute.params.subscribe(
      (params: Params) => {
        let idCategory = parseInt(params['id']);

        this.loadCategoryById(idCategory);
      }
    );
  }

  loadCategoryById(idCategory: number): void {
    this._subscription = this._shopService
      .actionFetchCategoryById(idCategory)
      .subscribe(
        (result: Category) => {
          this.category = result;
          this.loadProducts(this.category.code);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  loadProducts(categoryCode: string): void {
    this._subscription = this._shopService
      .actionFetchProductByCategoryCode(categoryCode)
      .subscribe(
        (result: Product[]) => {
          this.products = result;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onAddProductToCart(product: Product, quantity: number): void {
    if (this.currentUser) {
      this._shopService.actionAddProductToCart(product, quantity);
      this.cartData = this._shopService.cartData;
      this._commonService.quantityProductInCart$.next(this.cartData.length);
    } else {
      this.openDialog();
    }
  }

  openDialog(): void {
    this.dialog.open(CheckSignInComponent);
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
