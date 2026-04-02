import { Component, OnInit, inject, output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { priceRangeValidator } from '../price-range.directive';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { MatFormField, MatError, MatHint, MatSuffix, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatAutocompleteTrigger, MatAutocomplete, MatOption } from '@angular/material/autocomplete';
import { MatDatepickerInput, MatDatepickerToggle, MatDatepicker } from '@angular/material/datepicker';
import { MatSelect } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css'],
    imports: [FormsModule, ReactiveFormsModule, MatFormField, MatInput, MatAutocompleteTrigger, MatError, MatAutocomplete, MatOption, MatHint, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatLabel, MatSelect, MatButton, AsyncPipe]
})
export class ProductCreateComponent implements OnInit {
  private productsService = inject(ProductsService);


  readonly added = output<Product>();
  productForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [Validators.required, priceRangeValidator()]
    })
  });
  showPriceRangeHint = false;
  products: Product[] = [];
  products$: Observable<Product[]> | undefined;
  categories = ['Hardware', 'Computers', 'Clothing', 'Software'];
  get name() { return this.productForm.controls.name }
  get price() { return this.productForm.controls.price }

  ngOnInit(): void {
    this.price.valueChanges.subscribe(price => {
      if (price) {
        this.showPriceRangeHint = price > 1 && price < 10000;
      }
    });
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.products$ = this.name.valueChanges.pipe(
      map(name => this.products.filter(product => product.name.startsWith(name)))
    );
  }

  createProduct() {
    this.productsService.addProduct(this.name.value, Number(this.price.value)).subscribe(product => {
      this.productForm.reset();
      this.added.emit(product);
    });
  }

}
