import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { OfferProductPageComponent } from './offer-product/offer-product-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [OfferProductPageComponent],
  exports: [OfferProductPageComponent]
})
export class OfferProductModule { }
