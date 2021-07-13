import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BidPageComponent } from './bid-page/bid-page.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { OfferProductPageComponent } from './offer-product-page/offer-product-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'offer-product',
    component: OfferProductPageComponent
  },
  {
    path: 'bids',
    component: BidPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
