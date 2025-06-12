import { Routes } from '@angular/router';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';

export const routes: Routes = [
  { path: '', component: ProductListingComponent },
  { path: 'products', component: ProductListingComponent },
  { path: '**', redirectTo: '' }
];