import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-offer-product-page',
  templateUrl: './offer-product-page.component.html',
  styleUrls: ['./offer-product-page.component.scss']
})
export class OfferProductPageComponent {

  constructor(private router: Router, private productService: ProductService) { }
  public errorType: number = -999;
  public errorMessage: string = '';

  public product: Product = {
    responsibleName: '',
    productName: '',
    productDescription: '',
    initialOffer: 0,
    bidsClosingDate: '',
    bids: [],
    lastBidDate: '',
    lastBidResponsible: '',
    lastBidValue: 0
  };

  onSubmit() {
    this.product.responsibleName = localStorage.getItem('Name') as string;
    this.productService.addProduct(this.product).subscribe(
          (success) => {
            if(success == null)
              alert('Data de Encerramento incorreta!');
            else
              this.router.navigateByUrl('/');
          },
          (error) => console.log(error),
          () => console.log('request completo')
    );
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
    if(this.inputsValidator()) {
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
