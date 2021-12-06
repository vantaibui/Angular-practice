import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Product } from 'src/models/Product';
import { ProductManagementService } from '../../services/product-management.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  public productList: Product[] = [];

  constructor(
    private _productService: ProductManagementService,
    public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idProduct: number }
  ) {}

  ngOnInit(): void {}

  onDeleteProduct(id: number): void {
    this._productService.actionDeleteProduct(id).subscribe(
      (result) => {
        console.log(result);
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
}
