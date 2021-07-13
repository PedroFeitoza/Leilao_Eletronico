import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferProductPageComponent } from './offer-product-page.component';

describe('OfferProductPageComponent', () => {
  let component: OfferProductPageComponent;
  let fixture: ComponentFixture<OfferProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
