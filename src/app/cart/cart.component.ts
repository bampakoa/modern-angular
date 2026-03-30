import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../products/product';
import { CartService } from './cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    imports: [FormsModule, ReactiveFormsModule]
})
export class CartComponent implements OnInit {
  private cartService = inject(CartService);


  cartForm = new FormGroup({
    products: new FormArray<FormControl<number>>([])
  });
  cart: Product[] = [];

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cart.forEach(() => {
      this.cartForm.controls.products.push(
        new FormControl(1, { nonNullable: true })
      );
    });
  }

}
