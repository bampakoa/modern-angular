import { ChangeDetectionStrategy, Component, OnInit, inject, output, signal } from '@angular/core';
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
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css'],
    imports: [FormsModule, ReactiveFormsModule, MatFormField, MatInput, MatAutocompleteTrigger, MatError, MatAutocomplete, MatOption, MatHint, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, MatLabel, MatSelect, MatButton],
    changeDetection: ChangeDetectionStrategy.OnPush
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
  readonly showPriceRangeHint = signal(false);
  readonly products = toSignal(this.productsService.getProducts());
  readonly filteredProducts = signal<Product[]>([]);
  readonly categories = signal(['Hardware', 'Computers', 'Clothing', 'Software']);
  get name() { return this.productForm.controls.name }
  get price() { return this.productForm.controls.price }

  ngOnInit(): void {
    this.price.valueChanges.subscribe(price => {
      if (price) {
        this.showPriceRangeHint.set(price > 1 && price < 10000);
      }
    });
    this.name.valueChanges.pipe(
      map(name => this.filteredProducts.set(this.products()!.filter(product => product.name.startsWith(name))))
    );
  }

  createProduct() {
    this.productsService.addProduct(this.name.value, Number(this.price.value)).subscribe(product => {
      this.productForm.reset();
      this.added.emit(product);
    });
  }

}
