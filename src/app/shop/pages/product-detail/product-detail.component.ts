import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cart } from 'src/models/Cart';
import { Product } from 'src/models/Product';
import { ShopManagementService } from '../../services/shop-management.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailComponent implements OnInit {
  public product!: Product;

  public quantityPurchased: number = 1;

  public cartData: Cart[] = [];

  constructor(
    private _shopService: ShopManagementService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.handleParams();
    this.cartData = this._shopService.cartData;
  }

  handleParams(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      let idProduct = parseInt(params['id']);

      this._shopService.actionFetchProductById(idProduct).subscribe(
        (result: Product) => {
          this.product = result;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  onAddProductToCart(product: Product, quantity: number): void {
    this._shopService.actionAddProductToCart(product, quantity);
    this.cartData = this._shopService.cartData;
  }
}
