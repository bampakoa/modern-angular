import { Component, OnInit, OnChanges, inject, input, output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter, Observable, of, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../cart/cart.service';
import { PriceComponent } from '../price/price.component';
import { MatButton } from '@angular/material/button';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    imports: [MatButton, AsyncPipe, CurrencyPipe]
})
export class ProductDetailComponent implements OnInit, OnChanges {
  private productService = inject(ProductsService);
  authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private cartService = inject(CartService);
  private dialog = inject(MatDialog);


  readonly product = input<Product>();
  readonly bought = output();
  readonly deleted = output();
  readonly id = input(-1);
  product$: Observable<Product> | undefined;
  price: number | undefined;

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(
      switchMap(data => of(data['product']))
    );
  }

  ngOnChanges(): void {
   this.product$ = this.productService.getProduct(this.id());
  }

  buy(product: Product) {
    this.cartService.addProduct(product);
  }

  changePrice(product: Product) {
    this.dialog.open(PriceComponent, {
      data: product.price
    }).afterClosed().pipe(
      filter(price => !!price),
      switchMap(price => this.productService.updateProduct(product.id, price))
    ).subscribe(() => {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  remove(product: Product) {
    this.productService.deleteProduct(product.id).subscribe(() => {
      this.deleted.emit();
    });
  }

}
