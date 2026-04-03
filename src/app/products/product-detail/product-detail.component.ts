import { Component, OnChanges, inject, input, output, model, linkedSignal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../cart/cart.service';
import { PriceComponent } from '../price/price.component';
import { MatButton } from '@angular/material/button';
import { CurrencyPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    imports: [MatButton, CurrencyPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnChanges {
  private productService = inject(ProductsService);
  authService = inject(AuthService);
  private data = toSignal(inject(ActivatedRoute).data);
  private cartService = inject(CartService);
  private dialog = inject(MatDialog);


  readonly product = input<Product>();
  readonly bought = output();
  readonly deleted = output();
  readonly id = input(-1);
  readonly selectedProduct = linkedSignal<Product>(() => this.data()!['product']);
  readonly price = model<number | undefined>();

  ngOnChanges(): void {
    this.productService.getProduct(this.id()).subscribe(product => this.selectedProduct.set(product));
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
