import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, inject } from '@angular/core';

import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
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
