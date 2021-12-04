import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/models/Category';
import { Product } from 'src/models/Product';
import { ShopManagementService } from '../../services/shop-management.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
})
export class CategoryDetailComponent implements OnInit {
  public category: Category = new Category();

  public products: Product[] = [];

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

      this._shopService.actionFetchCategoryById(idCategory).subscribe(
        (result: Category) => {
          this.category = result;
          this.products = result.products;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
