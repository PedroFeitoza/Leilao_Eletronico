import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-product-page',
  templateUrl: './offer-product-page.component.html',
  styleUrls: ['./offer-product-page.component.scss']
})
export class OfferProductPageComponent {

  constructor(private router: Router) { }
  public errorType: number = -999;
  public errorMessage: string = '';

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
