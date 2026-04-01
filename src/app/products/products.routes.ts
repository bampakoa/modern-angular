import { Routes } from '@angular/router';
import { productDetailResolver } from './product-detail.resolver';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    resolve: {
      product: productDetailResolver
    }
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
