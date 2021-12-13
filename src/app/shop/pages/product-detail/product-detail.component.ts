import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { CommonService } from 'src/app/shared/helpers/common.service';
import { ShopManagementService } from '../../services/shop-management.service';

import { User } from 'src/models/User';
import { Product } from 'src/models/Product';
import { Cart } from 'src/models/Cart';

import { CheckSignInComponent } from '..';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  public product!: Product;

  private _subscription!: Subscription;

  public cartData: Cart[] = [];

  public currentUser!: User;

  public quantityPurchased: number = 1;

  constructor(
    private _shopService: ShopManagementService,
    private _commonService: CommonService,
    private _activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.handleParams();
    this.cartData = this._shopService.cartData;
    this.currentUser = this._commonService.currentUserValue;
  }

  handleParams(): void {
    this._subscription = this._activatedRoute.params.subscribe(
      (params: Params) => {
        let idProduct = parseInt(params['id']);

        this._shopService.actionFetchProductById(idProduct).subscribe(
          (result: Product) => {
            this.product = result;
          },
          (error) => {
            console.log(error);
          }
        );
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
