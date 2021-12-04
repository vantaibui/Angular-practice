import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/models/Product';
import { ShopManagementService } from '../../services/shop-management.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product!: Product;

  constructor(
    private _shopService: ShopManagementService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.product = new Product();
  }

  ngOnInit(): void {
    this.handleParams();
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
}
