import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { ProductService } from './../../Services/product.service';
import { InputOffer } from './../../Models/InputOffer';
import { OfferService } from 'src/app/Services/offer.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-bid-page',
  templateUrl: './bid-page.component.html',
  styleUrls: ['./bid-page.component.scss']
})


export class BidPageComponent implements OnInit{

  constructor(private offerService: OfferService, private productService: ProductService, private route: Router) { }

  displayedColumns: string[] = ['ProductName', 'InitialOffer', 'ProductResponsible','ClosingDate','LastBid','LastBidDate', 'BidResponsible', 'NewBid'];
  products: Product[] = [];
  isOfferValid: boolean = false;

  ngOnInit(): void {
    this.productService.getAllProducts().pipe(delay(0)).
    subscribe(products => {
      products.forEach(item => {
        let lastBid = Number.parseInt((item.bids.length-1).toString());
        const datepipe: DatePipe = new DatePipe('en-US')
        let formattedDate: string;
        item.lastBidValue = item.bids.length > 0? item.bids[lastBid].bid : 0;
        item.lastBidDate = item.bids.length > 0? item.bids[lastBid].dateOffer : '-';
        formattedDate = item.lastBidDate != '-'
        ? datepipe.transform(item.lastBidDate, 'dd/MM/YYYY HH:mm') as string
        : '-';
        item.lastBidDate = formattedDate;
        item.bidsClosingDate = datepipe.transform(item.bidsClosingDate, 'dd/MM/YYYY HH:mm' ) as string;
        item.lastBidResponsible = item.bids.length > 0? item.bids[lastBid].responsibleName : 'Sem Lances';
      })
      this.products = products;
      console.table(this.products)
    }, err =>{
      console.log("Connection Failed");
    })
  }

  clearInput(){
    let container = document.getElementById('newBid') as HTMLInputElement;
    container.value = '';
  }

  offerValidator(product: Product, bid: any) {
    let closingDate = product.bidsClosingDate != null ? product.bidsClosingDate: new Date(1,1,1);
    let initialOffer: number = product.initialOffer != null ? product.initialOffer : Number.MAX_VALUE;
    let lastBid: number = product.lastBidValue != null ? product.lastBidValue : Number.MAX_VALUE;
    let currentDate: Date = new Date();

    if(currentDate >= closingDate) {
      this.isOfferValid = false;
      return;
    }
    if(bid <= initialOffer) {
      this.isOfferValid = false;
      return;
    }
    if(bid <= lastBid) {
      this.isOfferValid = false;
      return;
    }
    this.isOfferValid = true;
  }
  onSubmit(product: Product, bid: any)
  {
    let container = document.getElementById('newBid') as HTMLInputElement;
    let productId = product.id;
    let BidResponsible = localStorage.getItem('Name');
    console.log("VALOR:" + bid);
    let newBid = parseFloat(parseFloat(bid).toFixed(2));

    let offer: InputOffer = {
      productId: productId,
      responsibleName: BidResponsible as string,
      bid: Number.isNaN(newBid) ? 0 : newBid
    }
    //Not Used
    let date = product.bidsClosingDate as string;
    let day = Number.parseInt(date.substring(0,2));
    let month = Number.parseInt(date.substring(3,5));
    let year = Number.parseInt(date.substring(6,10));
    let dateFormated = new Date(year, month, day);

    if(offer.productId == null || offer.responsibleName == null || offer.bid == 0) {
      alert('Lance Inexistente');
      return;
    }

    else {
      this.offerService.addOfferSecondary(offer).pipe(delay(0))
      .subscribe((success) =>{
        console.log(success)
        if(success == null){
          alert('Oferta ja Encerrada!');
          return;
        }
        alert('Novo Lance Aplicado');
        window.location.reload();
      },
      (error)=> {
        console.log(error)
      }
      );
    }

  }
}
