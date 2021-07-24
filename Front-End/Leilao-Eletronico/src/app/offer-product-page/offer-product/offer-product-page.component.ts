import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';
import { Offer } from './../../Models/Offer';

@Component({
  selector: 'app-offer-product-page',
  templateUrl: './offer-product-page.component.html',
  styleUrls: ['./offer-product-page.component.scss']
})
export class OfferProductPageComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService) { }
  public errorType: number = -999;
  public errorMessage: string = '';

  //Service
  public product: Product = {
    responsibleName: null,
    productName: null,
    productDescription: null,
    initialOffer: null,
    bidsClosingDate: null,
    bids: [],
  };

  onSubmit() {
    this.product.responsibleName = localStorage.getItem('Name');
    this.productService.addProduct(this.product).subscribe(
          (success) => {
            this.product.responsibleName = null;
            this.product.productName = null;
            this.product.productDescription = null;
            this.product.initialOffer = null;
            this.product.bidsClosingDate = null;
            this.router.navigateByUrl('/');
          },
          (error) => console.log(error),
          () => console.log('request completo')
    );
  }




  ngOnInit(): void {
  /*
    this.productService.getAllProducts().pipe(delay(1500)).
    subscribe(users => {
    this.users = users;
    }, err =>{
    console.log("Connection Failed");
    console.log(this.users);
  })*/
  }



//Validações
  private isNotNull(id: string): boolean {
    let ret: boolean;

    ret = (this.getInputValue(id) != '') ? true : false;
    return ret;
  }

  private getInputValue(n: string): string {
    return (<HTMLInputElement>document.getElementById(n)).value.trim();
  }

  private inputsValidator() : boolean {
    if (this.isNotNull('1') && this.isNotNull('2') && this.isNotNull('3') && this.isNotNull('4'))
      return true;
    return false;
  }

  public isInputNotNull(id: string): void {
    if (this.inputsValidator()) {
      this.errorType = 0;
      this.errorMessage = '';
    }
  }

  public cancel(): void {
    this.router.navigateByUrl('/');
  }

  public formValidator() {
    if (this.inputsValidator()) {
      this.errorType = 0;
      this.errorMessage = '';
    }
    else {
      this.errorType = -1;
      this.errorMessage = "Todos os Campos são obrigatórios";
      console.log(this.errorMessage);
    }
  }

}
