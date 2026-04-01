import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { CartComponent } from './cart/cart.component';
import { checkoutGuard } from './checkout.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [authGuard],
    canDeactivate: [checkoutGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.routes')
  },
  { path: '**', component: PageNotFoundComponent }
];
