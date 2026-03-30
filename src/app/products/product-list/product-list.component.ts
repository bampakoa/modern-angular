import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { RouterLink } from '@angular/router';
import { ProductCreateComponent } from '../product-create/product-create.component';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    imports: [MatTable, MatSort, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, MatCellDef, MatCell, RouterLink, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, MatPaginator, ProductCreateComponent, CurrencyPipe]
})
export class ProductListComponent implements OnInit {
  private productService = inject(ProductsService);


  selectedProduct: Product | undefined;
  products = new MatTableDataSource<Product>([]);
  columnNames = ['name', 'price'];
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  ngOnInit(): void {
    this.getProducts();
  }

  onBuy() {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  onAdd(product: Product) {
    this.products.data.push(product);
  }

  onDelete() {
    this.products.data = this.products.data.filter(product => product !== this.selectedProduct);
    this.selectedProduct = undefined;
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.products = new MatTableDataSource(products);
      this.products.sort = this.sort;
      this.products.paginator = this.paginator;
    });
  }

}
