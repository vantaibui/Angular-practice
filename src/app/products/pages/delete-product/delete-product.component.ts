import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { Product } from 'src/models/Product';
import { ProductManagementService } from '../../services/product-management.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit, OnDestroy {
  public productList: Product[] = [];

  private _subscription!: Subscription;

  constructor(
    private _productService: ProductManagementService,
    public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idProduct: number }
  ) {}

  ngOnInit(): void {}

  onDeleteProduct(id: number): void {
    this._productService.actionDeleteProduct(id).subscribe(
      (result) => {
        this.dialogRef.close(id);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
