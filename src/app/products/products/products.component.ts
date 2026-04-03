import { CdkDragDrop, moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { Product } from '../product';
import { ProductsService } from '../products.service';
import { MatList, MatListItem, MatSelectionList, MatListOption } from '@angular/material/list';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    imports: [MatList, CdkDropList, MatListItem, CdkDrag, MatSelectionList, MatListOption, MatGridList, MatGridTile],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductsService);


  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  reorder(event: CdkDragDrop<Product[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

}
