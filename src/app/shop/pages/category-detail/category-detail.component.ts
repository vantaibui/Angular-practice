import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/models/Category';
import { Product } from 'src/models/Product';
import { ShopManagementService } from '../../services/shop-management.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit, OnDestroy {
  public category: Category = new Category();

  public products: Product[] = [];

  private _subscription!: Subscription;

  constructor(
    private _shopService: ShopManagementService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.handleParams();
  }

  handleParams(): void {
    this._activatedRoute.params.subscribe((params: Params) => {
      let idCategory = parseInt(params['id']);

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
    });
  }

  loadProducts(categoryCode: string): void {
    this._shopService.actionFetchProductByCategoryCode(categoryCode).subscribe(
      (result: Product[]) => {
        this.products = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
